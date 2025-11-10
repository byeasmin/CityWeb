// import { Leaf, Target, Eye, Heart, Users, Globe, Award, TrendingUp } from 'lucide-react'

// const About = () => {
//   const values = [
//     {
//       icon: <Leaf className="h-8 w-8" />,
//       title: "Sustainability",
//       description: "Committed to creating solutions that promote environmental sustainability and green urban development."
//     },
//     {
//       icon: <Target className="h-8 w-8" />,
//       title: "Innovation",
//       description: "Leveraging cutting-edge AI and technology to solve complex urban environmental challenges."
//     },
//     {
//       icon: <Heart className="h-8 w-8" />,
//       title: "Community Focus",
//       description: "Putting communities first by providing tools that improve quality of life for all residents."
//     },
//     {
//       icon: <Globe className="h-8 w-8" />,
//       title: "Global Impact",
//       description: "Working towards a future where all cities are smart, sustainable, and environmentally conscious."
//     }
//   ]

//   const stats = [
//     { icon: <Users className="h-8 w-8" />, label: "Cities Served", value: "50+" },
//     { icon: <Globe className="h-8 w-8" />, label: "Countries", value: "15+" },
//     { icon: <Award className="h-8 w-8" />, label: "Awards Won", value: "12" },
//     { icon: <TrendingUp className="h-8 w-8" />, label: "CO₂ Reduced", value: "25%" }
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-200 to-lime-100">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-green-200 via-emerald-200 to-lime-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//               About <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">CityWeb</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               We're pioneering the future of smart cities through AI-driven environmental intelligence. 
//               Our mission is to empower urban planners, governments, and communities with the data 
//               and insights needed to create sustainable, livable cities.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-16 bg-gradient-to-br from-green-200 via-emerald-100 to-lime-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div className="bg-primary-50 rounded-2xl p-8">
//               <div className="flex items-center mb-6">
//                 <Target className="h-8 w-8 text-primary-600 mr-3" />
//                 <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
//               </div>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 To democratize access to environmental intelligence by providing cities with 
//                 comprehensive, AI-powered tools that enable data-driven decisions for sustainable 
//                 urban development. We believe every city deserves the technology to become smarter, 
//                 cleaner, and more livable.
//               </p>
//             </div>

//             <div className="bg-secondary-50 rounded-2xl p-8">
//               <div className="flex items-center mb-6">
//                 <Eye className="h-8 w-8 text-secondary-600 mr-3" />
//                 <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
//               </div>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 A world where every city is equipped with intelligent environmental monitoring 
//                 systems that proactively address climate challenges, improve public health, 
//                 and create sustainable communities for future generations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Statistics */}
//       <section className="py-16 bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact in Numbers</h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               See how we're making a difference in cities around the world
//             </p>
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl mb-4">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold mb-2">{stat.value}</div>
//                 <div className="text-gray-300">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Values */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Our <span className="text-primary-600">Values</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               The principles that guide our work and drive our commitment to creating 
//               a more sustainable future for cities worldwide.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mr-4">
//                     {value.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                 Our <span className="text-primary-600">Story</span>
//               </h2>
//             </div>
            
//             <div className="prose prose-lg max-w-none text-gray-700">
//               <p className="text-xl leading-relaxed mb-8">
//                 CityWeb was born from the recognition that cities face unprecedented environmental 
//                 challenges in the 21st century. Climate change, rapid urbanization, and growing 
//                 populations have created complex problems that require intelligent solutions.
//               </p>
              
//               <p className="text-lg leading-relaxed mb-8">
//                 Founded by a team of environmental scientists, data engineers, and urban planning 
//                 experts, we set out to bridge the gap between environmental data and actionable 
//                 insights. We believe that the future of urban sustainability lies in the intelligent 
//                 use of technology and data.
//               </p>
              
//               <p className="text-lg leading-relaxed mb-8">
//                 Today, CityWeb serves cities across multiple continents, helping them make informed 
//                 decisions about everything from carbon emissions to air quality, from drainage 
//                 systems to public health. Our platform continues to evolve, incorporating the 
//                 latest advances in AI and environmental monitoring technology.
//               </p>
              
//               <div className="bg-primary-50 rounded-2xl p-8 mt-12">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking Forward</h3>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   As we look to the future, we remain committed to our vision of smarter, more 
//                   sustainable cities. We're continuously developing new features, expanding our 
//                   global reach, and partnering with cities that share our commitment to 
//                   environmental stewardship.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default About



import { Leaf, Target, Eye, Heart, Users, Globe, Award, TrendingUp } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "Committed to creating solutions that promote environmental sustainability and green urban development."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "Leveraging cutting-edge AI and technology to solve complex urban environmental challenges."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community Focus",
      description: "Putting communities first by providing tools that improve quality of life for all residents."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "Working towards a future where all cities are smart, sustainable, and environmentally conscious."
    }
  ]

  const stats = [
    { icon: <Users className="h-8 w-8" />, label: "Cities Served", value: "50+" },
    { icon: <Globe className="h-8 w-8" />, label: "Countries", value: "15+" },
    { icon: <Award className="h-8 w-8" />, label: "Awards Won", value: "12" },
    { icon: <TrendingUp className="h-8 w-8" />, label: "CO₂ Reduced", value: "25%" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-emerald-200 to-lime-200 text-gray-900">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-200 via-green-200 to-lime-200 text-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">CityWeb</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're pioneering the future of smart cities through AI-driven environmental intelligence. 
            Our mission is to empower urban planners, governments, and communities with data 
            and insights for sustainable, livable cities.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 rounded-2xl p-8 shadow-md">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-red-700 mr-3" />
              <h2 className="text-3xl font-bold text-emerald-900"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Our Mission</span></h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To democratize access to environmental intelligence by providing cities with 
              comprehensive, AI-powered tools that enable data-driven decisions for sustainable 
              urban development.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-100 via-teal-100 to-emerald-50 rounded-2xl p-8 shadow-md">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-red-700 mr-3" />
              <h2 className="text-3xl font-bold text-sky-900"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Our Vision</span></h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              A world where every city is equipped with intelligent environmental monitoring 
              systems that proactively address climate challenges and build sustainable futures.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6"><span className="bg-gradient-to-r from-white via-emerald-50 to-yellow-500 bg-clip-text text-transparent">Our Impact in Numbers</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            See how we're making a difference in cities around the world
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-lime-400 via-emerald-500 to-teal-600 rounded-xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-lime-100 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-br from-green-700 via-emerald-500 to-lime-500 bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            The principles that guide our work and drive our commitment to creating 
            a more sustainable future for cities worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 text-green-700 rounded-xl mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">{value.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gradient-to-br from-emerald-100 via-teal-100 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Our <span className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Story</span>
          </h2>
          <div className="max-w-4xl mx-auto text-left text-gray-700 leading-relaxed text-lg space-y-8">
            <p>
              CityWeb was born from the recognition that cities face unprecedented environmental 
              challenges in the 21st century. Climate change and rapid urbanization demand smarter responses.
            </p>
            <p>
              Founded by environmental scientists and AI engineers, we bridge the gap between 
              data and sustainable decisions. Our mission: empower every city to act intelligently.
            </p>
            <p>
              Today, CityWeb supports cities worldwide — optimizing emissions, air quality, 
              drainage, and public health through data-driven systems.
            </p>
            <div className="bg-gradient-to-br from-lime-50 via-emerald-100 to-teal-50 rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Looking Forward</h3>
              <p>
                As we look to the future, we remain committed to smarter, greener cities — 
                expanding globally and innovating for a sustainable tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
