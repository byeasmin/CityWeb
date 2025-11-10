// import { useState, useEffect } from 'react'
// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
// import { MapPin, TrendingDown, Zap, Sun, Calculator, Info, Loader } from 'lucide-react'
// import axios from 'axios'

// const LocationPicker = ({ onLocationSelect }) => {
//   useMapEvents({
//     click(e) {
//       onLocationSelect(e.latlng.lat, e.latlng.lng)
//     },
//   })
//   return null
// }

// const CO2Emissions = () => {
//   const [location, setLocation] = useState({ lat: 21.616579, lng: 92.043457 })
//   const [manualLat, setManualLat] = useState('21.616579')
//   const [manualLng, setManualLng] = useState('92.043457')
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const fetchCO2Data = async (lat, lng) => {
//     setLoading(true)
//     setError(null)
    
//     try {
//       const response = await axios.get(
//         `https://ecosmartcity-api-7.onrender.com/calculate_carbon_avoidance?lat=${lat}&lon=${lng}`
//       )
//       setData(response.data)
//     } catch (err) {
//       setError('Failed to fetch CO₂ data. Please try again.')
//       console.error('Error fetching CO2 data:', err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchCO2Data(location.lat, location.lng)
//   }, [])

//   const handleLocationSelect = (lat, lng) => {
//     setLocation({ lat, lng })
//     setManualLat(lat.toFixed(6))
//     setManualLng(lng.toFixed(6))
//     fetchCO2Data(lat, lng)
//   }

//   const handleManualSubmit = (e) => {
//     e.preventDefault()
//     const lat = parseFloat(manualLat)
//     const lng = parseFloat(manualLng)
    
//     if (isNaN(lat) || isNaN(lng)) {
//       setError('Please enter valid latitude and longitude values')
//       return
//     }
    
//     if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
//       setError('Please enter valid coordinate ranges (Lat: -90 to 90, Lng: -180 to 180)')
//       return
//     }
    
//     setLocation({ lat, lng })
//     fetchCO2Data(lat, lng)
//   }

//   // Prepare data for charts
//   const chartData = data ? [
//     {
//       name: 'Solar Insolation',
//       value: data.potential_carbon_avoidance.solar_insolation_kwh_per_m2_per_day,
//       unit: 'kWh/m²/day'
//     },
//     {
//       name: 'Energy Potential',
//       value: data.potential_carbon_avoidance.potential_energy_kwh_per_day,
//       unit: 'kWh/day'
//     },
//     {
//       name: 'CO₂ Avoided',
//       value: data.potential_carbon_avoidance.co2_avoided_grams_per_day / 1000,
//       unit: 'kg/day'
//     }
//   ] : []

//   const pieData = data ? [
//     { name: 'CO₂ Avoided', value: data.potential_carbon_avoidance.co2_avoided_grams_per_day, color: '#22c55e' },
//     { name: 'Remaining Emissions', value: 2000 - data.potential_carbon_avoidance.co2_avoided_grams_per_day, color: '#ef4444' }
//   ] : []

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-300 via-emerald-100 to-lime-200 py-20"> 
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-green-400 text-black rounded-full mb-6"> */}
//           <div className="inline-flex items-center justify-center w-20 h-20 text-black rounded-full mb-6">

//             <Sun className="h-20 w-20" />
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             CO₂ Emissions & <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Solar Radiation</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Monitor carbon emissions and analyze solar potential for sustainable energy planning. 
//             Select a location to get detailed environmental insights.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           {/* Location Input */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//               <MapPin className="h-6 w-6 text-black mr-3" />
//               <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Location Selection</span>
//             </h2>
            
//             <form onSubmit={handleManualSubmit} className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 mb-2">
//                     Latitude
//                   </label>
//                   <input
//                     type="number"
//                     id="latitude"
//                     step="any"
//                     value={manualLat}
//                     onChange={(e) => setManualLat(e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     placeholder="e.g. 20.0"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 mb-2">
//                     Longitude
//                   </label>
//                   <input
//                     type="number"
//                     id="longitude"
//                     step="any"
//                     value={manualLng}
//                     onChange={(e) => setManualLng(e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     placeholder="e.g. 30.0"
//                   />
//                 </div>
//               </div>
              
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
//               >
//                 {loading ? (
//                   <Loader className="h-5 w-5 animate-spin mr-2" />
//                 ) : (
//                   <Calculator className="h-5 w-5 mr-2" />
//                 )}
//                 Calculate CO₂ Impact
//               </button>
//             </form>

//             <div className="mt-6 p-4 bg-blue-50 rounded-lg">
//               <div className="flex items-start space-x-3">
//                 <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
//                 <div className="text-sm text-blue-800">
//                   <p className="font-medium mb-1">How to use:</p>
//                   <p>1. Enter latitude and longitude manually, or</p>
//                   <p>2. Click on the map below to select a location</p>
//                   <p>3. View detailed environmental data and insights</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Map */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Interactive Map</span></h2>
//             <p className="text-gray-600 mb-4">Click anywhere on the map to select a location</p>
            
//             <MapContainer
//               center={[location.lat, location.lng]}
//               zoom={6}
//               style={{ height: '300px', width: '100%', borderRadius: '0.75rem' }}
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               />
//               <Marker position={[location.lat, location.lng]}>
//                 <Popup>
//                   Selected Location<br />
//                   Lat: {location.lat.toFixed(6)}<br />
//                   Lng: {location.lng.toFixed(6)}
//                 </Popup>
//               </Marker>
//               <LocationPicker onLocationSelect={handleLocationSelect} />
//             </MapContainer>
//           </div>
//         </div>

//         {/* Error Message */}
//         {error && (
//           <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
//             <div className="flex items-center space-x-3">
//               <div className="w-5 h-5 bg-red-500 rounded-full flex-shrink-0" />
//               <p className="text-red-800">{error}</p>
//             </div>
//           </div>
//         )}

//         {/* Loading State */}
//         {loading && (
//           <div className="text-center py-12">
//             <Loader className="h-12 w-12 animate-spin text-green-600 mx-auto mb-4" />
//             <p className="text-gray-600">Calculating environmental data...</p>
//           </div>
//         )}

//         {/* Data Visualization */}
//         {data && !loading && (
//           <div className="space-y-8">
//             {/* Key Metrics */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-xl mb-4">
//                   <Sun className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Solar Insolation</h3>
//                 <p className="text-3xl font-bold text-yellow-600 mb-1">
//                   {data.potential_carbon_avoidance.solar_insolation_kwh_per_m2_per_day.toFixed(2)}
//                 </p>
//                 <p className="text-sm text-gray-600">kWh/m²/day</p>
//               </div>

//               <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-4">
//                   <Zap className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Energy Potential</h3>
//                 <p className="text-3xl font-bold text-blue-600 mb-1">
//                   {data.potential_carbon_avoidance.potential_energy_kwh_per_day.toFixed(3)}
//                 </p>
//                 <p className="text-sm text-gray-600">kWh/day</p>
//               </div>

//               <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-xl mb-4">
//                   <TrendingDown className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">CO₂ Avoided</h3>
//                 <p className="text-3xl font-bold text-green-600 mb-1">
//                   {(data.potential_carbon_avoidance.co2_avoided_grams_per_day / 1000).toFixed(3)}
//                 </p>
//                 <p className="text-sm text-gray-600">kg/day</p>
//               </div>
//             </div>

//             {/* Charts */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <div className="bg-white rounded-2xl p-8 shadow-lg">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Environmental Metrics</span></h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={chartData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip formatter={(value, name) => [value.toFixed(3), name]} />
//                     <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="bg-white rounded-2xl p-8 shadow-lg">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">CO₂ Impact Visualization</span></h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <PieChart>
//                     <Pie
//                       data={pieData}
//                       cx="50%"
//                       cy="50%"
//                       innerRadius={60}
//                       outerRadius={120}
//                       dataKey="value"
//                     >
//                       {pieData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                     <Tooltip formatter={(value) => [`${value.toFixed(1)} g`, '']} />
//                   </PieChart>
//                 </ResponsiveContainer>
//                 <div className="flex justify-center space-x-6 mt-4">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-3 h-3 bg-green-600 rounded-full" />
//                     <span className="text-sm text-gray-600">CO₂ Avoided</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <div className="w-3 h-3 bg-red-600 rounded-full" />
//                     <span className="text-sm text-gray-600">Remaining Emissions</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Technical Details */}
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Technical Details</span></h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <h4 className="text-lg font-semibold text-red-700 mb-4">Location Information</h4>
//                   <div className="space-y-3">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Request Latitude:</span>
//                       <span className="font-medium">{data.request_latitude}°</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Request Longitude:</span>
//                       <span className="font-medium">{data.request_longitude}°</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Adjusted Latitude:</span>
//                       <span className="font-medium">{data.adjusted_latitude}°</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Adjusted Longitude:</span>
//                       <span className="font-medium">{data.adjusted_longitude}°</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div>
//                   <h4 className="text-lg font-semibold text-red-700 mb-4">Calculation Parameters</h4>
//                   <div className="space-y-3">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Panel Efficiency:</span>
//                       <span className="font-medium">{(data.calculation_inputs.panel_efficiency_used * 100).toFixed(1)}%</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Grid Carbon Intensity:</span>
//                       <span className="font-medium">{data.calculation_inputs.grid_carbon_intensity_gCO2_per_kWh} gCO₂/kWh</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default CO2Emissions


import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Sun, MapPin, TrendingDown, Zap, Calculator, Info, Loader } from 'lucide-react'
import axios from 'axios'

