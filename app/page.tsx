'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NextGenLawsLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const courses = [
    {
      title: 'AI for Legal Professionals',
      description:
        'Master AI tools to transform your legal practice in just 2 days',
      duration: '2 Days',
      mode: 'Live Online',
      students: '10,000+',
      rating: '4.9',
      image:
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600',
      badge: 'Most Popular',
      link: '/courses/ai-legal',
    },
    {
      title: 'DueDraft AI Masterclass',
      description:
        'Learn to use DueDraft.ai for contract automation and legal tech',
      duration: '2 Days',
      mode: 'Hybrid',
      students: '5,000+',
      rating: '4.8',
      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
      badge: 'New',
      link: '/courses/duedraft',
    },
    {
      title: 'Legal Tech Fundamentals',
      description:
        'Complete guide to modern legal technology and digital transformation',
      duration: '6 Weeks',
      mode: 'Self-Paced',
      students: '15,000+',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      link: '/courses/legal-tech',
    },
  ];

  const stats = [
    { number: '25,000+', label: 'Legal Professionals Trained', icon: Users },
    { number: '160+', label: 'Countries Reached', icon: Globe },
    { number: '4.9/5', label: 'Average Rating', icon: Star },
    { number: '95%', label: 'Career Advancement Rate', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description:
        'Cutting-edge AI tools and techniques designed specifically for legal professionals',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description:
        'Learn from top legal tech innovators and practicing attorneys',
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description:
        'Live sessions, recordings, and self-paced options to fit your schedule',
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description:
        'Earn recognized credentials that boost your professional profile',
    },
    {
      icon: Rocket,
      title: 'Career Growth',
      description:
        'Access exclusive job opportunities and career advancement resources',
    },
    {
      icon: MessageCircle,
      title: 'Community Support',
      description: '24/7 access to our global community of legal professionals',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Corporate Lawyer, Mumbai',
      content:
        'NextGenLaws transformed how I work. The AI tools I learned have made me 3x more efficient and my clients love the faster turnaround.',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Partner, Legal Firm',
      content:
        'The DueDraft course was a game-changer. Our firm now handles twice the workload with the same team size.',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100',
      rating: 5,
    },
    {
      name: 'Anjali Desai',
      role: 'Solo Practitioner',
      content:
        'As a solo lawyer, AI seemed overwhelming. NextGenLaws made it accessible and practical. My revenue increased by 40%.',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Grain Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.15] dark:opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-black/50 backdrop-blur-xl border-b border-gray-200 dark:border-white/20 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-violet-500 to-violet-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                NextGen
                <span className="text-violet-600 dark:text-violet-400">
                  Laws
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#courses"
                className="text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Courses
              </Link>
              <Link
                href="#about"
                className="text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Success Stories
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* CTA & Theme Toggle */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button className="hidden md:flex bg-violet-600 hover:bg-violet-700 text-white">
                Enroll Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/80 dark:bg-black/50 backdrop-blur-xl border-t border-gray-200 dark:border-white/20"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="#courses"
                className="block text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white"
              >
                Courses
              </Link>
              <Link
                href="#about"
                className="block text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white"
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="block text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white"
              >
                Success Stories
              </Link>
              <Link
                href="#contact"
                className="block text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white"
              >
                Contact
              </Link>
              <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                Enroll Now
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 left-20 w-96 h-96 bg-violet-300/30 dark:bg-violet-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-violet-300/30 dark:bg-violet-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-violet-100 dark:bg-violet-500/20 border-violet-400/50 text-violet-700 dark:text-violet-200 backdrop-blur-md">
                <Sparkles className="w-4 h-4 mr-2" />
                Transform Your Legal Career with AI
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              Master AI for Law
              <br />
              <span className="text-violet-600 dark:text-violet-400">
                In Just One Weekend
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join 25,000+ legal professionals who&apos;ve transformed their
              practice with AI. Stop watching from the sidelines-become the
              lawyer everyone turns to.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button
                size="lg"
                className="text-lg px-10 py-7 bg-violet-600 hover:bg-violet-700 text-white shadow-xl hover:scale-105 transition-all"
              >
                Browse Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 border-2 border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 backdrop-blur-sm hover:scale-105 transition-all"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-xl p-6 hover:border-violet-400/50 transition-all shadow-lg"
                  >
                    <Icon className="w-8 h-8 text-violet-600 dark:text-violet-400 mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-violet-600 dark:text-violet-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-slate-300 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-600 dark:text-slate-300" />
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 border-y border-gray-200 dark:border-white/20 bg-white/80 dark:bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-600 dark:text-slate-300 uppercase tracking-wider mb-8">
            Trusted by Legal Professionals from Leading Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {['Microsoft', 'Google', 'Meta', 'Amazon', 'Adobe', 'Uber'].map(
              (company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl font-bold"
                >
                  {company}
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-violet-100 dark:bg-violet-500/20 border-violet-400/50 text-violet-700 dark:text-violet-200">
              <Target className="w-4 h-4 mr-2" />
              Why NextGenLaws?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One Platform, Lifetime of{' '}
              <span className="text-violet-600 dark:text-violet-400">
                Legal AI Skills
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
              While others debate if AI will take their jobs, you&apos;ll learn
              to make AI work for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/20 hover:border-violet-400/50 transition-all shadow-lg">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-500 to-violet-700 flex items-center justify-center mb-5 shadow-lg"
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 dark:text-slate-300">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who is NextGenLaws For */}
      <div className="container mx-auto px-4 text-center mb-8">
        <Badge className="mb-4 bg-violet-100 dark:bg-violet-500/20 border-violet-400/50 text-violet-700 dark:text-violet-200">AI For All Professions</Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Who is NextGen<span className="text-violet-600 dark:text-violet-400">Laws</span> for?</h2>
      </div>
      <section className="relative overflow-hidden py-32 min-h-[460px]">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover"
            style={{ backgroundImage: `url('/group.jpg')`, backgroundPosition: 'center top' }}
          />
        </div>
        <div className="container mx-auto px-4 absolute inset-x-0 bottom-8 md:bottom-12 z-10">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <span className="px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm text-white bg-linear-to-b from-white/50 to-white/20 dark:from-white/15 dark:to-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-lg">Law students</span>
            <span className="px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm text-white bg-linear-to-b from-white/50 to-white/20 dark:from-white/15 dark:to-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-lg">Associates</span>
            <span className="px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm text-white bg-linear-to-b from-white/50 to-white/20 dark:from-white/15 dark:to-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-lg">Senior attorneys</span>
            <span className="px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm text-white bg-linear-to-b from-white/50 to-white/20 dark:from-white/15 dark:to-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-lg">Legal researchers</span>
            <span className="px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm text-white bg-linear-to-b from-white/50 to-white/20 dark:from-white/15 dark:to-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-lg">In-house counsel</span>
            <span className="px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm text-white bg-linear-to-b from-white/50 to-white/20 dark:from-white/15 dark:to-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-lg">Legal ops teams</span>
            <span className="px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm text-white bg-linear-to-b from-white/50 to-white/20 dark:from-white/15 dark:to-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-lg">Paralegals</span>
          </div
        >
        </div>
      </section>

      {/* Featured Courses Section */}
      <section
        id="courses"
        className="py-32 relative bg-white/80 dark:bg-black/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-violet-100 dark:bg-violet-500/20 border-violet-400/50 text-violet-700 dark:text-violet-200">
              <BookOpen className="w-4 h-4 mr-2" />
              Our Programs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-violet-600 dark:text-violet-400">
                Transform
              </span>{' '}
              Your Practice
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
              Intensive programs designed specifically for legal professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full pt-0 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/20 hover:border-violet-400/50 transition-all shadow-lg overflow-hidden group">
                  {/* Course Image */}
                  <div className="relative h-56 sm:h-56 md:h-60 overflow-hidden rounded-t-xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url('${course.image}')` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-transparent dark:from-black/60 to-transparent rounded-t-xl" />
                    {course.badge && (
                      <Badge className="absolute top-4 right-4 bg-violet-600 text-white border-none">
                        {course.badge}
                      </Badge>
                    )}
                  </div>

                  <CardHeader className="px-5 pt-4">
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-slate-300">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 p-5 pt-0">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                        <span className="text-gray-600 dark:text-slate-300">
                          {course.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                        <span className="text-gray-600 dark:text-slate-300">
                          {course.mode}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                        <span className="text-gray-600 dark:text-slate-300">
                          {course.students} enrolled
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-600 dark:text-slate-300">
                          {course.rating}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                      View Course
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10"
            >
              View All Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Background Image Section - Impact Statement */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/90 to-violet-100/85 dark:from-black/95 dark:via-black/90 dark:to-violet-900/85" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <Badge className="mb-6 bg-violet-100 dark:bg-violet-500/20 border-violet-400/50 backdrop-blur-md text-violet-700 dark:text-white">
                <TrendingUp className="w-4 h-4 mr-2" />
                The Future is AI-Powered
              </Badge>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-gray-900 dark:text-white">
                  While Others Debate if AI
                  <br />
                  Will Take Their Jobs,
                </span>
                <br />
                <span className="text-violet-600 dark:text-violet-400">
                  You&apos;ll Make AI Work For You
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl">
                This isn&apos;t theory. This isn&apos;t passive learning. This
                is hands-on training that delivers real transformation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Briefcase,
                    number: '₹2.5L+',
                    label: 'Avg. Monthly Income Increase',
                  },
                  {
                    icon: Clock,
                    number: '15+ Hours',
                    label: 'Saved Per Week Using AI',
                  },
                  {
                    icon: Users,
                    number: '25,000+',
                    label: 'Professionals Transformed',
                  },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-xl p-6 hover:border-violet-400/50 transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg bg-linear-to-br from-violet-500 to-violet-700 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-slate-300">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/80 dark:bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 bg-violet-100 dark:bg-violet-500/20 border-violet-400/50 text-violet-700 dark:text-violet-200">
              <Target className="w-4 h-4 mr-2" />
              How It Works
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold">A Simple <span style={{ color: '#8536f8' }}>3-Step</span> System</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: 'Step 1 — Choose Your Learning Path',
                desc:
                  'Browse curated pathways: AI Law, Legal Tech, Data Privacy, Compliance, Contract Automation, Digital Forensics. Personalized guidance matches your goals and experience.',
              },
              {
                icon: Briefcase,
                title: 'Step 2 — Learn Through Hands-On Case Studies',
                desc:
                  'Solve real-world scenarios with interactive, project-based courses. Use AI assistants, mock legal documents, and workflow builders to practice.',
              },
              {
                icon: Award,
                title:
                  'Step 3 — Earn Your Certification & Build AI Legal Workflows',
                desc:
                  'Gain industry-recognized certificates and a portfolio of automation workflows and legal templates. Show proven competency and unlock career outcomes.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/20 hover:border-violet-400/50 transition-all shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-linear-to-br from-violet-500 to-violet-700 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 dark:text-slate-300">
                        {item.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-violet-100 dark:bg-violet-500/20 border-violet-400/50 text-violet-700 dark:text-violet-200">
              <Star className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Lawyers.{' '}
              <span className="text-violet-600 dark:text-violet-400">
                Real Results.
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
              Hear from legal professionals who transformed their practice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/20 hover:border-violet-400/50 transition-all shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${testimonial.avatar}')`,
                        }}
                      />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-slate-300">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative bg-white/80 dark:bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/20 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-violet-200/30 to-violet-100/30 dark:from-violet-600/10 dark:to-violet-400/10" />
              <CardContent className="relative z-10 py-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your
                  <br />
                  <span className="text-violet-600 dark:text-violet-400">
                    Legal Career?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
                  Join 25,000+ legal professionals already leveraging AI
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="text-lg px-12 py-7 bg-violet-600 hover:bg-violet-700 text-white shadow-xl hover:scale-105 transition-all"
                  >
                    Browse Courses
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-12 py-7 border-2 border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10"
                  >
                    Talk to Advisor
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-500 to-violet-700 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">
                    NextGen
                    <span className="text-violet-600 dark:text-violet-400">
                      Laws
                    </span>
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-slate-300">
                  Empowering legal professionals to master AI and transform
                  their careers.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Programs</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-violet-500 transition-colors"
                    >
                      AI for Legal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-violet-500 transition-colors"
                    >
                      DueDraft Masterclass
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-violet-500 transition-colors"
                    >
                      Legal Tech
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-violet-500 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-violet-500 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-violet-500 transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-violet-500 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-violet-500 transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-violet-500 transition-colors"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-200 dark:border-white/20 text-center text-sm text-gray-600 dark:text-slate-300">
              <p>© 2025 NextGenLaws. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
