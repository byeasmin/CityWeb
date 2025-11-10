// import { useState, useEffect } from 'react'
// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
// import { Brain, MapPin, Calendar, Search, Upload, Zap, TrendingUp, AlertCircle, CheckCircle, Loader, FileImage } from 'lucide-react'
// import axios from 'axios'

// const LocationPicker = ({ onLocationSelect }) => {
//   useMapEvents({
//     click(e) {
//       onLocationSelect(e.latlng.lat, e.latlng.lng)
//     },
//   })
//   return null
// }

// const AIIntelligence = () => { 
//   const [location, setLocation] = useState({ lat: 23.7, lng: 90.4 })
//   const [manualLat, setManualLat] = useState('23.7')
//   const [manualLng, setManualLng] = useState('90.4')
//   const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0])
//   const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0])
//   const [queryType, setQueryType] = useState('air_quality')
//   const [askAnything, setAskAnything] = useState('')
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const queryTypes = [
//     { key: 'air_quality', label: 'Air Quality Analysis' },
//     { key: 'flood_warnings', label: 'Flood Warnings' },
//     { key: 'solar_energy_rooftop', label: 'Solar Energy Potential' },
//     { key: 'good_jogging_day', label: 'Outdoor Activity Conditions' },
//     { key: 'drought_risk', label: 'Drought Risk Assessment' },
//     { key: 'heat_wave_alert', label: 'Heat Wave Alerts' },
//     { key: 'crop_conditions', label: 'Agricultural Conditions' },
//     { key: 'wildfire_risk', label: 'Wildfire Risk' }
//   ]

//   const handleLocationSelect = (lat, lng) => {
//     setLocation({ lat, lng })
//     setManualLat(lat.toFixed(6))
//     setManualLng(lng.toFixed(6))
//   }

//   const handleManualCoordinates = (e) => {
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
//   }

//   const handleFileChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       if (file.size > 10 * 1024 * 1024) { // 10MB limit
//         setError('File size must be less than 10MB')
//         return
//       }
//       if (!file.type.startsWith('image/')) {
//         setError('Please select a valid image file')
//         return
//       }
//       setSelectedFile(file)
//       setError(null)
//     }
//   }

//   const analyzeEnvironment = async (withImage = false) => {
//     setLoading(true)
//     setError(null)
    
//     try {
//       const requestData = {
//         lat: location.lat,
//         lon: location.lng,
//         start: startDate,
//         end: endDate,
//         query_key: queryType,
//         mode: askAnything || 'summary'
//       }

//       let response
      
//       if (withImage && selectedFile) {
//         // POST request with image
//         const formData = new FormData()
//         Object.keys(requestData).forEach(key => {
//           formData.append(key, requestData[key])
//         })
//         formData.append('file', selectedFile)
        
//         response = await axios.post(
//           'https://prediction-4-tcby.onrender.com/environmental_intelligence',
//           formData,
//           {
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             },
//             timeout: 30000
//           }
//         )
//       } else if (withImage && !selectedFile) {
//         // POST request without image
//         const formData = new FormData()
//         Object.keys(requestData).forEach(key => {
//           formData.append(key, requestData[key])
//         })
        
//         response = await axios.post(
//           'https://prediction-4-tcby.onrender.com/environmental_intelligence',
//           formData,
//           { timeout: 30000 }
//         )
//       } else {
//         // GET request
//         response = await axios.get('https://prediction-4-tcby.onrender.com/environmental_intelligence/', {
//           params: requestData,
//           timeout: 30000
//         })
//       }
      
//       setData(response.data)
//     } catch (err) {
//       console.error('Error fetching AI analysis:', err)
//       if (err.code === 'ECONNABORTED') {
//         setError('Request timeout. The AI analysis is taking longer than expected. Please try again.')
//       } else if (err.response?.status === 404) {
//         setError('API endpoint not found. Please check the service availability.')
//       } else if (err.response?.status >= 500) {
//         setError('Server error. Please try again later.')
//       } else {
//         setError('Failed to fetch AI environmental analysis. Please try again.')
//       }
//     } finally {
//       setLoading(false)
//     }
//   }

//   const formatNasaData = (nasaData) => {
//     if (!nasaData) return []
    
//     const metrics = []
//     if (nasaData.T2M) {
//       const temps = Object.values(nasaData.T2M)
//       const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length
//       metrics.push({ label: 'Average Temperature', value: `${avgTemp.toFixed(1)}°C`, icon: '🌡️' })
//     }
    
//     if (nasaData.WS2M) {
//       const winds = Object.values(nasaData.WS2M)
//       const avgWind = winds.reduce((a, b) => a + b, 0) / winds.length
//       metrics.push({ label: 'Average Wind Speed', value: `${avgWind.toFixed(1)} m/s`, icon: '💨' })
//     }
    
//     if (nasaData.RH2M) {
//       const humidity = Object.values(nasaData.RH2M)
//       const avgHumidity = humidity.reduce((a, b) => a + b, 0) / humidity.length
//       metrics.push({ label: 'Average Humidity', value: `${avgHumidity.toFixed(1)}%`, icon: '💧' })
//     }
    
//     return metrics
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 text-purple-600 rounded-2xl mb-6">
//             <Brain className="h-10 w-10" />
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Predict <span className="text-purple-600">Eco Insights</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             AI-powered environmental intelligence using NASA climate data. 
//             Get predictive insights and actionable recommendations for any location.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           {/* Location Selection */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//               <MapPin className="h-6 w-6 text-purple-600 mr-3" />
//               Location Selection
//             </h2>
            
//             <form onSubmit={handleManualCoordinates} className="space-y-4 mb-6">
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
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                     placeholder="e.g. 23.7"
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
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                     placeholder="e.g. 90.4"
//                   />
//                 </div>
//               </div>
              
//               <button
//                 type="submit"
//                 className="w-full bg-purple-100 text-purple-700 py-2 px-4 rounded-lg font-medium hover:bg-purple-200 transition-colors duration-200"
//               >
//                 Update Location
//               </button>
//             </form>

//             <div className="text-center text-sm text-gray-600 mb-4">
//               Selected: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
//             </div>
//           </div>

//           {/* Interactive Map */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Map</h2>
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

//         {/* Analysis Form */}
//         <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//             <Search className="h-6 w-6 text-purple-600 mr-3" />
//             Analysis Configuration
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             <div>
//               <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
//                 <Calendar className="h-4 w-4 inline mr-1" />
//                 Start Date
//               </label>
//               <input
//                 type="date"
//                 id="startDate"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
//                 <Calendar className="h-4 w-4 inline mr-1" />
//                 End Date
//               </label>
//               <input
//                 type="date"
//                 id="endDate"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="queryType" className="block text-sm font-medium text-gray-700 mb-2">
//                 Query Type
//               </label>
//               <select
//                 id="queryType"
//                 value={queryType}
//                 onChange={(e) => setQueryType(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               >
//                 {queryTypes.map(type => (
//                   <option key={type.key} value={type.key}>{type.label}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Ask Anything Field */}
//           <div className="mb-6">
//             <label htmlFor="askAnything" className="block text-sm font-medium text-gray-700 mb-2">
//               <Brain className="h-4 w-4 inline mr-1" />
//               Ask Anything
//             </label>
//             <textarea
//               id="askAnything"
//               value={askAnything}
//               onChange={(e) => setAskAnything(e.target.value)}
//               rows={3}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
//               placeholder="Ask any specific question about the environmental conditions, or leave empty for a general summary..."
//             />
//             <p className="text-xs text-gray-500 mt-1">
//               Example: "Is it a good day for outdoor activities?" or "What are the air quality risks for children?"
//             </p>
//           </div>

//           {/* Image Upload */}
//           <div className="mb-6">
//             <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700 mb-2">
//               <Upload className="h-4 w-4 inline mr-1" />
//               Image Upload (Optional)
//             </label>
//             <div className="flex items-center space-x-4">
//               <input
//                 type="file"
//                 id="imageUpload"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="hidden"
//               />
//               <label
//                 htmlFor="imageUpload"
//                 className="flex items-center px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200"
//               >
//                 <FileImage className="h-5 w-5 text-gray-400 mr-2" />
//                 {selectedFile ? selectedFile.name : 'Choose image file'}
//               </label>
//               {selectedFile && (
//                 <button
//                   onClick={() => setSelectedFile(null)}
//                   className="text-red-600 hover:text-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               )}
//             </div>
//             <p className="text-xs text-gray-500 mt-1">
//               Supported formats: JPG, PNG, GIF. Max size: 10MB
//             </p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button
//               onClick={() => analyzeEnvironment(false)}
//               disabled={loading}
//               className="flex-1 bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
//             >
//               {loading ? (
//                 <Loader className="h-5 w-5 animate-spin mr-2" />
//               ) : (
//                 <Zap className="h-5 w-5 mr-2" />
//               )}
//               Analyze Environment
//             </button>
            