const LocationPicker = ({ onLocationSelect }) => {
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng.lat, e.latlng.lng)
    },
  })
  return null
}

const CO2Emissions = () => {
  const [location, setLocation] = useState({ lat: 21.616579, lng: 92.043457 })
  const [manualLat, setManualLat] = useState('21.616579')
  const [manualLng, setManualLng] = useState('92.043457')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchCO2Data = async (lat, lng) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await axios.get(
        `https://ecosmartcity-api-7.onrender.com/calculate_carbon_avoidance?lat=${lat}&lon=${lng}`
      )
      setData(response.data)
    } catch (err) {
      setError('Failed to fetch CO₂ data. Please try again.')
      console.error('Error fetching CO2 data:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCO2Data(location.lat, location.lng)
  }, [])

  const handleLocationSelect = (lat, lng) => {
    setLocation({ lat, lng })
    setManualLat(lat.toFixed(6))
    setManualLng(lng.toFixed(6))
    fetchCO2Data(lat, lng)
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
    fetchCO2Data(lat, lng)
  }

  // Prepare data for charts
  const chartData = data ? [
    {
      name: 'Solar Insolation',
      value: data.potential_carbon_avoidance.solar_insolation_kwh_per_m2_per_day,
      unit: 'kWh/m²/day'
    },
    {
      name: 'Energy Potential',
      value: data.potential_carbon_avoidance.potential_energy_kwh_per_day,
      unit: 'kWh/day'
    },
    {
      name: 'CO₂ Avoided',
      value: data.potential_carbon_avoidance.co2_avoided_grams_per_day / 1000,
      unit: 'kg/day'
    }
  ] : []

  const pieData = data ? [
    { name: 'CO₂ Avoided', value: data.potential_carbon_avoidance.co2_avoided_grams_per_day, color: '#22c55e' },
    { name: 'Remaining Emissions', value: 2000 - data.potential_carbon_avoidance.co2_avoided_grams_per_day, color: '#ef4444' }
  ] : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 text-emerald-900 rounded-full mb-6">
            <Sun className="h-20 w-20" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
            CO₂ Emissions & 
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent"> Solar Radiation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor carbon emissions and analyze solar potential for sustainable energy planning. 
            Select a location to get detailed environmental insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Location Input */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-black mr-3" />
              <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Location Selection</span>
            </h2>
            
            <form onSubmit={handleManualSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
                  <input
                    type="number"
                    id="latitude"
                    step="any"
                    value={manualLat}
                    onChange={(e) => setManualLat(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g. 20.0"
                  />
                </div>
                <div>
                  <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
                  <input
                    type="number"
                    id="longitude"
                    step="any"
                    value={manualLng}
                    onChange={(e) => setManualLng(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g. 30.0"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <Loader className="h-5 w-5 animate-spin mr-2" />
                ) : (
                  <Calculator className="h-5 w-5 mr-2" />
                )}
                Calculate CO₂ Impact
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">How to use:</p>
                  <p>1. Enter latitude and longitude manually, or</p>
                  <p>2. Click on the map below to select a location</p>
                  <p>3. View detailed environmental data and insights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Interactive Map</span>
            </h2>
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
              <div className="w-5 h-5 bg-red-500 rounded-full flex-shrink-0" />
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <Loader className="h-12 w-12 animate-spin text-green-600 mx-auto mb-4" />
            <p className="text-gray-600">Calculating environmental data...</p>
          </div>
        )}

        {/* Data Visualization */}
        {data && !loading && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-xl mb-4">
                  <Sun className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Solar Insolation</h3>
                <p className="text-3xl font-bold text-yellow-600 mb-1">
                  {data.potential_carbon_avoidance.solar_insolation_kwh_per_m2_per_day.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">kWh/m²/day</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Energy Potential</h3>
                <p className="text-3xl font-bold text-blue-600 mb-1">
                  {data.potential_carbon_avoidance.potential_energy_kwh_per_day.toFixed(3)}
                </p>
                <p className="text-sm text-gray-600">kWh/day</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-xl mb-4">
                  <TrendingDown className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CO₂ Avoided</h3>
                <p className="text-3xl font-bold text-green-600 mb-1">
                  {(data.potential_carbon_avoidance.co2_avoided_grams_per_day / 1000).toFixed(3)}
                </p>
                <p className="text-sm text-gray-600">kg/day</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Environmental Metrics</span>
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [value.toFixed(3), name]} />
                    <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">CO₂ Impact Visualization</span>
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value.toFixed(1)} g`, '']} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-600 rounded-full" />
                    <span className="text-sm text-gray-600">CO₂ Avoided</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full" />
                    <span className="text-sm text-gray-600">Remaining Emissions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* START: Updated Technical Details Section */}
            {/* This block is styled to match your screenshot */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-center mb-8 text-green-400">
                <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Technical Details</span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Card 1: Location Specifics */}
                <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-6"><span className="bg-gradient-to-r from-red-700 via-yellow-600 to-orange-500 bg-clip-text text-transparent">Location Specifics</span></h4>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex justify-between">
                      <span>Requested Latitude:</span>
                      <span className="font-medium text-green-400">{data.request_latitude}°</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Requested Longitude:</span>
                      <span className="font-medium text-green-400">{data.request_longitude}°</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Adjusted Latitude:</span>
                      <span className="font-medium text-green-400">{data.adjusted_latitude.toFixed(3)}°</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Adjusted Longitude:</span>
                      <span className="font-medium text-green-400">{data.adjusted_longitude.toFixed(3)}°</span>
                    </div>
                  </div>
                </div>
                
                {/* Card 2: Model Inputs */}
                <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-6"><span className="bg-gradient-to-r from-red-700 via-yellow-600 to-orange-500 bg-clip-text text-transparent">Model Inputs</span></h4>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex justify-between">
                      <span>Panel Efficiency Used:</span>
                      <span className="font-medium text-green-400">{(data.calculation_inputs.panel_efficiency_used * 100).toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Grid Carbon Intensity:</span>
                      <span className="font-medium text-green-400">{data.calculation_inputs.grid_carbon_intensity_gCO2_per_kWh} gCO₂/kWh</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* END: Updated Technical Details Section */}

          </div>
        )}
      </div>
    </div>
  )
}

export default CO2Emissions