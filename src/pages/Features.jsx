// // import { Link } from 'react-router-dom'
// // import { Leaf, Brain, Wind, Home, Droplets, Heart, ArrowRight } from 'lucide-react'

// // const Features = () => {
// //   const features = [
// //     {
// //       icon: <Leaf className="h-12 w-12" />,
// //       title: "CO₂ Emissions & Solar Radiation",
// //       description: "Monitor carbon emissions and analyze solar potential for sustainable energy planning and carbon footprint reduction.",
// //       link: "/features/co2-emissions",
// //       color: "bg-green-100 text-green-600",
// //       benefits: ["Carbon footprint tracking", "Solar potential analysis", "Energy efficiency insights"]
// //     },
// //     {
// //       icon: <Brain className="h-12 w-12" />,
// //       title: "AI Environmental Intelligence",
// //       description: "Leverage advanced AI algorithms to analyze urban environment patterns and predict future trends.",
// //       link: "/ai-intelligence",
// //       color: "bg-purple-100 text-purple-600",
// //       benefits: ["Pattern recognition", "Predictive analytics", "Smart recommendations"]
// //     },
// //     {
// //       icon: <Wind className="h-12 w-12" />,
// //       title: "Air Quality Index",
// //       description: "Real-time monitoring and visualization of air quality metrics across different regions and time periods.",
// //       link: "/features/air-quality",
// //       color: "bg-blue-100 text-blue-600",
// //       benefits: ["Real-time monitoring", "Historical trends", "Health impact analysis"]
// //     },
// //     {
// //       icon: <Home className="h-12 w-12" />,
// //       title: "Livability Score",
// //       description: "Comprehensive assessment of how livable and sustainable different areas are for residents and businesses.",
// //       link: "/features/livability-score",
// //       color: "bg-orange-100 text-orange-600",
// //       benefits: ["Quality of life metrics", "Infrastructure analysis", "Community scoring"]
// //     },
// //     {
// //       icon: <Droplets className="h-12 w-12" />,
// //       title: "Smart Drainage",
// //       description: "Predict and visualize waterlogging risks with intelligent analysis of drainage systems and weather patterns.",
// //       link: "/features/smart-drainage",
// //       color: "bg-cyan-100 text-cyan-600",
// //       benefits: ["Flood prediction", "Infrastructure monitoring", "Emergency planning"]
// //     },
// //     {
// //       icon: <Heart className="h-12 w-12" />,
// //       title: "Urban Health",
// //       description: "Connect environmental data to public health trends and outcomes for comprehensive urban health insights.",
// //       link: "/features/urban-health",
// //       color: "bg-red-100 text-red-600",
// //       benefits: ["Health correlation analysis", "Disease pattern tracking", "Wellness recommendations"]
// //     }
// //   ]

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-12">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Header */}
// //         <div className="text-center mb-16">
// //           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// //             Smart City <span className="text-primary-600">Features</span>
// //           </h1>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
// //             Explore our comprehensive suite of environmental monitoring and analysis tools 
// //             designed to create smarter, more sustainable cities.
// //           </p>
// //         </div>

// //         {/* Features Grid */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //           {features.map((feature, index) => (
// //             <div
// //               key={index}
// //               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-primary-200"
// //             >
// //               <div className="flex items-start space-x-6">
// //                 <div className={`inline-flex items-center justify-center w-20 h-20 ${feature.color} rounded-2xl flex-shrink-0`}>
// //                   {feature.icon}
// //                 </div>
                
// //                 <div className="flex-1">
// //                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //                     {feature.title}
// //                   </h3>
// //                   <p className="text-gray-600 mb-6 leading-relaxed">
// //                     {feature.description}
// //                   </p>
                  
// //                   <div className="mb-6">
// //                     <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
// //                     <ul className="space-y-2">
// //                       {feature.benefits.map((benefit, benefitIndex) => (
// //                         <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
// //                           <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3" />
// //                           {benefit}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
                  
