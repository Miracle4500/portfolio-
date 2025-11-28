import React from 'react';
import { 
  Github, Mail, Linkedin, FileText, Award, GraduationCap, Building, 
  Calendar, MapPin, ChevronRight, Code, Zap, Cog, Database, 
  Lightbulb, Battery, Sun, Users, BookOpen, School 
} from 'lucide-react';

const App = () => {
  const skills = [
    { name: 'Circuit Analysis & Design', icon: Zap, level: 92 },
    { name: 'Power Systems Engineering', icon: Cog, level: 88 },
    { name: 'Analog & Digital Electronics', icon: Database, level: 90 },
    { name: 'Control Systems', icon: Cog, level: 85 },
    { name: 'MATLAB & Simulink', icon: Code, level: 82 },
    { name: 'AutoCAD Electrical', icon: Code, level: 86 },
    { name: 'Renewable Energy Systems', icon: Sun, level: 84 },
    { name: 'PCB Design', icon: Battery, level: 78 }
  ];

  const projects = [
    {
      title: 'Smart Home Energy Management System',
      description: 'Developed an IoT-based energy monitoring system that tracks real-time power consumption and provides optimization suggestions for household appliances.',
      tech: ['Arduino', 'ESP32', 'Mobile App', 'Cloud Platform'],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Automatic Solar Tracking System',
      description: 'Designed and built a dual-axis solar tracker that maximizes solar panel efficiency by following the sun\'s position throughout the day.',
      tech: ['LDR Sensors', 'Stepper Motors', 'Microcontroller', 'Solar Panels'],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Industrial Motor Control Panel',
      description: 'Created a comprehensive motor control panel for industrial applications featuring overload protection, remote control, and status monitoring.',
      tech: ['Contactors', 'Relays', 'PLC', 'HMI Interface'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Wireless Power Transmission Prototype',
      description: 'Built a proof-of-concept wireless power transmission system using resonant inductive coupling for charging small electronic devices.',
      tech: ['Coil Design', 'Resonant Circuits', 'RF Technology', 'Power Electronics'],
      image: 'https://images.unsplash.com/photo-1611512347722-6a5a59193677?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const education = [
    {
      degree: 'National Diploma in Electrical/Electronics Engineering',
      institution: 'Federal Polytechnic Nekede',
      period: '2023 – Present',
      location: 'Owerri, Imo State, Nigeria',
      current: true,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      degree: 'West African Senior School Certificate (WASSCE)',
      institution: 'BrainStars Int\'l Academy',
      period: '2017 – 2023',
      location: 'Ogbaku, Mbo Local Government, Imo State, Nigeria',
      current: false,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const achievements = [
    'Departmental Academic Excellence Award - ND1 (GPA: 3.8/4.0)',
    'Best Student in Electrical Circuits Theory - ND1',
    'Winner, Federal Polytechnic Nekede Engineering Innovation Challenge 2024',
    'Leadership Award - BrainStars Int\'l Academy Academic Excellence',
    'Member, Nigerian Society of Engineers (Student Chapter)',
    'Certified in Basic Electronics and Circuit Design'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Ekeoha Miracle Chidindu</h1>
                <p className="text-sm text-gray-600">Electrical Engineering Student | ND2</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/10 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
                <Award className="w-4 h-4 mr-1.5" />
                ND2 Electrical Engineering Student
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Hello, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Ekeoha Miracle Chidindu</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl text-balance hyphens-auto">
                Passionate electrical engineering student at Federal Polytechnic Nekede, specializing in 
                power systems, renewable energy, and innovative electrical solutions. Committed to excellence 
                and driven by curiosity to solve real-world engineering challenges.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center group"
                >
                  Get In Touch
                  <ChevronRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a 
                  href="#projects" 
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3.5 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-md transition-all duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-2">
                  <div className="w-72 h-72 sm:w-88 sm:h-88 bg-white rounded-2xl flex items-center justify-center shadow-inner p-4">
                    <div className="text-center">
                      <GraduationCap className="w-16 h-16 sm:w-20 sm:h-20 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">Ekeoha M. Chidindu</h3>
                      <p className="text-base sm:text-lg text-gray-600">ND2 Electrical Engineering</p>
                      <div className="mt-3 flex items-center justify-center text-sm text-gray-500">
                        <School className="w-3.5 h-3.5 mr-1" />
                        Federal Polytechnic Nekede
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-lg font-bold shadow-lg animate-pulse z-10">
                  <span className="text-xs block opacity-80">Academic</span>
                  <span className="text-xl font-bold">ND2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-base sm:text-lg mt-6 max-w-3xl mx-auto text-balance hyphens-auto">
              From my foundational years at BrainStars International Academy to my current journey at Federal Polytechnic Nekede, 
              I've cultivated a deep passion for electrical engineering and its transformative potential.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
              <p className="text-balance hyphens-auto leading-relaxed">
                I am a dedicated National Diploma Year 2 (ND2) student in Electrical/Electronics Engineering 
                at the prestigious School of Engineering and Technology, Federal Polytechnic Nekede. My academic 
                foundation was built at <span className="font-semibold text-blue-600">BrainStars International Academy, Ogbaku</span>, 
                where I developed strong analytical skills and a love for problem-solving.
              </p>
              <p className="text-balance hyphens-auto leading-relaxed">
                Throughout my studies, I've maintained academic excellence while actively engaging in hands-on 
                projects that bridge theoretical knowledge with practical applications. My interests span across 
                renewable energy systems, power distribution networks, control systems, and innovative electronic 
                circuit design.
              </p>
              <p className="text-balance hyphens-auto leading-relaxed">
                I am committed to continuous learning and professional development, always seeking opportunities 
                to contribute meaningfully to the engineering community and address real-world challenges through 
                innovative electrical engineering solutions.
              </p>
            </div>
            <div className="space-y-7">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/70 p-6 rounded-2xl border border-blue-200 shadow-sm">
                <div className="flex items-start mb-4">
                  <Building className="w-7 h-7 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Current Institution</h4>
                    <p className="text-gray-700">Federal Polytechnic Nekede</p>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Federal Polytechnic Nekede campus"
                  className="w-full h-32 object-cover rounded-lg mt-3 border"
                />
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-green-100/70 p-6 rounded-2xl border border-green-200 shadow-sm">
                <div className="flex items-start mb-4">
                  <BookOpen className="w-7 h-7 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Alma Mater</h4>
                    <p className="text-gray-700">BrainStars Int'l Academy, Ogbaku</p>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Classroom at BrainStars International Academy"
                  className="w-full h-32 object-cover rounded-lg mt-3 border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-50/80 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-base sm:text-lg mt-6 max-w-2xl mx-auto text-balance hyphens-auto">
              My technical expertise spans across core electrical engineering disciplines with hands-on experience in modern tools and technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/70"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <skill.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600 mt-1 block text-right">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-base sm:text-lg mt-6 max-w-2xl mx-auto text-balance hyphens-auto">
              Innovative engineering solutions that demonstrate my technical capabilities and problem-solving approach.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200/60"
              >
                <div className="h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-50 text-blue-800 text-xs sm:text-sm px-2.5 py-1 rounded-md font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-b from-blue-50/60 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Educational Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-base sm:text-lg mt-6 max-w-2xl mx-auto text-balance hyphens-auto">
              My academic path from secondary school to higher education in electrical engineering.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200/50"
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={edu.image} 
                      alt={edu.institution}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-700 font-medium">{edu.institution}</p>
                      </div>
                      {edu.current && (
                        <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-2.5 py-1 rounded-full font-semibold whitespace-nowrap">
                          Currently Studying
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      <MapPin className="w-3.5 h-3.5 inline mr-1 text-gray-500" />
                      {edu.location}
                    </p>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      <span className="text-sm sm:text-base">{edu.period}</span>
                    </div>
                    {index === 0 && (
                      <div className="bg-blue-50/80 border-l-4 border-blue-500 p-3 rounded-r-lg text-sm italic text-blue-800">
                        &ldquo;The School of Engineering and Technology provides world-class 
                        technical education and hands-on training in electrical engineering.&rdquo;
                      </div>
                    )}
                    {index === 1 && (
                      <div className="bg-emerald-50/80 border-l-4 border-emerald-500 p-3 rounded-r-lg text-sm italic text-emerald-800">
                        &ldquo;BrainStars International Academy gave me a strong foundation in sciences and mathematics.&rdquo;
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-base sm:text-lg mt-6 max-w-2xl mx-auto text-balance hyphens-auto">
              Academic excellence and recognition throughout my educational journey.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3.5 bg-gray-50 p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base text-balance hyphens-auto">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Get In Touch</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto text-balance">
              I'm always open to discussing new opportunities, projects, and collaborations.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: Mail, title: 'Email', detail: 'ekeohamiracle@email.com' },
                { icon: Linkedin, title: 'LinkedIn', detail: 'linkedin.com/in/ekeohamiracle' },
                { icon: Github, title: 'GitHub', detail: 'github.com/ekeohamiracle' }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <item.icon className="w-10 h-10 text-white mx-auto mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm sm:text-base break-words">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a 
                href="#" 
                className="inline-flex items-center bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <FileText className="w-5 h-5 mr-2 group-hover:scale-105 transition-transform" />
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2.5 mb-4">
            <GraduationCap className="w-7 h-7 text-blue-400" />
            <h3 className="text-xl font-bold">Ekeoha Miracle Chidindu</h3>
          </div>
          <p className="text-gray-300 text-base mb-2">
            ND2 Electrical Engineering Student
          </p>
          <p className="text-gray-500 text-sm">
            Federal Polytechnic Nekede • School of Engineering and Technology
          </p>
          <p className="text-gray-600 text-xs mt-4">
            © {new Date().getFullYear()} Ekeoha Miracle Chidindu. All rights reserved.
          </p>
          <div className="mt-3 flex items-center justify-center text-xs text-gray-500">
            <School className="w-3 h-3 mr-1" />
            Proudly representing BrainStars Int'l Academy & Federal Polytechnic Nekede
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