//             <button
//               onClick={() => analyzeEnvironment(true)}
//               disabled={loading}
//               className="flex-1 bg-purple-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
//             >
//               {loading ? (
//                 <Loader className="h-5 w-5 animate-spin mr-2" />
//               ) : (
//                 <Upload className="h-5 w-5 mr-2" />
//               )}
//               Analyze with Image
//             </button>
//           </div>
//         </div>

//         {/* Error Message */}
//         {error && (
//           <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
//             <div className="flex items-center space-x-3">
//               <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
//               <p className="text-red-800">{error}</p>
//             </div>
//           </div>
//         )}

//         {/* Loading State */}
//         {loading && (
//           <div className="text-center py-12">
//             <Loader className="h-12 w-12 animate-spin text-purple-600 mx-auto mb-4" />
//             <p className="text-gray-600">Analyzing environmental data with AI...</p>
//             <p className="text-sm text-gray-500 mt-2">This may take up to 30 seconds</p>
//           </div>
//         )}

//         {/* Results Section */}
//         {data && !loading && (
//           <div className="space-y-8">
//             {/* Key Information */}
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//                 <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
//                 Analysis Results
//               </h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                 <div className="text-center p-4 bg-purple-50 rounded-xl">
//                   <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
//                   <h4 className="font-semibold text-gray-900">Location</h4>
//                   <p className="text-sm text-gray-600">
//                     {data.request_latitude}°, {data.request_longitude}°
//                   </p>
//                 </div>
                
//                 <div className="text-center p-4 bg-blue-50 rounded-xl">
//                   <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
//                   <h4 className="font-semibold text-gray-900">Date Range</h4>
//                   <p className="text-sm text-gray-600">
//                     {startDate} to {endDate}
//                   </p>
//                 </div>
                
//                 <div className="text-center p-4 bg-green-50 rounded-xl">
//                   <Brain className="h-8 w-8 text-green-600 mx-auto mb-2" />
//                   <h4 className="font-semibold text-gray-900">Query Type</h4>
//                   <p className="text-sm text-gray-600">
//                     {queryTypes.find(q => q.key === queryType)?.label}
//                   </p>
//                 </div>
//               </div>

//               {/* NASA Data Metrics */}
//               {data.nasa_data_used && (
//                 <div className="mb-8">
//                   <h4 className="text-lg font-semibold text-gray-900 mb-4">Environmental Metrics</h4>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {formatNasaData(data.nasa_data_used).map((metric, index) => (
//                       <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
//                         <div className="text-2xl mb-2">{metric.icon}</div>
//                         <h5 className="font-medium text-gray-900">{metric.label}</h5>
//                         <p className="text-lg font-bold text-purple-600">{metric.value}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* AI Analysis */}
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//                 <Brain className="h-6 w-6 text-purple-600 mr-3" />
//                 AI Environmental Analysis
//               </h3>
              
//               <div className="prose max-w-none">
//                 <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
//                   <h4 className="text-lg font-semibold text-gray-900 mb-3">Predicted Analysis</h4>
//                   <div 
//                     className="text-gray-700 leading-relaxed"
//                     dangerouslySetInnerHTML={{
//                       __html: data.predict_environmental_analysis
//                         .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
//                         .replace(/\*(.*?)\*/g, '<em>$1</em>')
//                         .replace(/\n\n/g, '</p><p>')
//                         .replace(/\n/g, '<br>')
//                         .replace(/^/, '<p>')
//                         .replace(/$/, '</p>')
//                         .replace(/<p><\/p>/g, '')
//                     }}
//                   />
//                 </div>
                