// //                   <Link
// //                     to={feature.link}
// //                     className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
// //                   >
// //                     Explore Feature
// //                     <ArrowRight className="ml-2 h-4 w-4" />
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Bottom CTA */}
// //         <div className="mt-16 text-center bg-primary-600 rounded-2xl p-12">
// //           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
// //             Ready to Get Started?
// //           </h2>
// //           <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
// //             Experience the power of our environmental intelligence platform. 
// //             Start monitoring and optimizing your city's environmental health today.
// //           </p>
// //           <Link
// //             to="/signup"
// //             className="inline-flex items-center px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
// //           >
// //             Start Free Trial
// //             <ArrowRight className="ml-2 h-5 w-5" />
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Features



// import { Link } from 'react-router-dom'
// import { Sun, Brain, Wind, Home, Droplets, Heart, ArrowRight } from 'lucide-react'

// const Features = () => {
//   const features = [
//     {
//       icon: <Sun className="h-12 w-12" />,
//       title: "CO₂ Emissions & Solar Radiation",
//       description: "Monitor carbon emissions and analyze solar potential for sustainable energy planning and carbon footprint reduction.",
//       link: "/features/co2-emissions",
//       color: "border-green-600",
//       bgColor: "bg-green-50",
//       benefits: ["Carbon footprint tracking", "Solar potential analysis", "Energy efficiency insights"]
//     },
//     {
//       icon: <Brain className="h-12 w-12" />,
//       title: "AI Environmental Intelligence",
//       description: "Leverage advanced AI algorithms to analyze urban environment patterns and predict future trends.",
//       link: "/ai-intelligence",
//       color: "border-green-600",
//       bgColor: "bg-green-50",
//       benefits: ["Pattern recognition", "Predictive analytics", "Smart recommendations"]
//     },
//     {
//       icon: <Wind className="h-12 w-12" />,
//       title: "Air Quality Index",
//       description: "Real-time monitoring and visualization of air quality metrics across different regions and time periods.",
//       link: "/features/air-quality",
//       color: "border-green-600",
//       bgColor: "bg-green-50",
//       benefits: ["Real-time monitoring", "Historical trends", "Health impact analysis"]
//     },
//     {
//       icon: <Home className="h-12 w-12" />,
//       title: "Livability Score",
//       description: "Comprehensive assessment of how livable and sustainable different areas are for residents and businesses.",
//       link: "/features/livability-score",
//       color: "border-green-600",
//       bgColor: "bg-green-50",
//       benefits: ["Quality of life metrics", "Infrastructure analysis", "Community scoring"]
//     },
//     {
//       icon: <Droplets className="h-12 w-12" />,
//       title: "Smart Drainage",
//       description: "Predict and visualize waterlogging risks with intelligent analysis of drainage systems and weather patterns.",
//       link: "/features/smart-drainage",
//       color: "border-green-600",
//       bgColor: "bg-green-50",
//       benefits: ["Flood prediction", "Infrastructure monitoring", "Emergency planning"]
//     },
//     {
//       icon: <Heart className="h-12 w-12" />,
//       title: "Urban Health",
//       description: "Connect environmental data to public health trends and outcomes for comprehensive urban health insights.",
//       link: "/features/urban-health",
//       color: "border-emerald-600",
//       bgColor: "bg-green-50",
//       benefits: ["Health correlation analysis", "Disease pattern tracking", "Wellness recommendations"]
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
//             Smart City <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Features</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Explore our comprehensive suite of environmental monitoring and analysis tools 
//             designed to create smarter, more sustainable cities.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`flex border-l-4 ${feature.color} ${feature.bgColor} rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300`}
//             >
//               <div className="flex items-start space-x-6">
//                 <div className={`inline-flex items-center justify-center w-20 h-20 ${feature.color.replace('border', 'text')} rounded-2xl flex-shrink-0`}>
//                   {feature.icon}
//                 </div>

//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold bg-gradient-to-r from-green-800 via-emerald-600 to-lime-600 bg-clip-text text-transparent mb-4">{feature.title}</h3>
//                   <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

