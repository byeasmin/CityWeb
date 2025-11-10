import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { Home, MapPin, Calculator, Loader, Sun, Wind, TrendingUp, Users, Leaf, AlertCircle, CheckCircle, Info } from 'lucide-react'
import axios from 'axios'

const LocationPicker = ({ onLocationSelect }) => {
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng.lat, e.latlng.lng)
    },
  })
  return null
}

const LivabilityScore = () => {
  const [location, setLocation] = useState({ lat: 23.8103, lng: 90.4125 })
  const [manualLat, setManualLat] = useState('23.8103')
  const [manualLng, setManualLng] = useState('90.4125')
  const [solar, setSolar] = useState('4.5')
  const [aqi, setAqi] = useState('80')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLocationSelect = (lat, lng) => {
    setLocation({ lat, lng })
    setManualLat(lat.toFixed(6))
    setManualLng(lng.toFixed(6))
  }

  const handleManualSubmit = (e) => {
    e.preventDefault()
    const lat = parseFloat(manualLat)
    const lng = parseFloat(manualLng)
    
    if (isNaN(lat) || isNaN(lng)) {
      setError('Please enter valid latitude and longitude values')
      return
    }
    
    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      setError('Please enter valid coordinate ranges (Lat: -90 to 90, Lng: -180 to 180)')
      return
    }
    
    setLocation({ lat, lng })
    setError(null)
  }

  const calculateLivabilityScore = async () => {
    setLoading(true)
    setError(null)
    
    const solarValue = parseFloat(solar)
    const aqiValue = parseFloat(aqi)
    
    // Validate inputs
    if (isNaN(solarValue) || solarValue < 0 || solarValue > 5) {
      setError('Solar radiation score must be between 0 and 5')
      setLoading(false)
      return
    }
    
    if (isNaN(aqiValue) || aqiValue < 0 || aqiValue > 500) {
      setError('Air Quality Index must be between 0 and 500')
      setLoading(false)
      return
    }
    
    try {
      const response = await axios.get('https://livability-score.onrender.com/livability_score', {
        params: {
          lat: location.lat,
          lon: location.lng,
          solar: solarValue,
          aqi: aqiValue
        },
        timeout: 1000000
      })
      
      setData(response.data)
    } catch (err) {
      console.error('Error fetching livability score:', err)
      if (err.code === 'ECONNABORTED') {
        setError('Request timeout. Please try again.')
      } else if (err.response?.status === 404) {
        setError('Livability score service not found. Please try again later.')
      } else if (err.response?.status >= 500) {
        setError('Server error. Please try again later.')
      } else {
        setError('Failed to calculate livability score. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const getScoreColor = (score) => {
    switch (score?.toLowerCase()) {
      case 'high':
        return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', color: '#22c55e' }
      case 'medium':
      case 'moderate':
        return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200', color: '#eab308' }
      case 'low':
        return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200', color: '#ef4444' }
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200', color: '#6b7280' }
    }
  }

  const getScoreDescription = (score) => {
    switch (score?.toLowerCase()) {
      case 'high':
        return 'Excellent living conditions with great environmental quality and infrastructure.'
      case 'medium':
      case 'moderate':
        return 'Good living conditions with some areas for improvement.'
      case 'low':
        return 'Challenging living conditions that may require significant improvements.'
      default:
        return 'Livability assessment not available.'
    }
  }

  const getHabitableYearsColor = (years) => {
    if (years >= 70) return 'text-green-600'
    if (years >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 text-emerald-900 rounded-2xl mb-6">
            {/* <Home className="h-20 w-20" /> */}
            <img src="/src/assets/icon_4.png" alt="livability" className="h-30 w-30" />

          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
            Livability <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Score</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive assessment of how livable and sustainable different areas are 
            for residents and businesses. Get detailed insights based on environmental factors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Location and Parameters Input */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-red-600 mr-3" />
              <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Location & Parameters</span>
            </h2>
            
            <form onSubmit={handleManualSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 mb-2">
                    Latitude
                  </label>
                  <input
                    type="number"
                    id="latitude"
                    step="any"
                    value={manualLat}
                    onChange={(e) => setManualLat(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g. 23.8103"
                  />
                </div>
                <div>
                  <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 mb-2">
                    Longitude
                  </label>
                  <input
                    type="number"
                    id="longitude"
                    step="any"
                    value={manualLng}
                    onChange={(e) => setManualLng(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g. 90.4125"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-100 text-green-700 py-2 px-4 rounded-lg font-medium hover:bg-green-200 transition-colors duration-200"
              >
                Update Location
              </button>
            </form>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="solar" className="block text-sm font-medium text-gray-700 mb-2">
                  <Sun className="h-4 w-4 inline mr-1" />
                  Solar Radiation Score (0-5)
                </label>
                <input
                  type="number"
                  id="solar"
                  step="0.1"
                  min="0"
                  max="5"
                  value={solar}
                  onChange={(e) => setSolar(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g. 4.5"
                />
                <p className="text-xs text-gray-500 mt-1">Higher values indicate better solar potential</p>
              </div>

              <div>
                <label htmlFor="aqi" className="block text-sm font-medium text-gray-700 mb-2">
                  <Wind className="h-4 w-4 inline mr-1" />
                  Air Quality Index (0-500)
                </label>
                <input
                  type="number"
                  id="aqi"
                  step="1"
                  min="0"
                  max="500"
                  value={aqi}
                  onChange={(e) => setAqi(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g. 80"
                />
                <p className="text-xs text-gray-500 mt-1">Lower values indicate better air quality</p>
              </div>

              <button
                onClick={calculateLivabilityScore}
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <Loader className="h-5 w-5 animate-spin mr-2" />
                ) : (
                  <Calculator className="h-5 w-5 mr-2" />
                )}
                Calculate Livability Score
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">How to use:</p>
                  <p>1. Enter coordinates manually or click on the map</p>
                  <p>2. Set solar radiation score (0-5) and AQI (0-500)</p>
                  <p>3. Click "Calculate Livability Score" for insights</p>
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
              style={{ height: '400px', width: '100%', borderRadius: '0.75rem' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[location.lat, location.lng]}>
                <Popup>
                  Selected Location<br />
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
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <Loader className="h-12 w-12 animate-spin text-green-600 mx-auto mb-4" />
            <p className="text-gray-600">Calculating livability score...</p>
          </div>
        )}

        {/* Results Section */}
        {data && !loading && (
          <div className="space-y-8">
            {/* Main Livability Score Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Livability Assessment Results</span>
                </h2>
                <p className="text-gray-600">
                  Location: {data.location_latitude}°, {data.location_longitude}°
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Overall Score */}
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${getScoreColor(data.calculated_livability_score).bg} ${getScoreColor(data.calculated_livability_score).border} border-4 mb-4`}>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${getScoreColor(data.calculated_livability_score).text}`}>
                        {data.calculated_livability_score}
                      </div>
                      <div className="text-xs text-gray-600">Score</div>
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${getScoreColor(data.calculated_livability_score).text}`}>
                    {data.calculated_livability_score} Livability
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {getScoreDescription(data.calculated_livability_score)}
                  </p>
                </div>

                {/* Habitable Years */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 border-4 border-blue-200 rounded-full mb-4">
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${getHabitableYearsColor(data.estimated_habitable_years)}`}>
                        {data.estimated_habitable_years}
                      </div>
                      <div className="text-xs text-gray-600">Years</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Estimated Habitable Years</span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Projected years of sustainable living based on current environmental conditions
                  </p>
                </div>
              </div>
            </div>

            {/* Input Parameters Summary */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 text-black mr-3" />
                <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Environmental Parameters</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-yellow-50 rounded-xl p-6 text-center">
                  <Sun className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Solar Radiation</h4>
                  <p className="text-3xl font-bold text-yellow-600 mb-1">
                    {data.solar_radiation_score}/5
                  </p>
                  <p className="text-sm text-gray-600">
                    {data.solar_radiation_score >= 4 ? 'Excellent' : 
                     data.solar_radiation_score >= 3 ? 'Good' : 
                     data.solar_radiation_score >= 2 ? 'Fair' : 'Poor'} solar potential
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <Wind className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Air Quality Index</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-1">
                    {data.air_quality_index}
                  </p>
                  <p className="text-sm text-gray-600">
                    {data.air_quality_index <= 50 ? 'Good' : 
                     data.air_quality_index <= 100 ? 'Moderate' : 
                     data.air_quality_index <= 150 ? 'Unhealthy for Sensitive' : 
                     data.air_quality_index <= 200 ? 'Unhealthy' : 'Very Unhealthy'} air quality
                  </p>
                </div>
              </div>
            </div>

            {/* AI Analysis */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">AI-Powered Analysis & Recommendations</span>
              </h3>
              
              <div className="bg-gradient-to-r from-green-50 to-lime-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Expert Analysis</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {data.gemini_analysis}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Livability Factors Breakdown */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Livability Factors Impact</span></h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                    <Sun className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Solar Energy Potential</h4>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className="bg-green-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(data.solar_radiation_score / 5) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    {((data.solar_radiation_score / 5) * 100).toFixed(0)}% of maximum potential
                  </p>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <Wind className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Air Quality Impact</h4>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        data.air_quality_index <= 50 ? 'bg-green-500' :
                        data.air_quality_index <= 100 ? 'bg-yellow-500' :
                        data.air_quality_index <= 150 ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min((data.air_quality_index / 200) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    AQI level: {data.air_quality_index <= 50 ? 'Excellent' : 
                               data.air_quality_index <= 100 ? 'Good' : 
                               data.air_quality_index <= 150 ? 'Moderate' : 'Poor'}
                  </p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Overall Sustainability</h4>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        data.calculated_livability_score?.toLowerCase() === 'high' ? 'bg-green-500' :
                        data.calculated_livability_score?.toLowerCase() === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ 
                        width: `${
                          data.calculated_livability_score?.toLowerCase() === 'high' ? 85 :
                          data.calculated_livability_score?.toLowerCase() === 'medium' ? 60 : 35
                        }%` 
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    {data.calculated_livability_score} sustainability rating
                  </p>
                </div>
              </div>
            </div>

            {/* Data Source Information */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Data Source</span></h4>
                  <p className="text-sm text-gray-600">{data.data_source}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Analysis completed</p>
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

export default LivabilityScore