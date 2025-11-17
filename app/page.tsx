'use client'

import { useState, useEffect } from 'react';
import {
  Sparkles,
  Award,
  Users,
  TrendingUp,
  BookOpen,
  ChevronDown,
  Play,
  Clock,
  Target,
  ArrowRight,
  Star,
  Globe,
  Rocket,
  Scale,
  Brain,
  Menu,
  X,
  Briefcase,
  Video,
  MessageCircle,
  CheckCircle2,
  Download,
  FileText,
  GraduationCap,
  Lightbulb,
  Shield,
  Zap,
  Code,
  Search,
  BarChart3,
  Building2,
  Moon,
  Sun,
  BookOpenText,
  Medal,
} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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

  const personas = [
    { title: 'Law Students', benefit: 'Get ahead with cutting-edge AI skills before graduation' },
    { title: 'Associates', benefit: 'Work smarter and advance faster in your firm' },
    { title: 'Senior Attorneys', benefit: 'Lead digital transformation and stay competitive' },
    { title: 'Legal Researchers', benefit: 'Automate research and uncover insights 10x faster' },
    { title: 'In-House Counsel', benefit: 'Streamline compliance and contract management' },
    { title: 'Legal Ops Teams', benefit: 'Build efficient workflows and reduce costs' },
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
      name: 'Arjun Mehta',
      role: 'Litigation Associate, Delhi',
      content: 'Used AI drafting checklists to cut review cycles by 60% and reduce errors.',
      avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb7a60?w=100',
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
      name: 'Karan Verma',
      role: 'Boutique Firm Owner, Jaipur',
      content: 'Scaled without hiring—now handle 2x matters with the same team.',
      avatar: 'https://i.pravatar.cc/100?img=12',
      rating: 5,
    },
    {
      name: 'Aisha Khan',
      role: 'Family Lawyer, Lucknow',
      content: 'Client communication templates improved satisfaction and retention.',
      avatar: 'https://i.pravatar.cc/100?img=49',
      rating: 5,
    },
    {
      name: 'Dev Patel',
      role: 'IP Attorney, Ahmedabad',
      content: 'Drafted patent responses with AI; reduced office action turnaround by 50%.',
      avatar: 'https://i.pravatar.cc/100?img=5',
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

  const caseStudies = [
    {
      name: 'Amanda Chen',
      role: 'Senior Associate',
      before: 'Spending 20+ hours weekly on contract review',
      after: 'Reduced contract review time by 70% using AI tools',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Legal Intern',
      before: 'Limited hands-on experience with legal tech',
      after: 'Built a compliance AI tool adopted by entire firm',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      name: 'Sarah Thompson',
      role: 'In-House Counsel',
      before: 'Manual tracking of regulatory changes',
      after: 'Automated compliance monitoring saving 15 hours/week',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
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
              <span className="text-2xl font-bold">
                NextGen<span className="text-violet-600 dark:text-violet-400">Laws</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#courses" className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                Courses
              </a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                Success Stories
              </a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                Pricing
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-all hover:scale-105 font-medium">
                Enroll Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <a href="#courses" className="block text-gray-600 dark:text-gray-300 hover:text-violet-600">
                Courses
              </a>
              <a href="#about" className="block text-gray-600 dark:text-gray-300 hover:text-violet-600">
                About
              </a>
              <a href="#testimonials" className="block text-gray-600 dark:text-gray-300 hover:text-violet-600">
                Success Stories
              </a>
              <a href="#pricing" className="block text-gray-600 dark:text-gray-300 hover:text-violet-600">
                Pricing
              </a>
              <button className="w-full px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg">
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-linear-to-b from-violet-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-violet-200/30 dark:bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-300/20 dark:bg-violet-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 25,000+ Legal Professionals Globally</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Empowering the World Through
              <br />
              <span className="text-violet-600 dark:text-violet-400">Legal Tech Workshops</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Delivering world-class legal tech education to 25,000+ learners across 100+ countries</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="text-lg px-10 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg shadow-lg hover:scale-105 transition-all font-medium">
                Join DueDraft Masterclass
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <div className="hidden sm:block h-13 w-px bg-gray-300 dark:bg-white/20 mx-2" />
              <div className="flex flex-col items-start sm:items-start">
                <span className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">Next Mastermind Starts In</span>
                <span className="font-mono text-lg md:text-xl font-semibold mt-1 text-violet-700 dark:text-violet-300">3 DAYS : 21 HOURS : 04</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { number: '07+', label: 'Workshops Conducted', icon: BookOpenText },
                { number: '25000+', label: 'Students Impacted', icon: Users },
                { number: '4.9/5', label: 'Average Rating', icon: Star },
                { number: '95%', label: 'Career Advancement', icon: TrendingUp },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-violet-400/50 hover:shadow-lg transition-all"
                  >
                    <Icon className="w-8 h-8 text-violet-600 dark:text-violet-400 mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      <section className="py-16 border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
            TRUSTED BY LEGAL PROFESSIONALS FROM LEADING ORGANIZATIONS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {['Microsoft', 'Google', 'Meta', 'Amazon', 'Adobe', 'Uber'].map((partner, index) => (
              <div key={index} className="text-xl md:text-2xl font-bold text-gray-400 dark:text-gray-600 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">About the Platform</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why This <span className="text-violet-600 dark:text-violet-400">Community</span> Exists
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Legal AI is reshaping the future of law yet only 02% of legal professionals use it today. NextGenLaws exists to bridge that gap by helping you understand, adopt, and master legal tech and AI for your daily workflow. From drafting to research to automation, we empower you to stay ahead, not behind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Brain, title: 'AI-Driven Legal Training', desc: 'Learn how to use real-world AI tools built for modern legal practice' },
              { icon: Users, title: 'Guided by Legal Tech Experts', desc: 'Insights from practitioners who actively use AI in global legal workflows' },
              { icon: Clock, title: 'Learn Your Way', desc: 'Live workshops, replays, and flexible self-paced modules designed for busy legal professionals' },
              { icon: Award, title: 'Globally Recognized Certification', desc: 'Earn credentials that signal your AI-readiness to employers and clients' },
              { icon: Rocket, title: 'Career Acceleration', desc: 'Unlock opportunities in legal ops, legal tech, and AI-powered practice' },
              { icon: MessageCircle, title: 'Global Legal Tech Community', desc: 'Connect with peers, mentors, and innovators adopting AI across 100+ countries.' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-violet-400/50 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-600 to-violet-800 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-6">
              <Medal className="w-4 h-4" />
              <span className="text-sm font-medium">Achievements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Past <span className="text-violet-600 dark:text-violet-400">Events</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Highlights from the legal-tech events and training we've successfully delivered worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'AI for Everyday Legal Work: Practical Tools for Lawyers',
                img: '/1.png',
                time: '10 hours',
                rating: '4.9',
                participants: '240+',
                desc: 'Practical tools to streamline everyday legal work with AI.',
              },
              {
                title: 'Mastering Legal Tech: From Manual Tasks to Smart Automation',
                img: '/2.png',
                time: '06 hours',
                rating: '4.5',
                participants: '300+',
                desc: 'Turn manual tasks into smart automation across legal workflows.',
              },
              {
                title: 'How Lawyers Can Leverage AI for Research, Drafting & Compliance',
                img: '/3.png',
                time: '4.5 hours',
                rating: '4.9',
                participants: '1500+',
                desc: 'Leverage AI for faster research, stronger drafting, and compliance.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-black/60 dark:bg-gray-900 h-[420px] hover:shadow-2xl transition-all"
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0">
                  <div
                    className="h-full w-full bg-linear-to-tr from-violet-900/80 via-violet-600/40 to-transparent"
                    style={{ clipPath: 'polygon(0 0, 70% 0, 45% 100%, 0 100%)' }}
                  />
                </div>
                <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
                  <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{item.desc}</p>
                  <div className="mt-4 flex items-center gap-5 text-xs">
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{item.time}</span></div>
                    <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /><span>{item.rating}</span></div>
                    <div className="flex items-center gap-2"><Users className="w-4 h-4" /><span>{item.participants}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-linear-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Who This Is For</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perfect for <span className="text-violet-600 dark:text-violet-400">Every Legal Professional</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {personas.map((persona, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-violet-400/50 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{persona.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{persona.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">How It Works</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">How It Works</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              Join a masterclass, complete the class material, and get a job or secure an internship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <div key={index} className="relative">
                  <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-violet-400/50 hover:shadow-lg transition-all h-full">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-linear-to-br from-violet-600 to-violet-800 flex items-center justify-center text-white font-bold text-lg">
                      {item.number}
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-violet-600 to-violet-800 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-6">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Real People, Real Results</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success <span className="text-violet-600 dark:text-violet-400">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from legal professionals who transformed their practice
            </p>
          </div>

          <div className="relative overflow-hidden w-screen mx-[calc(50%-50vw)] mb-16">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-violet-400/50 hover:shadow-lg transition-all min-w-[420px] max-w-[420px] flex-none"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.avatar} onError={(e)=>{e.currentTarget.src='https://i.pravatar.cc/100';}} loading="lazy" alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-linear-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Before & After</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real <span className="text-violet-600 dark:text-violet-400">Transformations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all">
                <img src={study.image} alt={study.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={study.image} alt={study.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h3 className="font-bold">{study.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{study.role}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">{study.before}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{study.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-6">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm font-medium">Career Outcomes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Future <span className="text-violet-600 dark:text-violet-400">Career Paths</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {careerPaths.map((career, index) => {
              const Icon = career.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-violet-400/50 hover:shadow-lg transition-all text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-violet-600 to-violet-800 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{career.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{career.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-linear-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Global Community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-violet-600 dark:text-violet-400">Worldwide Network</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">20,000+</div>
                <p className="text-gray-600 dark:text-gray-400">Active Community Members</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">160+</div>
                <p className="text-gray-600 dark:text-gray-400">Countries Represented</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">100+</div>
                <p className="text-gray-600 dark:text-gray-400">Monthly Events & Meetups</p>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
              <h3 className="text-xl font-bold mb-4 text-center">Community Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Private Discord community',
                  'Monthly networking events',
                  'Career mentorship programs',
                  'Job board access',
                  'Peer learning groups',
                  'Industry expert webinars',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Free Resources</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Learning <span className="text-violet-600 dark:text-violet-400">Today</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: FileText, title: 'Legal AI Basics PDF', desc: 'Free comprehensive guide' },
              { icon: Code, title: 'Prompt Library', desc: '50+ ready-to-use prompts' },
              { icon: BookOpen, title: 'Blog Articles', desc: 'Weekly insights & tips' },
              { icon: Play, title: 'Sample Lesson', desc: 'Try before you buy' },
            ].map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-violet-400/50 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-lg bg-linear-to-br from-violet-600 to-violet-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{resource.desc}</p>
                  <button className="text-violet-600 dark:text-violet-400 text-sm font-medium flex items-center gap-2">
                    Download Free <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <section className="py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-linear-to-r from-violet-600 to-violet-800 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Start Your Legal AI Journey Today
                </h2>
                <p className="text-xl mb-10 text-violet-100">
                  Empower your legal career with the skills of tomorrow
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="text-lg px-12 py-4 bg-white text-violet-600 hover:bg-gray-100 rounded-lg font-medium transition-all hover:scale-105">
                    Enroll Now
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-violet-800 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">
                    NextGen<span className="text-violet-600 dark:text-violet-400">Laws</span>
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Empowering legal professionals to master AI and transform their careers.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Programs</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="hover:text-violet-600 transition-colors">AI for Legal</a></li>
                  <li><a href="#" className="hover:text-violet-600 transition-colors">DueDraft Masterclass</a></li>
                  <li><a href="#" className="hover:text-violet-600 transition-colors">Legal Tech</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="hover:text-violet-600 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-violet-600 transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-violet-600 transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="hover:text-violet-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-violet-600 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-violet-600 transition-colors">Refund Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
              <p>© 2025 NextGenLaws. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