//                   <div className="mb-6">
//                     <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
//                     <ul className="space-y-2">
//                       {feature.benefits.map((benefit, benefitIndex) => (
//                         <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
//                           <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3" />
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <Link
//                     to={feature.link} 
//                     className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white font-semibold rounded-xl hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//                   >
//                     Explore Feature
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center bg-gradient-to-r from-green-700 via-emerald-600 to-lime-400 text-white rounded-3xl shadow-2xl p-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Get Started?
//           </h2>
//           <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
//             Experience the power of our environmental intelligence platform. 
//             Start monitoring and optimizing your city's environmental health today.
//           </p>
//           <Link
//             to="/signup"
//             className="inline-flex items-center px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//           >
//             Start Free Trial
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Features



// import { Link } from 'react-router-dom'
// import { Sun, Brain, Wind, Home, Droplets, Heart, ArrowRight } from 'lucide-react'

// const Features = () => {
//   const features = [
//     {
//       icon: <Sun className="h-12 w-12" />,
//       title: "CO₂ Emissions & Solar Radiation",
//       description: "Monitor carbon emissions and analyze solar potential for sustainable energy planning and carbon footprint reduction.",
//       link: "/features/co2-emissions",
//       benefits: ["Carbon footprint tracking", "Solar potential analysis", "Energy efficiency insights"]
//     },
//     {
//       icon: <Brain className="h-12 w-12" />,
//       title: "AI Environmental Intelligence",
//       description: "Leverage advanced AI algorithms to analyze urban environment patterns and predict future trends.",
//       link: "/ai-intelligence",
//       benefits: ["Pattern recognition", "Predictive analytics", "Smart recommendations"]
//     },
//     {
//       icon: <Wind className="h-12 w-12" />,
//       title: "Air Quality Index",
//       description: "Real-time monitoring and visualization of air quality metrics across different regions and time periods.",
//       link: "/features/air-quality",
//       benefits: ["Real-time monitoring", "Historical trends", "Health impact analysis"]
//     },
//     {
//       icon: <Home className="h-12 w-12" />,
//       title: "Livability Score",
//       description: "Comprehensive assessment of how livable and sustainable different areas are for residents and businesses.",
//       link: "/features/livability-score",
//       benefits: ["Quality of life metrics", "Infrastructure analysis", "Community scoring"]
//     },
//     {
//       icon: <Droplets className="h-12 w-12" />,
//       title: "Smart Drainage",
//       description: "Predict and visualize waterlogging risks with intelligent analysis of drainage systems and weather patterns.",
//       link: "/features/smart-drainage",
//       benefits: ["Flood prediction", "Infrastructure monitoring", "Emergency planning"]
//     },
//     {
//       icon: <Heart className="h-12 w-12" />,
//       title: "Urban Health",
//       description: "Connect environmental data to public health trends and outcomes for comprehensive urban health insights.",
//       link: "/features/urban-health",
//       benefits: ["Health correlation analysis", "Disease pattern tracking", "Wellness recommendations"]
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
//             Smart City <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Features</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Explore our comprehensive suite of environmental monitoring and analysis tools 
//             designed to create smarter, more sustainable cities.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`flex border-2 border-green-500 backdrop-blur-lg bg-white/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}
//             >
//               <div className="flex items-start space-x-6">
//                 <div className="inline-flex items-center justify-center w-20 h-20 text-green-700 rounded-2xl flex-shrink-0 bg-white/30 shadow-inner backdrop-blur-md">
//                   {feature.icon}
//                 </div>

//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold bg-gradient-to-r from-green-800 via-emerald-600 to-lime-600 bg-clip-text text-transparent mb-4">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-800 mb-6 leading-relaxed">{feature.description}</p>

