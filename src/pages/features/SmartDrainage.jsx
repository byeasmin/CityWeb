import { Droplets, CloudRain, AlertTriangle, Zap } from 'lucide-react'

const SmartDrainage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 text-emerald-900 rounded-2xl mb-6">
            {/* <Droplets className="h-20 w-20" /> */}
            <img src="/src/assets/icon_5.png" alt="Drainage" className="h-30 w-30" />

          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
            Smart <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Drainage</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Predict and visualize waterlogging risks with intelligent analysis of drainage systems, 
            weather patterns, and urban infrastructure for proactive flood management.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-white rounded-2xl p-12 shadow-lg text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-cyan-100 text-green-600 rounded-full mb-6">
            <Zap className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our Smart Drainage monitoring and prediction system is under development. 
            This advanced platform will help cities prevent flooding and manage 
            water infrastructure more effectively.
          </p>
          <div className="bg-cyan-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-4">Key Capabilities:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <CloudRain className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-900">Weather Integration</h4>
                  <p className="text-green-700 text-sm">Real-time rainfall and weather data analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Droplets className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-900">Flood Prediction</h4>
                  <p className="text-green-700 text-sm">Advanced modeling for waterlogging risks</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-900">Early Warning System</h4>
                  <p className="text-green-700 text-sm">Alerts for potential flooding events</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <Droplets className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Drainage Capacity Analysis</h3>
            <p className="text-gray-600">Monitor and optimize drainage system performance</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <CloudRain className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Rainfall Pattern Analysis</h3>
            <p className="text-gray-600">Historical and predictive rainfall modeling</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Assessment</h3>
            <p className="text-gray-600">Comprehensive flood risk evaluation and mapping</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartDrainage