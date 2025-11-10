// import { Link } from 'react-router-dom'
// import { ArrowRight, Leaf, Brain, Wind,  Droplets, Heart, CheckCircle, TrendingUp, Users, Globe } from 'lucide-react'

// const Home = () => {
//   const features = [
//     {
//       icon: <Leaf className="h-8 w-8" />,
//       title: "CO₂ Emissions & Solar Radiation",
//       description: "Monitor carbon emissions and solar potential for sustainable energy planning.",
//       link: "/features/co2-emissions"
//     },
//     {
//       icon: <Brain className="h-8 w-8" />,
//       title: "AI Environmental Intelligence",
//       description: "Analyze urban environment patterns using advanced AI algorithms.",
//       link: "/ai-intelligence"
//     },
//     {
//       icon: <Wind className="h-8 w-8" />,
//       title: "Air Quality Index",
//       description: "Monitor and visualize air quality metrics across different regions.",
//       link: "/features/air-quality"
//     },
//     {
//       icon: <Wind className="h-8 w-8" />,
//       title: "Livability Score",
//       description: "Measure how livable and sustainable different areas are for residents.",
//       link: "/features/livability-score"
//     },
//     {
//       icon: <Droplets className="h-8 w-8" />,
//       title: "Smart Drainage",
//       description: "Predict and visualize waterlogging risks with intelligent analysis.",
//       link: "/features/smart-drainage"
//     },
//     {
//       icon: <Heart className="h-8 w-8" />,
//       title: "Urban Health",
//       description: "Connect environmental data to public health trends and outcomes.",
//       link: "/features/urban-health"
//     }
//   ]

//   const stats = [
//     { icon: <Users className="h-8 w-8" />, label: "Cities Monitored", value: "50+" },
//     { icon: <Globe className="h-8 w-8" />, label: "Data Points", value: "10M+" },
//     { icon: <TrendingUp className="h-8 w-8" />, label: "CO₂ Reduced", value: "25%" },
//     { icon: <CheckCircle className="h-8 w-8" />, label: "Accuracy", value: "99.5%" }
//   ]

//   return (
//     <div className="overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
//         <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="animate-fade-in">
//               <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
//                 Smart <span className="text-primary-600">Environmental</span>
//                 <br />
//                 Intelligence
//               </h1>
//               <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
//                 Empowering cities with AI-driven insights for sustainable urban development. 
//                 Monitor, analyze, and optimize environmental conditions for a better tomorrow.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link
//                   to="/features"
//                   className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-xl hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//                 >
//                   Explore Features
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//                 <Link
//                   to="/about"
//                   className="inline-flex items-center px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl border-2 border-primary-600 hover:bg-primary-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//                 >
//                   Learn More
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Floating Elements */}
//         <div className="absolute top-1/4 left-10 animate-float">
//           <div className="w-20 h-20 bg-primary-200 rounded-full opacity-20" />
//         </div>
//         <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '1s' }}>
//           <div className="w-16 h-16 bg-secondary-200 rounded-full opacity-20" />
//         </div>
//         <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
//           <div className="w-12 h-12 bg-primary-300 rounded-full opacity-20" />
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-4">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Comprehensive Environmental <span className="text-primary-600">Monitoring</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our platform combines cutting-edge AI technology with real-time data to provide 
//               actionable insights for sustainable city planning.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <Link
//                 key={index}
//                 to={feature.link}
//                 className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-primary-200"
//               >
//                 <div className="flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {feature.description}
//                 </p>
//                 <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
//                   Learn More
//                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-primary-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Transform Your City?
//           </h2>
//           <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
//             Join the smart city revolution with our comprehensive environmental monitoring platform. 
//             Start making data-driven decisions for a sustainable future.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/signup"
//               className="inline-flex items-center px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//             >
//               Get Started Free
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//             <Link
//               to="/contact"
//               className="inline-flex items-center px-8 py-4 bg-primary-700 text-white text-lg font-semibold rounded-xl hover:bg-primary-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//             >
//               Contact Sales
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home


import { Link } from 'react-router-dom'
import { ArrowRight, Sun, Brain, Wind, Droplets, Heart, CheckCircle, TrendingUp, Users, Globe } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Sun className="h-8 w-8" />,
      title: "CO₂ Emissions & Solar Radiation",
      description: "Monitor carbon emissions and solar potential for sustainable energy planning.",
      link: "/features/co2-emissions"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Environmental Intelligence",
      description: "Analyze urban environment patterns using advanced AI algorithms.",
      link: "/ai-intelligence"
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Air Quality Index",
      description: "Monitor and visualize air quality metrics across different regions.",
      link: "/features/air-quality"
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Livability Score",
      description: "Measure how livable and sustainable different areas are for residents.",
      link: "/features/livability-score"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Smart Drainage",
      description: "Predict and visualize waterlogging risks with intelligent analysis.",
      link: "/features/smart-drainage"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Urban Health",
      description: "Connect environmental data to public health trends and outcomes.",
      link: "/features/urban-health"
    }
  ]

  const stats = [
    { icon: <Users className="h-8 w-8" />, label: "Cities Monitored", value: "50+" },
    { icon: <Globe className="h-8 w-8" />, label: "Data Points", value: "10M+" },
    { icon: <TrendingUp className="h-8 w-8" />, label: "CO₂ Reduced", value: "25%" },
    { icon: <CheckCircle className="h-8 w-8" />, label: "Accuracy", value: "99.5%" }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
        <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 mb-6">
            Smart <span className="text-emerald-600"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Environmental</span></span><br />Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-emerald-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empowering cities with AI-driven insights for sustainable urban development. 
            Monitor, analyze, and optimize environmental conditions for a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/features"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 text-white text-lg font-semibold rounded-xl hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-900 text-lg font-semibold rounded-xl border-2 border-emerald-900 hover:bg-lime-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-20 h-20 bg-lime-200 rounded-full opacity-30" />
        </div>
        <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 bg-emerald-300 rounded-full opacity-25" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 bg-lime-300 rounded-full opacity-30" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 text-emerald-600 rounded-xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-emerald-900 mb-2">{stat.value}</div>
                <div className="text-emerald-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Comprehensive Environmental <span className="text-emerald-600"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Monitoring</span></span>
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with real-time data to provide 
              actionable insights for sustainable city planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-lime-100 hover:border-emerald-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-lime-100 text-emerald-600 rounded-xl mb-6 group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-emerald-700 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center text-emerald-900 font-medium group-hover:text-emerald-700">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-lime-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your City?
          </h2>
          <p className="text-xl text-lime-100 mb-8 max-w-3xl mx-auto">
            Join the smart city revolution with our comprehensive environmental monitoring platform. 
            Start making data-driven decisions for a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 text-lg font-semibold rounded-xl hover:bg-lime-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-emerald-900 text-white text-lg font-semibold rounded-xl hover:bg-emerald-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
