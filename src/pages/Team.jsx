// import { Linkedin, Twitter, Mail } from 'lucide-react'

// const Team = () => {
//   const teamMembers = [
//     {
//       name: "Umme Benin Yeasmin Meem",
//       role: "Backend Developer",
//       image: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=400",
//       bio: "Student at International Islamic University Chittagong",
//       linkedin: "#",
//       twitter: "#",
//       email: "yeasminbenin@gmail.com" 
//     },
//     {
//       name: "kazi Namira Meyheg Sanam",
//       role: "Frontend Developer",
//       image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
//       bio: "Student at International Islamic University Chittagong",
//       linkedin: "#",
//       twitter: "#",
//       email: "kazinamira@gmail.com"
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-gray-50 py-16">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Meet the <span className="text-primary-600">Team</span>
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             We’re a dedicated duo combining environmental science and artificial intelligence to build smarter, more sustainable cities.
//           </p>
//         </div>

//         {/* Two-member layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-primary-100"
//               />
//               <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
//               <p className="text-primary-600 font-medium mb-4">{member.role}</p>
//               <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>

//               <div className="flex justify-center space-x-4">
//                 <a
//                   href={member.linkedin}
//                   className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors duration-200"
//                 >
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//                 <a
//                   href={member.twitter}
//                   className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors duration-200"
//                 >
//                   <Twitter className="h-5 w-5" />
//                 </a>
//                 <a
//                   href={`mailto:${member.email}`}
//                   className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors duration-200"
//                 >
//                   <Mail className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to action */}
//         <section className="bg-primary-600 rounded-2xl mt-20 p-10 text-center text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
//           <p className="text-lg mb-8 max-w-2xl mx-auto">
//             We’re always open to collaborators who share our passion for sustainable urban development and data-driven solutions.
//           </p>
//           <a
//             href="mailto:careers@cityweb.com"
//             className="inline-flex items-center px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200"
//           >
//             <Mail className="mr-2 h-5 w-5" />
//             careers@cityweb.com
//           </a>
//         </section>
//       </div>
//     </div>
//   )
// }

// export default Team





import { Linkedin, Github, Mail } from "lucide-react"

const Team = () => {
  const teamMembers = [
    {
      name: "Umme Benin Yeasmin Meem",
      role: "Backend Developer",
      bio: "Student at International Islamic University Chittagong",
      linkedin: "https://www.linkedin.com/in/benin-yeasmin",
      github: "https://github.com/byeasmin",
      email: "yeasminbenin@gmail.com",
    },
    {
      name: "Kazi Namira Meyheg Sanam",
      role: "Frontend Developer",
      bio: "Student at International Islamic University Chittagong",
      linkedin: "https://www.linkedin.com/in/kazi-namira",
      github: "https://github.com/Kazi-Namira",
      email: "kazinamira@gmail.com",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-4">
            Meet the{" "}
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We’re a dedicated duo of developers passionate about building
            impactful, eco-friendly technology solutions for a sustainable future.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white/70 backdrop-blur-2xl rounded-3xl border border-green-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-10 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-lime-400/20 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-28 h-28 rounded-full mx-auto mb-5 bg-gradient-to-tr from-green-600 via-emerald-500 to-lime-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  {member.name.split(" ")[0][0]}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-green-700 font-bold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-tr from-green-100 via-emerald-100 to-lime-100 rounded-full text-green-700 hover:from-green-300 hover:via-emerald-200 hover:to-lime-200 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-tr from-green-100 via-emerald-100 to-lime-100 rounded-full text-green-700 hover:from-green-300 hover:via-emerald-200 hover:to-lime-200 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-3 bg-gradient-to-tr from-green-100 via-emerald-100 to-lime-100 rounded-full text-green-700 hover:from-green-300 hover:via-emerald-200 hover:to-lime-200 transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-24 text-center bg-gradient-to-r from-green-700 via-emerald-600 to-lime-400 text-white rounded-3xl shadow-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">Join Our Green Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-emerald-100">
            We’re always open to collaborators who share our passion for
            sustainable innovation and eco-conscious development.
          </p>
          <a
            href="mailto:careers@cityweb.com"
            className="inline-flex items-center px-8 py-4 bg-white text-green-700 text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            careers@cityweb.com
          </a>
        </section>
      </div>
    </div>
  )
}

export default Team