//                   <div className="mb-6">
//                     <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
//                     <ul className="space-y-2">
//                       {feature.benefits.map((benefit, benefitIndex) => (
//                         <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
//                           <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3" />
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <Link
//                     to={feature.link} 
//                     className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white font-semibold rounded-xl hover:opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//                   >
//                     Explore Feature
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center bg-gradient-to-r from-green-700 via-emerald-600 to-lime-400 text-white rounded-3xl shadow-2xl p-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Get Started?
//           </h2>
//           <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
//             Experience the power of our environmental intelligence platform. 
//             Start monitoring and optimizing your city's environmental health today.
//           </p>
//           <Link
//             to="/signup"
//             className="inline-flex items-center px-8 py-4 bg-white text-green-700 text-lg font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//           >
//             Start Free Trial
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Features



import { Link } from 'react-router-dom'
import { Sun, Brain, Wind, Home, Droplets, Heart, ArrowRight } from 'lucide-react'
import sunImg from '../assets/icon1.png'  
import prediction from '../assets/icon_2.png'  
import airQuality from '../assets/icon3.png'  
import livability from '../assets/icon_4.png'  
import Drainage from '../assets/icon_5.png'  
import Relocation from '../assets/icon6.png' 



const Features = () => {
  const features = [
    {
      icon: <img src={sunImg} alt="Sun" className="h-15 w-15 rounded-lg" />,
      title: "CO₂ Emissions & Solar Radiation",
      description: "Monitor carbon emissions and analyze solar potential for sustainable energy planning and carbon footprint reduction.",
      link: "/features/co2-emissions",
      benefits: ["Carbon footprint tracking", "Solar potential analysis", "Energy efficiency insights"]
    },
    {
      icon: <img src={prediction} alt="prediction" className="h-35 w-35 rounded-lg" />,
      title: "AI Environmental Intelligence",
      description: "Leverage advanced AI algorithms to analyze urban environment patterns and predict future trends.",
      link: "/ai-intelligence",
      benefits: ["Pattern recognition", "Predictive analytics", "Smart recommendations"]
    },
    {
      icon: <img src={airQuality} alt="airQuality" className="h-13 w-13 rounded-lg" />,
      title: "Air Quality Index",
      description: "Real-time monitoring and visualization of air quality metrics across different regions and time periods.",
      link: "/features/air-quality",
      benefits: ["Real-time monitoring", "Historical trends", "Health impact analysis"]
    },
    {
      icon: <img src={livability} alt="livability" className="h-13 w-12 rounded-lg" />,
      title: "Livability & Habitable Score",
      description: "Comprehensive assessment of how livable and sustainable different areas are for residents and businesses.",
      link: "/features/livability-score",
      benefits: ["Quality of life metrics", "Infrastructure analysis", "Community scoring"]
    },
    {
      icon: <img src={Drainage} alt="Drainage" className="h-13 w-13 rounded-lg" />,
      title: "Smart Drainage Management",
      description: "Predict and visualize waterlogging risks with intelligent analysis of drainage systems and weather patterns.",
      link: "/features/smart-drainage",
      benefits: ["Flood prediction", "Infrastructure monitoring", "Emergency planning"]
    },
    {
      icon: <img src={Relocation} alt="Relocation" className="h-13 w-15 rounded-lg" />,
      title: "Suggested Relocation Destination",
      description: "Leverage AI-driven analysis of environmental quality, livability, and infrastructure to recommend the best relocation destinations for individuals and families.",
      link: "/features/relocation",
      benefits: ["AI-based city ranking system", "Personalized relocation suggestions", "Environmental and livability comparison"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
            Smart City <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Features</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive suite of environmental monitoring and analysis tools 
            designed to create smarter, more sustainable cities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex border-2 border-green-500 backdrop-blur-lg bg-white/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="inline-flex items-center justify-center w-20 h-20 text-green-700 rounded-2xl flex-shrink-0">
                  {feature.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-800 via-emerald-600 to-lime-600 bg-clip-text text-transparent mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-800 mb-6 leading-relaxed">{feature.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={feature.link} 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white font-semibold rounded-xl hover:opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Explore Feature
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-700 via-emerald-600 to-lime-400 text-white rounded-3xl shadow-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Experience the power of our environmental intelligence platform. 
            Start monitoring and optimizing your city's environmental health today.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-white text-green-700 text-lg font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Features
