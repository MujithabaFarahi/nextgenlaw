'use client'

import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Star,
  Scale,
  Menu,
  X,
  Lightbulb,
  Shield,
  Zap,
  Code,
  Building2,
  Moon,
  Sun,
  Play,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from '@/components/ui/typewriter';
import { AboutPlatform } from '@/components/sections/about-platform';
import { UpcomingEvents } from '@/components/sections/upcoming-events';
import { WhoThisIsFor } from '@/components/sections/who-this-is-for';
import { GlobalCommunity } from '@/components/sections/global-community';
import { RealTransformations } from '@/components/sections/real-transformations';
import { Footer } from '@/components/sections/footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dark mode
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const careerPaths = [
    { icon: Zap, title: 'AI-Empowered Lawyer', desc: 'Practice law with advanced AI capabilities' },
    { icon: Lightbulb, title: 'Legal Innovation Specialist', desc: 'Drive tech adoption in law firms' },
    { icon: Building2, title: 'Legal Operations Associate', desc: 'Optimize legal department efficiency' },
    { icon: Code, title: 'Contract Automation Expert', desc: 'Design automated contract systems' },
    { icon: Shield, title: 'Policy Analyst (AI-Focused)', desc: 'Shape AI policy and regulation' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Corporate Lawyer, Mumbai',
      content: 'NextGenLaws transformed how I work. The AI tools I learned have made me 3x more efficient.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Partner, Legal Firm',
      content: 'The DueDraft course was a game-changer. Our firm now handles twice the workload.',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100',
      rating: 5,
    },
    {
      name: 'Anjali Desai',
      role: 'Solo Practitioner',
      content: 'As a solo lawyer, AI seemed overwhelming. NextGenLaws made it accessible and practical.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans selection:bg-violet-200 dark:selection:bg-violet-900">
      {/* Navigation - Premium Glass Effect */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center">
            {/* Logo - Left */}
            <div className="flex-1">
              <a href="/" className="flex items-center gap-3 group relative z-50">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black dark:bg-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                  <Scale className="w-6 h-6 text-white dark:text-black" />
                </div>
                <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                  NextGen<span className="font-light">Laws</span>
                </span>
              </a>
            </div>

            {/* Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 flex-1">
              {[
                { label: 'About', href: '#about' },
                { label: 'Events', href: '#upcoming-events' },
                { label: 'Community', href: '#community' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium uppercase tracking-widest hover:text-violet-400 transition-colors ${
                    scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Controls - Right */}
            <div className="flex items-center gap-4 justify-end flex-1">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-full transition-colors ${
                  scrolled 
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300' 
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 lg:hidden">
          <div className="flex flex-col gap-6 text-center">
            {[
              { label: 'About', href: '#about' },
              { label: 'Events', href: '#upcoming-events' },
              { label: 'Community', href: '#community' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-bold text-white uppercase tracking-widest hover:text-violet-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section - High Impact Immersive */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <img
            src="/group.jpg"
            alt="Legal Tech Revolution"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 sm:mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">Next Masterclass: Dec 5, 2025</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight uppercase mb-6 sm:mb-8 drop-shadow-2xl">
                Empower Your <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-purple-600">
                  Legal Future
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="h-12 sm:h-16 text-xl sm:text-2xl md:text-3xl text-white/90 font-medium mb-8 sm:mb-12 flex items-center justify-center gap-2">
                <span>Master</span>
                <Typewriter
                  text={["Legal Tech", "AI Drafting", "Automation", "Innovation"]}
                  speed={70}
                  waitTime={2000}
                  className="text-violet-400 font-bold border-b-2 border-violet-500"
                  cursorChar=" "
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-5 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-bold text-lg uppercase tracking-widest shadow-2xl shadow-violet-600/40 transition-all"
                >
                  Enroll Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-gray-100 text-black rounded-full font-bold text-lg uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5 fill-black" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md border-t border-white/10 hidden md:block"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-center items-center gap-12 lg:gap-24 divide-x divide-white/20">
              {[
                { label: "Professionals Trained", value: "25,000+" },
                { label: "Countries Reached", value: "100+" },
                { label: "Success Rate", value: "95%" },
                { label: "Partner Firms", value: "500+" }
              ].map((stat, i) => (
                <div key={i} className={`text-center ${i > 0 ? 'pl-12 lg:pl-24' : ''}`}>
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs font-bold text-white/60 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured In Strip - Premium Authority */}
      <section className="py-10 bg-gray-50 dark:bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
            Trusted by Legal Professionals From
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Microsoft', 'Google', 'Meta', 'Amazon', 'Adobe', 'Uber'].map((partner) => (
              <span key={partner} className="text-xl md:text-2xl font-black text-gray-800">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <AboutPlatform />
      
      <UpcomingEvents />

      {/* Events That Liberate Section (Past Events Redesign) */}
      <section className="py-20 sm:py-28 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-900/20 blur-3xl rounded-full transform translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-violet-600/20 border border-violet-500/50 text-violet-400 mb-6">
                <span className="text-xs sm:text-sm font-semibold">Global Impact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-8">
                Events That <span className="text-violet-500">Transform</span>
              </h2>
              <button className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-violet-400 transition-colors">
                View All Past Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI for Everyday Legal Work",
                loc: "London, UK",
                img: "/1.png",
                date: "OCT 2024",
                tag: "SOLD OUT"
              },
              {
                title: "Mastering Legal Tech Automation",
                loc: "New York, USA",
                img: "/2.png",
                date: "SEP 2024",
                tag: "VIRTUAL"
              },
              {
                title: "Future of Law Summit",
                loc: "Singapore",
                img: "/3.png",
                date: "AUG 2024",
                tag: "HYBRID"
              }
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 md:h-80 mb-6 overflow-hidden rounded-none">
                  <div className="absolute top-4 left-4 z-20 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {event.tag}
                  </div>
                  <img 
                    src={event.img} 
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex items-start justify-between border-b border-white/20 pb-6 group-hover:border-violet-500 transition-colors">
                  <div>
                    <div className="text-sm font-bold text-violet-400 mb-2 uppercase tracking-wider">{event.date} • {event.loc}</div>
                    <h3 className="text-2xl font-bold leading-tight group-hover:text-violet-300 transition-colors max-w-xs">
                      {event.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/50 group-hover:text-violet-400 transform -rotate-45 group-hover:rotate-0 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhoThisIsFor />

      {/* Success Stories - Premium Carousel Feel */}
      <section className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-6">
              NextGenLaws Equals <span className="text-violet-600">Results</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of legal professionals who have redefined their careers and firms through our transformative programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-violet-600 relative group"
              >
                <div className="absolute top-6 right-8 text-6xl font-serif text-gray-100 dark:text-gray-700 leading-none select-none">"</div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 mb-8 relative z-10 leading-relaxed">
                  {t.content}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-violet-100 dark:ring-violet-900">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white uppercase tracking-wide text-sm">{t.name}</div>
                    <div className="text-xs text-violet-600 dark:text-violet-400 font-medium">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
              Read More Success Stories
            </button>
          </div>
        </div>
      </section>

      <RealTransformations />

      {/* Pillars of Future Law Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
              Your Pathway <span className="text-gray-500">To Power</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {careerPaths.map((career, idx) => {
              const Icon = career.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-900 hover:bg-violet-900/20 p-6 border border-gray-800 hover:border-violet-500/50 transition-all cursor-pointer group"
                >
                  <Icon className="w-8 h-8 text-violet-500 mb-4 group-hover:text-white transition-colors" />
                  <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-violet-300 transition-colors">{career.title}</h3>
                  <div className="h-1 w-8 bg-gray-700 group-hover:bg-violet-500 transition-all mb-4" />
                  <p className="text-sm text-gray-400 leading-relaxed">{career.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <GlobalCommunity />
      <Footer />
    </div>
  );
}

export default App;