//                 {data.suggested_interventions && (
//                   <div className="bg-green-50 rounded-xl p-6">
//                     <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
//                       <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
//                       Suggested Interventions
//                     </h4>
//                     <div 
//                       className="text-gray-700"
//                       dangerouslySetInnerHTML={{
//                         __html: data.suggested_interventions
//                           .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
//                           .replace(/\*(.*?)\*/g, '<em>$1</em>')
//                           .replace(/\n\n/g, '</p><p>')
//                           .replace(/\n/g, '<br>')
//                           .replace(/^/, '<p>')
//                           .replace(/$/, '</p>')
//                           .replace(/<p><\/p>/g, '')
//                       }}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Technical Details */}
//             {data.nasa_data_used && (
//               <div className="bg-white rounded-2xl p-8 shadow-lg">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">NASA Climate Data</h3>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   {Object.entries(data.nasa_data_used).map(([key, values]) => (
//                     Object.keys(values).length > 0 && (
//                       <div key={key} className="bg-gray-50 rounded-xl p-6">
//                         <h4 className="text-lg font-semibold text-gray-900 mb-4">
//                           {key === 'T2M' ? 'Temperature (°C)' :
//                            key === 'PRECTOT' ? 'Precipitation (mm)' :
//                            key === 'WS2M' ? 'Wind Speed (m/s)' :
//                            key === 'RH2M' ? 'Relative Humidity (%)' : key}
//                         </h4>
//                         <div className="space-y-2 max-h-40 overflow-y-auto">
//                           {Object.entries(values).map(([date, value]) => (
//                             <div key={date} className="flex justify-between text-sm">
//                               <span className="text-gray-600">
//                                 {date.slice(0,4)}-{date.slice(4,6)}-{date.slice(6,8)}
//                               </span>
//                               <span className="font-medium">{value}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default AIIntelligence





import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { Brain, MapPin, Calendar, Search, Upload, Zap, TrendingUp, AlertCircle, CheckCircle, Loader, FileImage } from 'lucide-react'
import axios from 'axios'

const LocationPicker = ({ onLocationSelect }) => {
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng.lat, e.latlng.lng)
    },
  })
  return null
}

const AIIntelligence = () => {
  const [location, setLocation] = useState({ lat: 23.7, lng: 90.4 })
  const [manualLat, setManualLat] = useState('23.7')
  const [manualLng, setManualLng] = useState('90.4')
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0])
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0])
  const [queryType, setQueryType] = useState('air_quality')
  const [askAnything, setAskAnything] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const queryTypes = [
    { key: 'air_quality', label: 'Air Quality Analysis' },
    { key: 'flood_warnings', label: 'Flood Warnings' },
    { key: 'solar_energy_rooftop', label: 'Solar Energy Potential' },
    { key: 'good_jogging_day', label: 'Outdoor Activity Conditions' },
    { key: 'drought_risk', label: 'Drought Risk Assessment' },
    { key: 'heat_wave_alert', label: 'Heat Wave Alerts' },
    { key: 'crop_conditions', label: 'Agricultural Conditions' },
    { key: 'wildfire_risk', label: 'Wildfire Risk' }
  ]

  const handleLocationSelect = (lat, lng) => {
    setLocation({ lat, lng })
    setManualLat(lat.toFixed(6))
    setManualLng(lng.toFixed(6))
  }

  const handleManualCoordinates = (e) => {
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
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        setError('File size must be less than 10MB')
        return
      }
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file')
        return
      }
      setSelectedFile(file)
      setError(null)
    }
  }

  const analyzeEnvironment = async (withImage = false) => {
    setLoading(true)
    setError(null)
    
    try {
      const requestData = {
        lat: location.lat,
        lon: location.lng,
        start: startDate,
        end: endDate,
        query_key: queryType,
        mode: askAnything || 'summary'
      }

      let response
      
      if (withImage && selectedFile) {
        // POST request with image
        const formData = new FormData()
        Object.keys(requestData).forEach(key => {
          formData.append(key, requestData[key])
        })
        formData.append('file', selectedFile)
        
        response = await axios.post(
          'https://prediction-4-tcby.onrender.com/environmental_intelligence',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            timeout: 30000
          }
        )
      } else if (withImage && !selectedFile) {
        // POST request without image
        const formData = new FormData()
        Object.keys(requestData).forEach(key => {
          formData.append(key, requestData[key])
        })
        
        response = await axios.post(
          'https://prediction-4-tcby.onrender.com/environmental_intelligence',
          formData,
          { timeout: 30000 }
        )
      } else {
        // GET request
        response = await axios.get('https://prediction-4-tcby.onrender.com/environmental_intelligence/', {
          params: requestData,
          timeout: 30000
        })
      }
      
      setData(response.data)
    } catch (err) {
      console.error('Error fetching AI analysis:', err)
      if (err.code === 'ECONNABORTED') {
        setError('Request timeout. The AI analysis is taking longer than expected. Please try again.')
      } else if (err.response?.status === 404) {
        setError('API endpoint not found. Please check the service availability.')
      } else if (err.response?.status >= 500) {
        setError('Server error. Please try again later.')
      } else {
        setError('Failed to fetch AI environmental analysis. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const formatNasaData = (nasaData) => {
    if (!nasaData) return []
    
    const metrics = []
    if (nasaData.T2M) {
      const temps = Object.values(nasaData.T2M)
      const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length
      metrics.push({ label: 'Average Temperature', value: `${avgTemp.toFixed(1)}°C`, icon: '🌡️' })
    }
    
    if (nasaData.WS2M) {
      const winds = Object.values(nasaData.WS2M)
      const avgWind = winds.reduce((a, b) => a + b, 0) / winds.length
      metrics.push({ label: 'Average Wind Speed', value: `${avgWind.toFixed(1)} m/s`, icon: '💨' })
    }
    
    if (nasaData.RH2M) {
      const humidity = Object.values(nasaData.RH2M)
      const avgHumidity = humidity.reduce((a, b) => a + b, 0) / humidity.length
      metrics.push({ label: 'Average Humidity', value: `${avgHumidity.toFixed(1)}%`, icon: '💧' })
    }
    
    return metrics
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-green-400 text-black rounded-2xl mb-6"> */}
          <div className="inline-flex items-center justify-center w-20 h-20 text-emerald-900 rounded-2xl mb-6">
            {/* <Brain className="h-20 w-20" /> */}
            <img src="/src/assets/icon2.png" alt="Prediction" className="h-30 w-30" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
            Predict <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Eco Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered environmental intelligence using NASA climate data. 
            Get predictive insights and actionable recommendations for any location.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Location Selection */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-red-600 mr-3" />
              <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Location Selection</span>
            </h2>
            
            <form onSubmit={handleManualCoordinates} className="space-y-4 mb-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    placeholder="e.g. 23.7"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    placeholder="e.g. 90.4"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 py-2 px-4 rounded-lg font-medium hover:bg-gray-600 transition-colors duration-200"
              >
                <span className='text-white'>Update Location</span>
              </button>
            </form>

            <div className="text-center text-sm text-gray-600 mb-4">
              Selected: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
            </div>
          </div>

          {/* Interactive Map */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Interactive Map</span></h2>
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

        {/* Analysis Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Search className="h-6 w-6 text-black mr-3" />
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Analysis Configuration</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="queryType" className="block text-sm font-medium text-gray-700 mb-2">
                Query Type
              </label>
              <select
                id="queryType"
                value={queryType}
                onChange={(e) => setQueryType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              >
                {queryTypes.map(type => (
                  <option key={type.key} value={type.key}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Ask Anything Field */}
          <div className="mb-6">
            <label htmlFor="askAnything" className="block text-sm font-medium text-gray-700 mb-2">
              <Brain className="h-4 w-4 inline mr-1" />
              <span className="bg-gradient-to-r font-bold from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Ask Anything</span>
            </label>
            <textarea
              id="askAnything"
              value={askAnything}
              onChange={(e) => setAskAnything(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent resize-none"
              placeholder="Ask any specific question about the environmental conditions, or leave empty for a general summary..."
            />
            <p className="text-xs text-black mt-1">
              Example: "Predict the current air quality using NASA POWER and nearby pollution data" or "Predict potential solar energy generation for a rooftop today"
              or "Predict the chance of heavy rain in the next 48 hours based on precipitation data"
            </p>
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700 mb-2">
              <Upload className="h-4 w-4 inline mr-1" />
              <span className="bg-gradient-to-r font-bold from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Image Upload (Optional)</span>
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="imageUpload"
                className="flex items-center px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <FileImage className="h-5 w-5 text-gray-400 mr-2" />
                {selectedFile ? selectedFile.name : 'Choose image file'}
              </label>
              {selectedFile && (
                <button
                  onClick={() => setSelectedFile(null)}
                  className="text-red-600 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Supported formats: JPG, PNG, GIF. Max size: 10MB
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => analyzeEnvironment(false)}
              disabled={loading}
              className="flex-1 bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
            >
              {loading ? (
                <Loader className="h-5 w-5 animate-spin mr-2" />
              ) : (
                <Zap className="h-5 w-5 mr-2" />
              )}
              Analyze Environment
            </button>
            
            <button
              onClick={() => analyzeEnvironment(true)}
              disabled={loading}
              className="flex-1 bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
            >
              {loading ? (
                <Loader className="h-5 w-5 animate-spin mr-2" />
              ) : (
                <Upload className="h-5 w-5 mr-2" />
              )}
              Analyze with Image
            </button>
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
            <Loader className="h-12 w-12 animate-spin text-green-950 mx-auto mb-4" />
            <p className="text-gray-600">Analyzing environmental data with AI...</p>
            <p className="text-sm text-gray-500 mt-2">This may take up to 30 seconds</p>
          </div>
        )}

        {/* Results Section */}
        {data && !loading && (
          <div className="space-y-8">
            {/* Key Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-black mr-3" />
                <span className="bg-gradient-to-r font-bold from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Analysis Results</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <MapPin className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-sm text-gray-600">
                    {data.request_latitude}°, {data.request_longitude}°
                  </p>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Date Range</h4>
                  <p className="text-sm text-gray-600">
                    {startDate} to {endDate}
                  </p>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Brain className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Query Type</h4>
                  <p className="text-sm text-gray-600">
                    {queryTypes.find(q => q.key === queryType)?.label}
                  </p>
                </div>
              </div>

              {/* NASA Data Metrics */}
              {data.nasa_data_used && (
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4"><span className="bg-gradient-to-r font-bold from-green-700 via-emerald-600 to-lime-600 bg-clip-text text-transparent">Environmental Metrics</span></h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {formatNasaData(data.nasa_data_used).map((metric, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">{metric.icon}</div>
                        <h5 className="font-medium text-gray-900">{metric.label}</h5>
                        <p className="text-lg font-bold text-green-700">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* AI Analysis */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Brain className="h-6 w-6 text-pink-400 mr-3" />
                <span className="bg-gradient-to-r font-bold from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">AI Environmental Analysis</span>
              </h3>
              
              <div className="prose max-w-none">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-red-700 mb-3">Predicted Analysis</h4>
                  <div 
                    className="text-black leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: data.predict_environmental_analysis
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                        .replace(/\n\n/g, '</p><p>')
                        .replace(/\n/g, '<br>')
                        .replace(/^/, '<p>')
                        .replace(/$/, '</p>')
                        .replace(/<p><\/p>/g, '')
                    }}
                  />
                </div>
                
                {data.suggested_interventions && (
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                      Suggested Interventions
                    </h4>
                    <div 
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: data.suggested_interventions
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>')
                          .replace(/\n\n/g, '</p><p>')
                          .replace(/\n/g, '<br>')
                          .replace(/^/, '<p>')
                          .replace(/$/, '</p>')
                          .replace(/<p><\/p>/g, '')
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Technical Details */}
            {data.nasa_data_used && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6"><span className="bg-gradient-to-r font-bold from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">NASA Climate Data</span></h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {Object.entries(data.nasa_data_used).map(([key, values]) => (
                    Object.keys(values).length > 0 && (
                      <div key={key} className="bg-green-50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          {key === 'T2M' ? 'Temperature (°C)' :
                           key === 'PRECTOT' ? 'Precipitation (mm)' :
                           key === 'WS2M' ? 'Wind Speed (m/s)' :
                           key === 'RH2M' ? 'Relative Humidity (%)' : key}
                        </h4>
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {Object.entries(values).map(([date, value]) => (
                            <div key={date} className="flex justify-between text-sm">
                              <span className="text-gray-600">
                                {date.slice(0,4)}-{date.slice(4,6)}-{date.slice(6,8)}
                              </span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default AIIntelligence