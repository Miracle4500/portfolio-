import React from 'react';
import { Github, Mail, Linkedin, FileText, Award, GraduationCap, Building, Calendar, MapPin, ChevronRight, Code, Zap, Cog, Database, Lightbulb, Battery, Sun, Users, BookOpen, School } from 'lucide-react';

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
      image: 'https://placehold.co/400x250/1e40af/ffffff?text=Smart+Energy+System'
    },
    {
      title: 'Automatic Solar Tracking System',
      description: 'Designed and built a dual-axis solar tracker that maximizes solar panel efficiency by following the sun\'s position throughout the day.',
      tech: ['LDR Sensors', 'Stepper Motors', 'Microcontroller', 'Solar Panels'],
      image: 'https://placehold.co/400x250/059669/ffffff?text=Solar+Tracker'
    },
    {
      title: 'Industrial Motor Control Panel',
      description: 'Created a comprehensive motor control panel for industrial applications featuring overload protection, remote control, and status monitoring.',
      tech: ['Contactors', 'Relays', 'PLC', 'HMI Interface'],
      image: 'https://placehold.co/400x250/dc2626/ffffff?text=Motor+Control+Panel'
    },
    {
      title: 'Wireless Power Transmission Prototype',
      description: 'Built a proof-of-concept wireless power transmission system using resonant inductive coupling for charging small electronic devices.',
      tech: ['Coil Design', 'Resonant Circuits', 'RF Technology', 'Power Electronics'],
      image: 'https://placehold.co/400x250/7c3aed/ffffff?text=Wireless+Power'
    }
  ];

  const education = [
    {
      degree: 'National Diploma in Electrical/Electronics Engineering',
      institution: 'Federal Polytechnic Nekede',
      period: '2023 - Present',
      location: 'Owerri, Imo State, Nigeria',
      current: true,
      image: 'https://placehold.co/600x400/2563eb/ffffff?text=Federal+Polytechnic+Nekede'
    },
    {
      degree: 'West African Senior School Certificate (WASSCE)',
      institution: 'BrainStars Int\'l Academy',
      period: '2017 - 2023',
      location: 'Ogbaku, Mbo Local Government, Imo State, Nigeria',
      current: false,
      image: 'https://placehold.co/600x400/059669/ffffff?text=BrainStars+International+Academy'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
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
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Projects</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Education</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
                <Award className="w-4 h-4 mr-2" />
                ND2 Electrical Engineering Student
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hello, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Ekeoha Miracle Chidindu</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Passionate electrical engineering student at Federal Polytechnic Nekede, specializing in 
                power systems, renewable energy, and innovative electrical solutions. Committed to excellence 
                and driven by curiosity to solve real-world engineering challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center group">
                  Get In Touch
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#projects" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-md transition-all duration-300">
                  View Projects
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3">
                  <div className="w-88 h-88 bg-white rounded-2xl flex items-center justify-center shadow-inner">
                    <div className="text-center p-6">
                      <GraduationCap className="w-20 h-20 text-blue-600 mx-auto mb-6" />
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">Ekeoha M. Chidindu</h3>
                      <p className="text-lg text-gray-600">ND2 Electrical Engineering</p>
                      <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                        <School className="w-4 h-4 mr-1" />
                        Federal Polytechnic Nekede
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-xl font-bold shadow-lg animate-pulse">
                  <span className="text-sm block">Academic</span>
                  <span className="text-2xl">ND2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              From my foundational years at BrainStars International Academy to my current journey at Federal Polytechnic Nekede, 
              I've cultivated a deep passion for electrical engineering and its transformative potential.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                I am a dedicated National Diploma Year 2 (ND2) student in Electrical/Electronics Engineering 
                at the prestigious School of Engineering and Technology, Federal Polytechnic Nekede. My academic 
                foundation was built at <span className="font-semibold text-blue-600">BrainStars International Academy, Ogbaku</span>, 
                where I developed strong analytical skills and a love for problem-solving.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Throughout my studies, I've maintained academic excellence while actively engaging in hands-on 
                projects that bridge theoretical knowledge with practical applications. My interests span across 
                renewable energy systems, power distribution networks, control systems, and innovative electronic 
                circuit design.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                I am committed to continuous learning and professional development, always seeking opportunities 
                to contribute meaningfully to the engineering community and address real-world challenges through 
                innovative electrical engineering solutions.
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Current Institution</h4>
                    <p className="text-gray-600">Federal Polytechnic Nekede</p>
                  </div>
                </div>
                <img 
                  src="https://placehold.co/500x300/2563eb/ffffff?text=Federal+Polytechnic+Nekede" 
                  alt="Federal Polytechnic Nekede"
                  className="w-full h-32 object-cover rounded-lg mt-4"
                />
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-green-600 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Alma Mater</h4>
                    <p className="text-gray-600">BrainStars Int'l Academy, Ogbaku</p>
                  </div>
                </div>
                <img 
                  src="https://placehold.co/500x300/059669/ffffff?text=BrainStars+International+Academy" 
                  alt="BrainStars International Academy"
                  className="w-full h-32 object-cover rounded-lg mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              My technical expertise spans across core electrical engineering disciplines with hands-on experience in modern tools and technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mr-4">
                    <skill.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-1500 ease-out relative"
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="absolute -top-8 -right-2 text-xs font-bold text-gray-700">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Innovative engineering solutions that demonstrate my technical capabilities and problem-solving approach.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium border border-blue-200"
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
      <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Educational Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              My academic path from secondary school to higher education in electrical engineering.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={edu.image} 
                      alt={edu.institution}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                        <p className="text-lg text-gray-700 font-medium">{edu.institution}</p>
                      </div>
                      {edu.current && (
                        <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                          Currently Studying
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      Location: {edu.location}
                    </p>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="text-lg">{edu.period}</span>
                    </div>
                    {index === 0 && (
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-blue-800 italic">
                          "The School of Engineering and Technology at Federal Polytechnic Nekede provides world-class 
                          technical education and hands-on training in electrical engineering disciplines."
                        </p>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <p className="text-green-800 italic">
                          "BrainStars International Academy provided me with a strong foundation in sciences and mathematics, 
                          preparing me excellently for my engineering journey."
                        </p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Achievements & Recognition</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Academic excellence and recognition throughout my educational journey.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4 bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{achievement}</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-blue-100 text-xl">I'm always open to discussing new opportunities, projects, and collaborations</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Mail className="w-12 h-12 text-white mx-auto mb-6" />
                <h3 className="text-white font-bold text-xl mb-3">Email</h3>
                <p className="text-blue-100 text-lg">ekeohamiracle@email.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Linkedin className="w-12 h-12 text-white mx-auto mb-6" />
                <h3 className="text-white font-bold text-xl mb-3">LinkedIn</h3>
                <p className="text-blue-100 text-lg">linkedin.com/in/ekeohamiracle</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Github className="w-12 h-12 text-white mx-auto mb-6" />
                <h3 className="text-white font-bold text-xl mb-3">GitHub</h3>
                <p className="text-blue-100 text-lg">github.com/ekeohamiracle</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a 
                href="#" 
                className="inline-flex items-center bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <FileText className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold">Ekeoha Miracle Chidindu</h3>
          </div>
          <p className="text-gray-400 text-lg mb-4">
            ND2 Electrical Engineering Student
          </p>
          <p className="text-gray-500 text-base">
            Federal Polytechnic Nekede • School of Engineering and Technology
          </p>
          <p className="text-gray-600 text-sm mt-6">
            © 2025 Ekeoha Miracle Chidindu. All rights reserved.
          </p>
          <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
            <School className="w-4 h-4 mr-1" />
            Proudly representing BrainStars Int'l Academy & Federal Polytechnic Nekede
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
