import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, Github, Linkedin, ExternalLink, Code, TrendingUp, Download, ChevronDown, Menu, X } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'marketing', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = {
    digitalMarketing: [
      'SEO (On-page, Off-page)',
      'Social Media Management',
      'Content Creation & Strategy',
      'Hashtag Research',
      'Caption Writing'
    ],
    tools: [
      'Google Analytics',
      'Google Search Console',
      'Google Ads',
      'Meta Ads Manager',
      'Canva'
    ],
    development: [
      'HTML, CSS, Tailwind CSS',
      'JavaScript, React.js',
      'Node.js, Express.js',
      'MongoDB',
      'REST APIs, JWT Auth'
    ]
  };

  const projects = [
    {
      name: 'DesigningIndia',
      type: 'Freelancing Platform',
      description: 'Built using React.js and Tailwind CSS. Fully responsive UI connecting clients with skilled designers.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
      link: 'https://designingindia.in'
    },
    {
      name: 'Blogify',
      type: 'Blog Platform',
      description: 'MERN Stack application with authentication, CRUD operations, and image upload functionality.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      link: 'https://blog-frontend-admin-hss7.vercel.app/'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Divya Patel
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'skills', 'experience', 'projects', 'marketing', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors ${
                      activeSection === item
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="px-4 py-4 space-y-3">
                {['home', 'about', 'skills', 'experience', 'projects', 'marketing', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left capitalize py-2 transition-colors ${
                      activeSection === item
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Divya Patel
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
                Digital Marketing Executive | MERN Stack Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                I create high-performing digital experiences through SEO, social media marketing, and full-stack development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </button>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="mt-12 animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-5xl font-bold">
                    DP
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    I am a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Digital Marketer</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">MERN Stack Developer</span> from Ahmedabad, India.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    With extensive experience in <strong>SEO, Social Media Management, Graphic Design, and WordPress</strong>, I help brands grow their online presence and reach their target audience effectively.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm skilled in building responsive web applications using the <strong>MERN stack</strong> and creating seamless digital experiences that combine technical excellence with marketing strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">

              {/* Digital Marketing */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Digital Marketing</h3>
                </div>
                <ul className="space-y-3">
                  {skills.digitalMarketing.map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Tools</h3>
                </div>
                <ul className="space-y-3">
                  {skills.tools.map((tool, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 dark:text-purple-400 mr-2">▹</span>
                      <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Development */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-pink-600 dark:text-pink-400 mr-3" />
                  <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400">Development</h3>
                </div>
                <ul className="space-y-3">
                  {skills.development.map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-600 dark:text-pink-400 mr-2">▹</span>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-8">

              {/* Global Rich AI Digital */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">WordPress & Social Media Executive</h3>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-1">Global Rich AI Digital</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Nov 2025 – Present</span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Created and managed WordPress websites with SEO optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Designed social media posts using Canva
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Managed Instagram and social media platforms
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Created captions with SEO and hashtag strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Worked on Google Analytics and Search Console
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Ran and optimized Google Ads and Meta Ads campaigns
                  </li>
                </ul>
              </div>

              {/* Shiv Aurica */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">MERN Stack Intern</h3>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-1">Shiv Aurica</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">June 2025 – Oct 2025</span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Working with MongoDB, Express, React & Node
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Building APIs, CRUD operations, authentication & dashboards
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Implementing MVC architecture and backend integrations
                  </li>
                </ul>
              </div>

              {/* Cognifyz Technologies */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400">Web Development Intern</h3>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-1">Cognifyz Technologies</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Jan 2025 – Feb 2025</span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    Worked on HTML, CSS, JavaScript & React
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    Built responsive pages and UI components
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    Improved project structure & teamwork skills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Code className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{project.type}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
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

        {/* Digital Marketing Work Section */}
        <section id="marketing" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Digital Marketing Work</h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold mb-4">Social Media & Content Creation</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                  Specialized in creating engaging social media content with strategic SEO optimization and hashtag research.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl">
                    <h4 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">Content Strategy</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        Created 100+ social media posts using Canva
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        Developed SEO-optimized captions
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        Conducted hashtag research for maximum reach
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl">
                    <h4 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">Campaign Management</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        Managed Google Ads and Meta Ads campaigns
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        Increased engagement through targeted content
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        Analytics tracking and performance optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-lg">
              <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
                I'm always open to discussing new projects, opportunities, or collaborations.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <a
                  href="mailto:pateldivyad3233@gmail.com"
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
                >
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="font-semibold">pateldivyad3233@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:9265662205"
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
                >
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <p className="font-semibold">+91 9265662205</p>
                  </div>
                </a>
              </div>
              <div className="flex justify-center space-x-6 mb-8">
                <a
                  href="https://www.linkedin.com/in/patel-divya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </a>
                <a
                  href="https://github.com/pateldivyaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-8 h-8 text-gray-900 dark:text-white" />
                </a>
              </div>
              <div className="text-center">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 Divya Patel. Built with React & Tailwind CSS.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Ahmedabad, India
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
