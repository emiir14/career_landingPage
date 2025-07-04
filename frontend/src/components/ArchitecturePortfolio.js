import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Mail, Phone, Instagram, Menu, X, Award, Users, Building, Lightbulb } from 'lucide-react';

const ArchitecturePortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Casa Residencial Contemporánea",
      category: "Residencial",
      image: "https://images.pexels.com/photos/32803120/pexels-photo-32803120.jpeg",
      description: "Diseño moderno que integra espacios interiores y exteriores"
    },
    {
      id: 2,
      title: "Patio Urbano Moderno",
      category: "Residencial",
      image: "https://images.unsplash.com/photo-1650332162976-f6686076948b",
      description: "Espacio residencial que combina funcionalidad y estética"
    },
    {
      id: 3,
      title: "Edificio Comercial Premium",
      category: "Comercial",
      image: "https://images.pexels.com/photos/32804769/pexels-photo-32804769.jpeg",
      description: "Arquitectura comercial con fachada distintiva en dorado"
    },
    {
      id: 4,
      title: "Interior Corporativo",
      category: "Comercial",
      image: "https://images.unsplash.com/photo-1718984722355-f8e033801192",
      description: "Espacios interiores con iluminación natural dramática"
    },
    {
      id: 5,
      title: "Arquitectura Sostenible",
      category: "Sostenible",
      image: "https://images.unsplash.com/photo-1521708266372-b3547456cc2d",
      description: "Edificio con jardines verticales y diseño eco-friendly"
    },
    {
      id: 6,
      title: "Casa Minimalista en la Naturaleza",
      category: "Residencial",
      image: "https://images.pexels.com/photos/32735950/pexels-photo-32735950.jpeg",
      description: "Diseño minimalista integrado al entorno natural"
    }
  ];

  // Optimized animation variants with better easing
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom bezier for smoother motion
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-modern-900/90 via-modern-800/80 to-accent-900/70 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1612966809470-6967deb36552"
            alt="Arquitectura moderna"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>

        {/* Content */}
        <div ref={ref} className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight">
                John Doe
                <span className="block font-extralight text-modern-300">Correa</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-modern-400 to-accent-500 mx-auto mb-8"></div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-modern-200 font-light leading-relaxed mb-12 max-w-4xl mx-auto"
            >
              Arquitecta especializada en crear espacios que inspiran y transforman.
              <span className="block mt-4 text-lg text-modern-300">
                Diseñando el futuro a través de la innovación, sustentabilidad y belleza funcional.
              </span>
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button 
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-modern-600 text-white font-medium rounded-full hover:bg-modern-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Mi Trabajo
                <motion.span 
                  className="inline-block ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </motion.button>
              <motion.button 
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-modern-400 text-modern-300 font-medium rounded-full hover:bg-modern-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-modern-400 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-modern-400 rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>
    );
  };

  const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
      { icon: Building, number: "50+", label: "Proyectos Completados" },
      { icon: Users, number: "200+", label: "Clientes Satisfechos" },
      { icon: Award, number: "15+", label: "Años de Experiencia" },
      { icon: Lightbulb, number: "25+", label: "Premios Obtenidos" }
    ];

    return (
      <section className="py-24 bg-gradient-to-br from-modern-50 to-accent-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Image */}
            <motion.div
              variants={fadeInLeft}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.img 
                  src="https://images.unsplash.com/photo-1544225917-1bf66feace19"
                  alt="Arquitecta John Doe"
                  className="w-full h-96 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-modern-900/20 to-transparent"></div>
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-modern-200 rounded-full -z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-accent-300 rounded-full -z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInRight} className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-modern-900 mb-6">
                  Sobre John Doe
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-modern-400 to-accent-500 mb-8"></div>
              </div>

              <motion.div 
                variants={staggerContainer}
                className="space-y-6 text-modern-700 text-lg leading-relaxed"
              >
                <motion.p variants={fadeInUp}>
                  Con más de 15 años de experiencia en arquitectura, John Doe ha desarrollado 
                  una visión única que combina la funcionalidad moderna con la calidez humana, 
                  creando espacios que no solo son estéticamente impresionantes, sino que también 
                  mejoran la calidad de vida de quienes los habitan.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Especializada en arquitectura residencial, comercial y sostenible, John Doe cree 
                  firmemente que cada proyecto debe contar una historia única, reflejando la 
                  personalidad y necesidades específicas de cada cliente.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Su enfoque integrador considera el impacto ambiental, la eficiencia energética 
                  y la armonía con el entorno, resultando en diseños que son tanto innovadores 
                  como responsables.
                </motion.p>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-2 gap-6 mt-12"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className="w-8 h-8 text-modern-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-modern-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-modern-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  };

  const Portfolio = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const categories = ['Todos', 'Residencial', 'Comercial', 'Sostenible'];

    const filteredProjects = selectedCategory === 'Todos' 
      ? projects 
      : projects.filter(project => project.category === selectedCategory);

    return (
      <section id="portfolio" className="py-24 bg-gradient-to-br from-accent-50 to-modern-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-light text-modern-900 mb-6"
            >
              Mi Portafolio
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-modern-400 to-accent-500 mx-auto mb-8"
            />
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-modern-700 max-w-3xl mx-auto leading-relaxed"
            >
              Una selección de proyectos que reflejan mi pasión por crear espacios 
              excepcionales que combinan innovación, funcionalidad y belleza.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map(category => (
              <motion.button
                key={category}
                variants={fadeInUp}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-modern-600 text-white shadow-lg'
                    : 'bg-white/70 text-modern-700 hover:bg-white/90 shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            key={selectedCategory} // Re-animate when category changes
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-modern-900/80 via-modern-900/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                
                <motion.div 
                  className="absolute inset-0 p-6 flex flex-col justify-end text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span className="inline-block px-3 py-1 bg-modern-200/90 text-modern-800 text-sm font-medium rounded-full mb-3 w-fit">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-modern-100 text-sm leading-relaxed">{project.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactInfo = [
      {
        icon: Mail,
        title: "Email",
        value: "johndoe@arquitectura.com",
        href: "mailto:johndoe@arquitectura.com"
      },
      {
        icon: Phone,
        title: "Teléfono",
        value: "+1 (555) 123-4567",
        href: "tel:+15551234567"
      },
      {
        icon: Instagram,
        title: "Instagram",
        value: "@johndoe.arquitecta",
        href: "https://instagram.com/"
      }
    ];

    return (
      <section id="contacto" className="py-24 bg-gradient-to-br from-modern-100 to-accent-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-light text-modern-900 mb-6"
            >
              Hablemos de tu Proyecto
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-modern-400 to-accent-500 mx-auto mb-8"
            />
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-modern-700 max-w-3xl mx-auto leading-relaxed"
            >
              ¿Tienes una visión arquitectónica que quieres hacer realidad? 
              Me encantaría conocer tu proyecto y explorar cómo podemos crear algo extraordinario juntos.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.title === "Instagram" ? "_blank" : "_self"}
                rel={contact.title === "Instagram" ? "noopener noreferrer" : ""}
                variants={fadeInUp}
                className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white/90 transition-all duration-300 text-center cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-modern-200 to-accent-300 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <contact.icon className="w-8 h-8 text-modern-600" />
                </motion.div>
                <h3 className="text-lg font-semibold text-modern-900 mb-2">{contact.title}</h3>
                <p className="text-modern-700 hover:text-modern-800 transition-colors duration-300 break-words">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-modern-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-modern-200/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-light text-modern-900"
            >
              John Doe
            </motion.div>

            {/* Desktop Menu */}
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {['Inicio', 'Sobre Mí', 'Portafolio', 'Contacto'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  onClick={() => {
                    const id = item === 'Inicio' ? 'hero' : 
                              item === 'Sobre Mí' ? 'about' :
                              item === 'Portafolio' ? 'portfolio' : 'contacto';
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-modern-700 hover:text-modern-900 font-medium transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-modern-600 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-modern-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-modern-200/50"
          >
            <div className="px-4 py-6 space-y-4">
              {['Inicio', 'Sobre Mí', 'Portafolio', 'Contacto'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => {
                    const id = item === 'Inicio' ? 'hero' : 
                              item === 'Sobre Mí' ? 'about' :
                              item === 'Portafolio' ? 'portfolio' : 'contacto';
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-modern-700 hover:text-modern-900 font-medium py-2"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Sections */}
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="py-12 bg-modern-900 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-3xl font-light text-modern-100 mb-4">John Doe</div>
          <div className="text-modern-300 mb-8">Arquitecto · Diseñadora · Visionaria</div>
          <div className="flex justify-center space-x-6 mb-8">
            {[Mail, Phone, Instagram].map((Icon, index) => (
              <motion.div 
                key={index} 
                className="w-12 h-12 bg-modern-100/10 rounded-full flex items-center justify-center hover:bg-modern-100/20 transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 text-modern-200" />
              </motion.div>
            ))}
          </div>
          <div className="text-modern-400 text-sm">
            © {new Date().getFullYear()} John Doe. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArchitecturePortfolio;