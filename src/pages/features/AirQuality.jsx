import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { Wind, AlertTriangle, CheckCircle, MapPin, Loader, Search } from 'lucide-react'
import axios from 'axios'
import { Country, City } from 'country-state-city'

const LocationPicker = ({ onLocationSelect }) => {
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng.lat, e.latlng.lng)
    },
  })
  return null
}

const AirQuality = () => {
  const [location, setLocation] = useState({ lat: 23.8103, lng: 90.4125 })
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [cityName, setCityName] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Load countries and cities on component mount
  useEffect(() => {
    const allCountries = Country.getAllCountries()
    setCountries(allCountries)
    
    // Set default country (Bangladesh)
    const defaultCountry = allCountries.find(country => country.name === 'Bangladesh')
    if (defaultCountry) {
      setSelectedCountry(defaultCountry.isoCode)
      setCityName('Dhaka')
    }
  }, [])

  const getAQIColor = (category) => {
    switch (category?.toLowerCase()) {
      case 'good':
        return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', color: '#22c55e' }
      case 'moderate':
        return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200', color: '#eab308' }
      case 'unhealthy for sensitive groups':
        return { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-200', color: '#f97316' }
      case 'unhealthy':
        return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200', color: '#ef4444' }
      case 'very unhealthy':
        return { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-200', color: '#a855f7' }
      case 'hazardous':
        return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200', color: '#6b7280' }
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200', color: '#6b7280' }
    }
  }

  const getAQIDescription = (category) => {
    switch (category?.toLowerCase()) {
      case 'good':
        return 'Air quality is satisfactory, and air pollution poses little or no risk.'
      case 'moderate':
        return 'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.'
      case 'unhealthy for sensitive groups':
        return 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.'
      case 'unhealthy':
        return 'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.'
      case 'very unhealthy':
        return 'Health alert: The risk of health effects is increased for everyone.'
      case 'hazardous':
        return 'Health warning of emergency conditions: everyone is more likely to be affected.'
      default:
        return 'Air quality information is not available.'
    }
  }

  const fetchAQIData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Get country name from country code
      const countryObj = countries.find(c => c.isoCode === selectedCountry)
      const countryName = countryObj ? countryObj.name : selectedCountry
      
      const response = await axios.get(
        'https://air-quality-index-6.onrender.com/air_quality_index',
        {
          params: { country: countryName, city: cityName },
          timeout: 30000
        }
      )
      
      setData(response.data)
      
      // Update map location if coordinates are provided
      if (response.data.latitude && response.data.longitude) {
        setLocation({ lat: response.data.latitude, lng: response.data.longitude })
      }
    } catch (err) {
      console.error('Error fetching AQI data:', err)
      if (err.code === 'ECONNABORTED') {
        setError('Request timeout. Please try again.')
      } else if (err.response?.status === 404) {
        setError('Air quality data not found for this location. Please try another city.')
      } else if (err.response?.status >= 500) {
        setError('Server error. Please try again later.')
      } else {
        setError('Failed to fetch air quality data. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLocationSelect = async (lat, lng) => {
    setLocation({ lat, lng })
    setLoading(true)
    
    try {
      // Use Nominatim reverse geocoding API to get actual location details
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse`,
        {
          params: {
            lat: lat,
            lon: lng,
            format: 'json',
            addressdetails: 1
          },
          headers: {
            'User-Agent': 'CityWeb-AirQuality-App'
          }
        }
      )
      
      if (response.data && response.data.address) {
        const address = response.data.address
        
        // Get country code
        const countryCode = address.country_code?.toUpperCase()
        
        // Get city name (try different address components)
        const cityName = address.city || 
                        address.town || 
                        address.village || 
                        address.municipality || 
                        address.county || 
                        address.state ||
                        'Unknown'
        
        if (countryCode) {
          setSelectedCountry(countryCode)
          setCityName(cityName)
        }
      }
    } catch (error) {
      console.error('Error getting location details:', error)
      // Fallback to approximate location if reverse geocoding fails
      const approximateLocation = getApproximateLocationFromCoords(lat, lng)
      if (approximateLocation) {
        setSelectedCountry(approximateLocation.country)
        setCityName(approximateLocation.city)
      }
    } finally {
      setLoading(false)
    }
  }

  const getApproximateLocationFromCoords = (lat, lng) => {
    // This is only a fallback in case the reverse geocoding API fails
    // Returns null so the user can manually enter the location
    console.warn('Reverse geocoding failed, please enter location manually')
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedCountry && cityName.trim()) {
      fetchAQIData()
    }
  }

  const pollutants = data ? [
    { name: 'PM2.5', value: data.pm25_aqi_value, category: data.pm25_aqi_category, unit: 'μg/m³' },
    { name: 'CO', value: data.co_aqi_value, category: data.co_aqi_category, unit: 'ppm' },
    { name: 'Ozone', value: data.ozone_aqi_value, category: data.ozone_aqi_category, unit: 'ppb' },
    { name: 'NO₂', value: data.no2_aqi_value, category: data.no2_aqi_category, unit: 'ppb' }
  ] : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 text-emerald-900 rounded-2xl mb-6">
            {/* <Wind className="h-20 w-20" /> */}
            <img src="/src/assets/icon3.png" alt="airQuality" className="h-30 w-30" />

          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Air Quality</span><span className="text-blue-600"> <span className="bg-gradient-to-r from-emerald-900 via-emerald-900 to-emerald-900 bg-clip-text text-transparent">Index</span></span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor and visualize air quality metrics across different regions. 
            Get real-time AQI data and health recommendations for informed decision making.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Location Selection Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-red-600 mr-3" />
              <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Location Selection</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <select
                  id="country"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select a country</option>
                  {countries.map(country => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter city name (e.g., Dhaka, New York, London)"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading || !selectedCountry || !cityName.trim()}
                className="w-full bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <Loader className="h-5 w-5 animate-spin mr-2" />
                ) : (
                  <Search className="h-5 w-5 mr-2" />
                )}
                Get AQI
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Wind className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">How to use:</p>
                  <p>1. Select country from dropdown and enter city name, or</p>
                  <p>2. Click on the map to select a location</p>
                  <p>3. Click "Get AQI" to view air quality data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Interactive Map</span></h2>
            <p className="text-gray-600 mb-4">Click anywhere on the map to select a location</p>
            
            <MapContainer
              center={[location.lat, location.lng]}
              zoom={6}
              style={{ height: '300px', width: '100%', borderRadius: '0.75rem' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[location.lat, location.lng]}>
                <Popup>
                  {data ? `${data.city}, ${data.country}` : 'Selected Location'}<br />
                  Lat: {location.lat.toFixed(6)}<br />
                  Lng: {location.lng.toFixed(6)}
                </Popup>
              </Marker>
              <LocationPicker onLocationSelect={handleLocationSelect} />
            </MapContainer>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <Loader className="h-12 w-12 animate-spin text-green-600 mx-auto mb-4" />
            <p className="text-gray-600">Fetching air quality data...</p>
          </div>
        )}

        {/* AQI Data Display */}
        {data && !loading && (
          <div className="space-y-8">
            {/* Main AQI Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-green-700 mb-2">
                  {data.city}, {data.country}
                </h2>
                <p className="text-gray-600">Current Air Quality Index</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Overall AQI */}
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${getAQIColor(data.aqi_category).bg} ${getAQIColor(data.aqi_category).border} border-4 mb-4`}>
                    <div className="text-center">
                      <div className={`text-4xl font-bold ${getAQIColor(data.aqi_category).text}`}>
                        {data.aqi_value}
                      </div>
                      <div className="text-xs text-gray-600">AQI</div>
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${getAQIColor(data.aqi_category).text}`}>
                    {data.aqi_category}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {getAQIDescription(data.aqi_category)}
                  </p>
                </div>

                {/* AQI Scale Reference */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">AQI Scale</h4>
                  <div className="space-y-3">
                    {[
                      { range: '0-50', category: 'Good', color: getAQIColor('good') },
                      { range: '51-100', category: 'Moderate', color: getAQIColor('moderate') },
                      { range: '101-150', category: 'Unhealthy for Sensitive Groups', color: getAQIColor('unhealthy for sensitive groups') },
                      { range: '151-200', category: 'Unhealthy', color: getAQIColor('unhealthy') },
                      { range: '201-300', category: 'Very Unhealthy', color: getAQIColor('very unhealthy') },
                      { range: '301+', category: 'Hazardous', color: getAQIColor('hazardous') }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: item.color.color }}
                        />
                        <span className="text-sm font-medium text-gray-700 w-16">{item.range}</span>
                        <span className="text-sm text-gray-600">{item.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Individual Pollutants */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Wind className="h-6 w-6 text-black mr-3" />
                <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Individual Pollutants</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pollutants.map((pollutant, index) => (
                  <div key={index} className={`rounded-xl p-6 border-2 ${getAQIColor(pollutant.category).bg} ${getAQIColor(pollutant.category).border}`}>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{pollutant.name}</h4>
                      <div className={`text-3xl font-bold mb-1 ${getAQIColor(pollutant.category).text}`}>
                        {pollutant.value}
                      </div>
                      <div className={`text-sm font-medium mb-2 ${getAQIColor(pollutant.category).text}`}>
                        {pollutant.category}
                      </div>
                      <div className="text-xs text-gray-600">
                        AQI Value
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Recommendations */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-black mr-3" />
                <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Health Recommendations</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">General Public</h4>
                  <div className={`p-4 rounded-lg ${getAQIColor(data.aqi_category).bg}`}>
                    {data.aqi_category?.toLowerCase() === 'good' && (
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Enjoy outdoor activities</li>
                        <li>• Air quality is ideal for all outdoor activities</li>
                        <li>• No health precautions needed</li>
                      </ul>
                    )}
                    {data.aqi_category?.toLowerCase() === 'moderate' && (
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Outdoor activities are generally safe</li>
                        <li>• Sensitive individuals should consider limiting prolonged outdoor exertion</li>
                        <li>• Monitor air quality if you have respiratory conditions</li>
                      </ul>
                    )}
                    {(data.aqi_category?.toLowerCase().includes('unhealthy') || data.aqi_category?.toLowerCase() === 'hazardous') && (
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Limit outdoor activities</li>
                        <li>• Consider wearing a mask when outdoors</li>
                        <li>• Keep windows closed and use air purifiers indoors</li>
                        <li>• Avoid outdoor exercise</li>
                      </ul>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Sensitive Groups</h4>
                  <div className={`p-4 rounded-lg ${getAQIColor(data.aqi_category).bg}`}>
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Sensitive groups include:</strong> Children, elderly, pregnant women, 
                      and people with heart or lung conditions.
                    </p>
                    {data.aqi_category?.toLowerCase() === 'good' && (
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Safe for all activities</li>
                        <li>• No special precautions needed</li>
                      </ul>
                    )}
                    {data.aqi_category?.toLowerCase() === 'moderate' && (
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Consider reducing prolonged outdoor exertion</li>
                        <li>• Watch for symptoms like coughing or shortness of breath</li>
                      </ul>
                    )}
                    {(data.aqi_category?.toLowerCase().includes('unhealthy') || data.aqi_category?.toLowerCase() === 'hazardous') && (
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Avoid outdoor activities</li>
                        <li>• Stay indoors with windows closed</li>
                        <li>• Consult healthcare provider if experiencing symptoms</li>
                        <li>• Use air purifiers if available</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Data Source Information */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Data Information</span></h4>
                  <p className="text-sm text-gray-600">
                    Source: {data.data_source} 
                    {/* Location: {data.latitude?.toFixed(4)}°, {data.longitude?.toFixed(4)}° */}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Last updated</p>
                  <p className="text-sm font-medium text-gray-700">
                    {new Date().toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AirQuality