'use client'

import { useState, useEffect } from 'react';
import {
  Sparkles,
  Award,
  Users,
  TrendingUp,
  BookOpen,
  Clock,
  Target,
  ArrowRight,
  Star,
  Scale,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Shield,
  Zap,
  Code,
  Building2,
  Moon,
  Sun,
  BookOpenText,
  Medal,
} from 'lucide-react';
import { motion } from 'framer-motion';
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
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerWidth >= 768 ? 1200 : 750; // md:h-[1200px] : h-[750px]
      const scrollPosition = window.scrollY;
      
      setScrolled(scrollPosition > 20);
      setIsInHero(scrollPosition < heroHeight - 100); // 100px buffer before end of hero
    };
    
    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dark mode - ensure light mode is default
  useEffect(() => {
    // Remove dark class on initial load to ensure light mode
    document.documentElement.classList.remove('dark');
    
    // Check for saved preference, but default to light mode
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

  const courses = [
    {
      title: 'AI for Legal Professionals',
      description: 'Master AI tools to transform your legal practice in just 2 days',
      duration: '2 Days',
      mode: 'Live Online',
      students: '10,000+',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600',
      badge: 'Most Popular',
    },
    {
      title: 'DueDraft AI Masterclass',
      description: 'Learn to use DueDraft.ai for contract automation and legal tech',
      duration: '2 Days',
      mode: 'Hybrid',
      students: '5,000+',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
      badge: 'New',
    },
    {
      title: 'Legal Tech Fundamentals',
      description: 'Complete guide to modern legal technology and digital transformation',
      duration: '6 Weeks',
      mode: 'Self-Paced',
      students: '15,000+',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    },
  ];

  const modules = [
    { number: '01', title: 'AI Basics for Lawyers', duration: '4 hours' },
    { number: '02', title: 'Prompt Engineering for Law', duration: '6 hours' },
    { number: '03', title: 'Contract Drafting Automation', duration: '8 hours' },
    { number: '04', title: 'Legal Research with AI', duration: '6 hours' },
    { number: '05', title: 'Legal Ethics & Safety', duration: '4 hours' },
    { number: '06', title: 'Litigation & Compliance Workflows', duration: '8 hours' },
    { number: '07', title: 'Real Projects & Hands-on Labs', duration: '12 hours' },
  ];


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
      content: 'NextGenLaws transformed how I work. The AI tools I learned have made me 3x more efficient and my clients love the faster turnaround.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Partner, Legal Firm',
      content: 'The DueDraft course was a game-changer. Our firm now handles twice the workload with the same team size.',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100',
      rating: 5,
    },
    {
      name: 'Anjali Desai',
      role: 'Solo Practitioner',
      content: 'As a solo lawyer, AI seemed overwhelming. NextGenLaws made it accessible and practical. My revenue increased by 40%.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100',
      rating: 5,
    },
    {
      name: 'Neha Kapoor',
      role: 'In-House Counsel, Bengaluru',
      content: 'Automated NDAs and vendor contracts—turnaround dropped from days to hours.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'Compliance Manager, Pune',
      content: 'Built an AI policy tracker; audit prep time fell from 2 weeks to 3 days.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      rating: 5,
    },
    {
      name: 'Sara Iqbal',
      role: 'Law Student, Hyderabad',
      content: 'Showcased an AI research workflow from the course and landed an internship.',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100',
      rating: 5,
    },
    {
      name: 'Rohan Gupta',
      role: 'Senior Counsel, Chennai',
      content: 'Integrated AI into pleadings—faster case strategy and better outcomes.',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100',
      rating: 5,
    },
    {
      name: 'Meera Nair',
      role: 'Legal Researcher, Kochi',
      content: 'Summarization tools saved 15 hours per week on case digests.',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100',
      rating: 5,
    },
    {
      name: 'Tanya Bose',
      role: 'Corporate Counsel, Kolkata',
      content: 'Implemented AI playbooks—cross‑functional teams adopted them quickly.',
      avatar: 'https://images.unsplash.com/photo-1548142813-c804b9048e42?w=100',
      rating: 5,
    },
  ];


  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-violet-600 to-violet-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <span className={`text-2xl font-bold transition-colors ${
                isInHero ? 'text-white' : 'text-gray-900 dark:text-white'
              }`}>
                NextGen<span className={`transition-colors ${
                  isInHero ? 'text-violet-300' : 'text-violet-600 dark:text-violet-400'
                }`}>Laws</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className={`transition-colors ${
                isInHero 
                  ? 'text-white/90 hover:text-violet-300' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'
              }`}>
                About
              </a>
              <a href="#upcoming-events" className={`transition-colors ${
                isInHero 
                  ? 'text-white/90 hover:text-violet-300' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'
              }`}>
                Upcoming Events
              </a>
              <a href="#testimonials" className={`transition-colors ${
                isInHero 
                  ? 'text-white/90 hover:text-violet-300' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400'
              }`}>
                Success Stories
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  isInHero 
                    ? 'text-white hover:bg-white/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-all hover:scale-105 font-medium">
                Enroll Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isInHero 
                    ? 'text-white hover:bg-white/20' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden backdrop-blur-xl border-t transition-colors ${
            isInHero
              ? 'bg-black/80 border-white/20'
              : 'bg-white/95 dark:bg-gray-950/95 border-gray-200 dark:border-gray-800'
          }`}>
            <div className="container mx-auto px-4 py-6 space-y-4">
              <a href="#about" className={`block transition-colors ${
                isInHero 
                  ? 'text-white/90 hover:text-violet-300' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-violet-600'
              }`}>
                About
              </a>
              <a href="#upcoming-events" className={`block transition-colors ${
                isInHero 
                  ? 'text-white/90 hover:text-violet-300' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-violet-600'
              }`}>
                Upcoming Events
              </a>
              <a href="#testimonials" className={`block transition-colors ${
                isInHero 
                  ? 'text-white/90 hover:text-violet-300' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-violet-600'
              }`}>
                Success Stories
              </a>
              <button className="w-full px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg">
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative h-[750px] md:h-[1200px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/group.jpg"
            alt="Legal Tech Team"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 35%' }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60 dark:bg-black/75" />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white mb-4 sm:mb-6"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-xs font-medium text-center">Trusted by 25,000+ Legal Professionals Globally</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight text-white px-2"
            >
              Empowering the World Through
              <br className="hidden sm:block" />
              <span className="sm:inline"> </span>
              <span className="bg-linear-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block">
                Legal Tech{" "}
                <Typewriter
                  text={[
                    "Workshops",
                    "Training",
                    "Masterclasses",
                    "Education",
                    "Programs"
                  ]}
                  speed={80}
                  waitTime={2000}
                  deleteSpeed={50}
                  loop={true}
                  showCursor={true}
                  cursorChar="_"
                  className="bg-linear-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Delivering world-class legal tech education to learners across 100+ countries
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-col lg:flex-row gap-3 sm:gap-4 items-center justify-center mb-6 sm:mb-8 px-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-lg font-semibold text-sm sm:text-base shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                Join DueDraft Masterclass
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Countdown Timer */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 sm:px-4 py-2 w-full sm:w-auto">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 block mb-0.5 text-center">
                  Next Masterclass Starts In
                </span>
                <span className="font-mono text-xs sm:text-base font-bold text-white block text-center">
                  3 DAYS : 21 HRS : 04 MIN
                </span>
              </div>
            </motion.div>

            {/* Statistics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto px-2"
            >
              {[
                { number: '07+', label: 'Workshops', icon: BookOpenText },
                { number: '25K+', label: 'Students', icon: Users },
                { number: '4.9/5', label: 'Rating', icon: Star },
                { number: '95%', label: 'Success Rate', icon: TrendingUp },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 sm:p-3 text-center hover:bg-white/15 transition-all"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400 mx-auto mb-1" />
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5">
                      {stat.number}
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/70 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-16 border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6 sm:mb-8 px-2"
          >
            TRUSTED BY LEGAL PROFESSIONALS FROM LEADING ORGANIZATIONS
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {['Microsoft', 'Google', 'Meta', 'Amazon', 'Adobe', 'Uber'].map((partner, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-400 dark:text-gray-600 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <AboutPlatform />
      <UpcomingEvents />

      {/* Past Events Section */}
      <section className="py-12 sm:py-16 md:py-20 relative bg-white dark:bg-gray-950 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-violet-100/30 dark:bg-violet-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-violet-100/20 dark:bg-violet-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-4 sm:mb-6 shadow-sm"
            >
              <Medal className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Achievements</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
              Past <span className="text-violet-600 dark:text-violet-400">Events</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Highlights from the legal-tech events and training we've successfully delivered worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'AI for Everyday Legal Work: Practical Tools for Lawyers',
                img: '/1.png',
                time: '10 hours',
                rating: '4.9',
                participants: '240+',
                desc: 'Practical tools to streamline everyday legal work with AI.',
                badge: 'Most Popular',
              },
              {
                title: 'Mastering Legal Tech: From Manual Tasks to Smart Automation',
                img: '/2.png',
                time: '06 hours',
                rating: '4.5',
                participants: '300+',
                desc: 'Turn manual tasks into smart automation across legal workflows.',
                badge: 'Trending',
              },
              {
                title: 'How Lawyers Can Leverage AI for Research, Drafting & Compliance',
                img: '/3.png',
                time: '4.5 hours',
                rating: '4.9',
                participants: '1500+',
                desc: 'Leverage AI for faster research, stronger drafting, and compliance.',
                badge: 'Best Rated',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 bg-white dark:bg-gray-900 h-[420px] sm:h-[450px] md:h-[480px] hover:shadow-2xl hover:shadow-violet-500/10 dark:hover:shadow-violet-500/20 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-90 dark:opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Enhanced Gradient Overlay - Reduced opacity */}
                  <div className="absolute inset-0 bg-linear-to-br from-violet-900/50 via-violet-700/45 to-violet-600/40 dark:from-violet-950/60 dark:via-violet-900/55 dark:to-violet-800/50" />
                  
                  {/* Animated gradient accent - Reduced opacity */}
                  <motion.div
                    animate={{
                      background: [
                        'radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
                        'radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
                        'radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
                      ],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between text-white">
                  {/* Top Section - Badge */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 text-[10px] sm:text-xs font-semibold shadow-lg"
                    >
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      {item.badge}
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center"
                    >
                      <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                  </div>

                  {/* Middle Section - Title & Description */}
                  <div className="flex-1 flex flex-col justify-center mt-3 sm:mt-4">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-tight group-hover:text-violet-100 transition-colors"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-xs sm:text-sm md:text-base text-white/90 dark:text-white/80 leading-relaxed mb-4 sm:mb-6"
                    >
                      {item.desc}
                    </motion.p>
                  </div>

                  {/* Bottom Section - Stats */}
                  <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-white/20">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex flex-col items-center gap-1 sm:gap-1.5 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-lg px-2 sm:px-3 py-2 sm:py-2.5 border border-white/20"
                      >
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-violet-200" />
                        <span className="text-[10px] sm:text-xs font-semibold">{item.time}</span>
                        <span className="text-[8px] sm:text-[10px] text-white/60">Duration</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex flex-col items-center gap-1 sm:gap-1.5 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-lg px-2 sm:px-3 py-2 sm:py-2.5 border border-white/20"
                      >
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-[10px] sm:text-xs font-semibold">{item.rating}</span>
                        <span className="text-[8px] sm:text-[10px] text-white/60">Rating</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex flex-col items-center gap-1 sm:gap-1.5 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-lg px-2 sm:px-3 py-2 sm:py-2.5 border border-white/20"
                      >
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-violet-200" />
                        <span className="text-[10px] sm:text-xs font-semibold">{item.participants}</span>
                        <span className="text-[8px] sm:text-[10px] text-white/60">Attended</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
                  style={{ width: '200%' }}
                />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhoThisIsFor />

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-950"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-4 sm:mb-6"
            >
              <Target className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">How It Works</span>
            </motion.div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">How It Works</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2 px-4">
              Join a masterclass, complete the class material, and get a job or secure an internship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: GraduationCap,
                number: '01',
                title: 'Join a Masterclass',
                desc: 'Sign up and join a live or hybrid masterclass to kickstart your journey.',
              },
              {
                icon: BookOpen,
                number: '02',
                title: 'Complete the Material',
                desc: 'Finish the lessons, projects, and assessments to build real skills.',
              },
              {
                icon: Briefcase,
                number: '03',
                title: 'Get a Job or Internship',
                desc: 'Leverage your skills to get a job, become an intern, or secure an internship.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative"
                >
                  <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-7 md:p-8 hover:border-violet-400/50 hover:shadow-lg transition-all h-full">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-violet-600 to-violet-800 flex items-center justify-center text-white font-bold text-base sm:text-lg"
                    >
                      {item.number}
                    </motion.div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br from-violet-600 to-violet-800 flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="testimonials"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-16 md:py-20 bg-linear-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-4 sm:mb-6"
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Real People, Real Results</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Success <span className="text-violet-600 dark:text-violet-400">Stories</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Hear from legal professionals who transformed their practice
            </p>
          </motion.div>

          <div className="relative overflow-hidden w-screen mx-[calc(50%-50vw)] mb-12 sm:mb-16">
            <motion.div
              className="flex gap-3 sm:gap-4 md:gap-6"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-violet-400/50 hover:shadow-lg transition-all min-w-[280px] sm:min-w-[350px] md:min-w-[420px] max-w-[280px] sm:max-w-[350px] md:max-w-[420px] flex-none"
                >
                  <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-5 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img src={testimonial.avatar} onError={(e)=>{e.currentTarget.src='https://i.pravatar.cc/100';}} loading="lazy" alt={testimonial.name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" />
                    <div>
                      <div className="text-sm sm:text-base font-semibold">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <RealTransformations />

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-16 md:py-20 bg-linear-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-4 sm:mb-6"
            >
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Career Outcomes</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Your Future <span className="text-violet-600 dark:text-violet-400">Career Paths</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
            {careerPaths.map((career, index) => {
              const Icon = career.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 sm:p-6 hover:border-violet-400/50 hover:shadow-lg transition-all text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br from-violet-600 to-violet-800 flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  <h3 className="text-sm sm:text-base font-bold mb-1.5 sm:mb-2">{career.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{career.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <GlobalCommunity />

      <Footer />
    </div>
  );
}

export default App;
