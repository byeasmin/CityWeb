import { Heart, Activity, TrendingUp, Zap } from 'lucide-react'

const UrbanHealth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 text-emerald-900 rounded-2xl mb-6">
            <Heart className="h-20 w-20" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
            Urban <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Health</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect environmental data to public health trends and outcomes. 
            Understand the relationship between urban environment and community wellness.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-white rounded-2xl p-12 shadow-lg text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-600 rounded-full mb-6">
            <Zap className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our Urban Health analytics platform is being developed to provide comprehensive 
            insights into the relationship between environmental factors and public health outcomes 
            in urban areas.
          </p>
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-4">Health Analytics Features:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <Activity className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-900">Health Correlation</h4>
                  <p className="text-green-700 text-sm">Link environmental data to health outcomes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-900">Disease Tracking</h4>
                  <p className="text-green-700 text-sm">Monitor health patterns and disease spread</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-900">Wellness Recommendations</h4>
                  <p className="text-green-700 text-sm">Data-driven health improvement suggestions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Environmental Health Impact</h3>
            <p className="text-gray-600">Analyze how environmental factors affect public health</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Population Health Metrics</h3>
            <p className="text-gray-600">Track community health indicators and trends</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Preventive Insights</h3>
            <p className="text-gray-600">Identify health risks before they become problems</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UrbanHealth