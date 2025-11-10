import { Heart, Activity, TrendingUp, Zap } from 'lucide-react'
// import Relocation from '../assets/icon6.png' 

const Relocation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 text-emerald-900 rounded-2xl mb-6">
            <img src="/src/assets/icon6.png" alt="Relocation" className="h-30 w-30" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
            Suggested <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Relocation</span> Destinations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the most livable and sustainable locations for a better lifestyle. 
            Our AI-driven platform recommends areas with clean air, green spaces, and smart infrastructure for community well-being.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-white rounded-2xl p-12 shadow-lg text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-600 rounded-full mb-6">
            <Zap className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our Suggested Relocation module is being developed to provide comprehensive insights into livable, healthy, and sustainable communities. 
            Make data-driven decisions for relocation with environmental and urban planning data.
          </p>
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-4">Relocation Features:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <Activity className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-900">Clean Air Index</h4>
                  <p className="text-green-700 text-sm">Select locations with better air quality for healthy living</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-900">Green Spaces</h4>
                  <p className="text-green-700 text-sm">Find areas with parks and natural surroundings</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-900">Sustainable Infrastructure</h4>
                  <p className="text-green-700 text-sm">Neighborhoods with eco-friendly and smart city infrastructure</p>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Air Quality & Environment</h3>
            <p className="text-gray-600">Identify locations with clean air and minimal pollution for healthier living</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Livability</h3>
            <p className="text-gray-600">Evaluate areas based on livability scores, safety, and access to amenities</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Infrastructure</h3>
            <p className="text-gray-600">Select neighborhoods with smart, eco-friendly facilities for long-term well-being</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Relocation
