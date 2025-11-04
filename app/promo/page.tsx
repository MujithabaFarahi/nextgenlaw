'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Sparkles,
  Award,
  Video,
  Scale,
  Users,
  TrendingUp,
  Shield,
  CheckCircle2,
  Gift,
  BookOpen,
  Briefcase,
  ChevronDown,
  Play,
  Clock,
  BarChart3,
  Zap,
  Target,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  Star,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Laptop,
  Code,
  FileText,
  Lightbulb,
  Rocket,
  Brain,
  Cpu,
  Building2,
  Globe,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { useState, useRef } from 'react';

export default function PromoPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const features = [
    {
      icon: TrendingUp,
      title: 'Viral LinkedIn Mastery',
      description:
        'Learn the exact framework used by top creators to craft posts that consistently generate 10K+ impressions and meaningful engagement.',
    },
    {
      icon: Video,
      title: '2-Day Live Intensive Workshop',
      description:
        'Immersive, hands-on sessions with real-time Q&A, practical exercises, and live demonstrations of AI tools in action.',
    },
    {
      icon: Award,
      title: 'Industry-Recognized Certificate',
      description:
        'Stand out with a professional certificate of completion that validates your AI expertise to employers and clients.',
    },
    {
      icon: Clock,
      title: 'Lifetime Recording Access',
      description:
        'Never miss a detail. Revisit any session, anytime, anywhere with permanent access to all workshop recordings.',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Learning Resources',
      description:
        '20-page detailed PDF notes covering every concept, plus exclusive access to preview the first 5 pages before enrollment.',
    },
    {
      icon: Scale,
      title: '35+ Ready-to-Use Templates',
      description:
        'Legal contracts, AI prompts, content frameworks, and more - save hundreds of hours with our battle-tested templates.',
    },
  ];

  const skillsYouWillLearn = [
    {
      icon: Brain,
      title: 'Master AI Fundamentals',
      description: 'Understand LLMs, neural networks, and how AI really works',
    },
    {
      icon: Code,
      title: 'Build Custom AI Tools',
      description: 'Create GPTs and AI applications tailored to your needs',
    },
    {
      icon: Zap,
      title: 'Automate Legal Workflows',
      description: 'Save hours daily with AI-powered automation systems',
    },
    {
      icon: FileText,
      title: 'Draft Contracts with AI',
      description: 'Generate professional legal documents in minutes',
    },
    {
      icon: Lightbulb,
      title: 'Advanced Prompt Engineering',
      description: 'Get 10x better outputs from AI with proven techniques',
    },
    {
      icon: Rocket,
      title: 'AI-Powered Research',
      description: 'Analyze cases and precedents at lightning speed',
    },
  ];

  const premiumBenefits = [
    {
      icon: Zap,
      text: 'Advanced AI content generation with GPT-4 integration',
    },
    { icon: Users, text: 'Priority support with 24/7 expert assistance' },
    {
      icon: Target,
      text: 'Unlimited access to premium templates and workflows',
    },
    {
      icon: BarChart3,
      text: 'Analytics dashboard to track your content performance',
    },
    { icon: Shield, text: 'Enterprise-grade security and data privacy' },
    { icon: Briefcase, text: 'Team collaboration tools for group projects' },
  ];

  const learningPath = [
    {
      day: 'Day 1',
      title: 'AI Fundamentals & Legal Applications',
      timing: '11 AM - 7 PM IST',
      topics: [
        'Understanding LLMs and Neural Networks for Legal Work',
        'The MAGIC PROMPT Formula for Legal Documents',
        'AI-Powered Contract Analysis and Drafting',
        'Live hands-on exercises with ChatGPT & Claude',
      ],
    },
    {
      day: 'Day 2',
      title: 'Advanced Implementation & Automation',
      timing: '11 AM - 5 PM IST',
      topics: [
        'Building Custom Legal AI Assistants',
        'Automating Legal Research and Case Analysis',
        'No-Code AI Workflow Automation',
        'Final assessment and certification',
      ],
    },
  ];

  const workshopDetails = [
    {
      icon: Calendar,
      label: 'Start Date',
      value: '08 Nov 2025',
    },
    {
      icon: Clock,
      label: 'Start Time',
      value: '10 AM IST',
    },
    {
      icon: Laptop,
      label: 'Mode',
      value: 'Online Live',
    },
    {
      icon: Users,
      label: 'Seats Left',
      value: 'Only 47',
    },
  ];

  const partners = [
    { name: 'Google', logo: '🔍' },
    { name: 'Microsoft', logo: '🪟' },
    { name: 'OpenAI', logo: '🤖' },
    { name: 'Anthropic', logo: '🧠' },
    { name: 'Meta', logo: '📘' },
    { name: 'Amazon', logo: '📦' },
  ];

  const testimonials = [
    {
      name: 'Advocate Priya Mehta',
      role: 'Corporate Lawyer, Mumbai',
      content:
        'This workshop transformed my practice. I now draft contracts 5x faster and my clients are amazed by the quality. The AI tools have made me irreplaceable in my firm.',
      avatar: '👩‍⚖️',
      rating: 5,
    },
    {
      name: 'Rahul Sharma, Esq.',
      role: 'Solo Practitioner',
      content:
        'As a solo lawyer, AI has been a game-changer. I can now compete with big firms. My monthly earnings increased by ₹2 lakhs after implementing these strategies.',
      avatar: '👨‍💼',
      rating: 5,
    },
    {
      name: 'Anjali Desai',
      role: 'Legal Consultant',
      content:
        'I was skeptical about AI replacing legal work. This workshop showed me AI is a tool that amplifies my expertise. Now I handle 3x more clients with better quality.',
      avatar: '👩‍💻',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'Do I need any technical background to join this workshop?',
      answer:
        'Absolutely not! This workshop is designed for legal professionals with zero technical background. We start from the basics and build up gradually. If you can use WhatsApp and Google, you can master these AI tools.',
    },
    {
      question: 'What is the 1% selection rate for internships/jobs?',
      answer:
        'After completing the workshop, top performers (based on assessment scores, participation, and project quality) will be eligible for exclusive opportunities with law firms and legal tech companies. Only the top 1% receive direct placement opportunities.',
    },
    {
      question: 'How does the 100% money-back guarantee work?',
      answer:
        "If you're not satisfied with the workshop within the first 24 hours, simply request a refund and we'll process it immediately - no questions asked. We're confident you'll find immense value.",
    },
    {
      question: 'When can I access the DueDraft Premium subscription?',
      answer:
        "Your 3-month DueDraft Premium subscription (worth ₹15,000) activates immediately upon enrollment. You'll receive login credentials via email within 24 hours.",
    },
    {
      question: 'Are the recordings available immediately after each session?',
      answer:
        "Yes! Recordings are processed and made available within 2 hours of each session ending. You'll have lifetime access, so you can revisit any concept whenever needed.",
    },
    {
      question: 'What AI tools will I learn to use?',
      answer:
        "You'll master ChatGPT, Claude, Midjourney, Make.com for automation, and 15+ other AI tools specifically useful for legal professionals. We provide access to premium versions during the workshop.",
    },
    {
      question: 'Can I really earn ₹1-3 lakhs per month using AI?',
      answer:
        'Yes! Many of our alumni have achieved this by: (1) Offering AI-powered legal services at premium rates, (2) Taking on more clients due to increased efficiency, (3) Consulting other lawyers on AI implementation. We share exact strategies in the workshop.',
    },
    {
      question: 'Will I receive a certificate?',
      answer:
        'Yes! Upon successful completion and assessment, you\'ll receive an industry-recognized "AI for Legal Professionals" certificate that you can showcase on LinkedIn and your resume.',
    },
  ];

  const speakers = [
    {
      name: 'Advocate Vaibhav Sisinty',
      role: 'Legal Tech Innovation Lead',
      bio: 'LinkedIn Top Voice with 500K+ followers. Helped 10,000+ legal professionals master AI tools. Former corporate lawyer at top law firms.',
      expertise: ['AI Strategy', 'Legal Tech', 'Contract Automation'],
      avatar: '👨‍⚖️',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    },
    {
      name: 'Dr. Anjali Rao',
      role: 'AI & Legal Research Specialist',
      bio: 'PhD in AI & Law from IIT Bombay. Published 15+ papers on AI in legal practice. Previously consulted for Supreme Court AI initiatives.',
      expertise: ['Machine Learning', 'Legal AI', 'Research'],
      avatar: '👩‍🔬',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    },
    {
      name: 'Karthik Menon',
      role: 'Legal Marketing Expert',
      bio: 'Scaled personal brand to 2M impressions/month. Consulted for 50+ law firms on digital presence and client acquisition using AI.',
      expertise: ['Personal Branding', 'Marketing', 'Client Growth'],
      avatar: '👨‍💻',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
  ];

  const aiTools = [
    { name: 'ChatGPT', category: 'LLM Assistant', icon: '🤖' },
    { name: 'Claude', category: 'Legal Analysis', icon: '🧠' },
    { name: 'Midjourney', category: 'Visual Creation', icon: '🎨' },
    { name: 'Make.com', category: 'Automation', icon: '⚙️' },
    { name: 'Perplexity', category: 'Research', icon: '🔍' },
    { name: 'Runway ML', category: 'Video Creation', icon: '🎬' },
  ];

  const statsData = [
    { number: '10,000+', label: 'Legal Professionals Trained', icon: Users },
    {
      number: '₹2.5L',
      label: 'Avg. Monthly Earning Increase',
      icon: TrendingUp,
    },
    { number: '4.9/5', label: 'Average Rating', icon: Star },
    { number: '100%', label: 'Money Back Guarantee', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Hero Section with Enhanced Grain */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-linear-to-b from-black via-violet-500/10 to-violet-500/20 flex items-center justify-center overflow-hidden py-16"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
            }}
          />

          <div className="absolute inset-0 bg-linear-to-b from-black via-violet-500/20 to-violet-500/40" />

          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute  top-20 left-20 w-96 h-96 bg-violet-500/80 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute  bottom-20 right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            style={{ opacity, scale }}
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 text-sm px-6 py-2 bg-violet-500/20 border-violet-400/50 text-violet-100 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Limited Seats - Batch Starting Soon
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white"
            >
              Earn More, Work Less
              <br />
              <span className="text-violet-300">Master AI for Law</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Learn How Lawyers Are Using AI to Make ₹1–3 Lakh a Month
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Master the AI Skills Every Lawyer Will Need in 2025 - in Just 2
              Days
            </motion.p>

            {/* Workshop Details Grid */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
            >
              {workshopDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4"
                  >
                    <Icon className="w-6 h-6 text-violet-200 mx-auto mb-2" />
                    <div className="text-xs text-muted mb-1">
                      {detail.label}
                    </div>
                    <div className="text-sm font-bold text-white">
                      {detail.value}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Quick Benefits */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {[
                { icon: Award, text: 'Certificate Included' },
                { icon: Clock, text: 'Lifetime Access' },
                { icon: BookOpen, text: '35+ Templates' },
                { icon: TrendingUp, text: 'Top 1% Get Jobs' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
                  >
                    <Icon className="w-4 h-4 text-violet-300" />
                    <span className="text-sm text-white font-medium">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button
                size="lg"
                className="text-lg px-10 py-7 bg-violet-600 hover:bg-violet-700 text-white shadow-xl shadow-violet-500/20 transition-all hover:shadow-violet-500/30 hover:scale-105"
              >
                Enroll Now - Save Your Seat
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 border-2 text-black hover:text-white border-violet-400/50 hover:bg-violet-500/10 hover:border-violet-400/70 backdrop-blur-sm hover:scale-105 transition-all"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Sample Session
              </Button>
            </motion.div>

            {/* Stats with Icons */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {statsData.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all"
                  >
                    <Icon className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-violet-300 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-200 font-medium">
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
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 relative bg-linear-to-b from-violet-500/40 via-violet-500/10 to-black ">
        <div className="absolute inset-0">
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-sm text-slate-400 uppercase tracking-wider mb-6">
              Trusted Partners
            </p>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {`Collaborating with World's Leading AI Companies`}
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2 group"
              >
                {/* <div className="text-5xl opacity-70 group-hover:opacity-100 transition-opacity">
                  {partner.logo}
                </div> */}
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Quote Section - Glassmorphism */}
      <section className="py-20 relative bg-linear-to-b from-black via-violet-500/10 to-violet-500/20">
        <div className="absolute inset-0">
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
              <CardContent className="p-12 text-center relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', duration: 0.6 }}
                >
                  <Scale className="w-16 h-16 text-violet-400 mx-auto mb-6" />
                </motion.div>
                <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed">
                  {`"AI is not replacing lawyers - but lawyers who use AI are
                  replacing those who don't."`}
                </blockquote>
                <p className="text-lg text-slate-200 leading-relaxed">
                  Top law firms, startups, and even solo practitioners are
                  already using AI tools to draft contracts, summarize cases,
                  and automate compliance. The lawyers who master this skill
                  early are earning more, finishing faster, and getting better
                  clients.
                </p>
                <p className="text-xl font-semibold text-violet-300 mt-6">
                  The question is - will you be one of them in 2025?
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills You'll Master Section */}
      <section className="py-32 relative bg-linear-to-b from-violet-500/20 via-violet-500/10 to-black">
        <div className="absolute inset-0">
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-violet-500/20 border-violet-400/50 text-violet-200">
              <Cpu className="w-4 h-4 mr-2" />
              {`By Monday, You'll Be Able To`}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {`Skills You'll Master This Weekend`}
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Transform from AI novice to confident practitioner in just 48
              hours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skillsYouWillLearn.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/20 hover:border-violet-400/50 hover:bg-white/10 transition-all group shadow-lg">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-500 to-violet-700 flex items-center justify-center mb-5 shadow-lg shadow-violet-500/20"
                      >
                        <Icon className="w-7 h-7" />
                      </motion.div>
                      <CardTitle className="text-xl mb-3 text-white">
                        {skill.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-200 text-base leading-relaxed">
                        {skill.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included - Glassmorphism */}
      <section className="py-32 relative bg-linear-to-b from-black via-violet-500/10 to-violet-500/20">
        <div className="absolute inset-0">
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              A comprehensive learning experience designed to take you from AI
              beginner to confident practitioner
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
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/20 hover:border-violet-400/50 hover:bg-white/10 transition-all group shadow-lg">
                    <CardHeader>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 rounded-xl bg-linear-to-br from-violet-500 to-violet-700 flex items-center justify-center mb-5 shadow-lg shadow-violet-500/20"
                      >
                        <Icon className="w-7 h-7" />
                      </motion.div>
                      <CardTitle className="text-2xl mb-3 text-white">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-200 text-base leading-relaxed">
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

      {/* AI Tools Section */}
      <section className="py-32 relative bg-linear-to-b from-violet-500/20 via-violet-500/10 to-black">
        <div className="absolute inset-0">
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-violet-500/20 border-violet-400/50 text-violet-200">
              <Zap className="w-4 h-4 mr-2" />
              Hands-On with Real Tools
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Master the AI Stack Professionals Use
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Get hands-on experience with industry-leading AI tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {aiTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/20 hover:border-violet-400/50 transition-all text-center p-6 group">
                  {/* <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div> */}
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-400">{tool.category}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path - Glassmorphism */}
      <section className="py-32 relative bg-linear-to-b from-black via-violet-500/10 to-violet-500/20">
        <div className="absolute inset-0">
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-violet-500/20 border-violet-400/50 text-violet-200">
              <Calendar className="w-4 h-4 mr-2" />
              Weekend Schedule
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              48 Hours That Change Everything
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              A structured 2-day curriculum designed for maximum impact
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPath.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg hover:border-violet-400/50 transition-all">
                  <CardHeader>
                    <Badge className="w-fit mb-4 bg-violet-500/30 border-violet-400/50 text-violet-200">
                      {day.day}
                    </Badge>
                    <CardTitle className="text-2xl text-white mb-2">
                      {day.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-violet-300">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{day.timing}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {day.topics.map((topic, topicIndex) => (
                        <motion.li
                          key={topicIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: topicIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 shrink-0" />
                          <span className="text-slate-200">{topic}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Assessment Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-violet-400" />
                  <CardTitle className="text-3xl text-white">
                    Assessment & Certification
                  </CardTitle>
                </div>
                <CardDescription className="text-base text-slate-200">
                  Track your progress and earn your certificate through our
                  comprehensive evaluation system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { num: '5', label: 'Sample Questions Before Workshop' },
                    {
                      num: 'Live',
                      label: 'Interactive Assessments During Sessions',
                    },
                    { num: 'Final', label: 'Comprehensive Certification Exam' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-6 bg-white/5 backdrop-blur-md rounded-lg border border-white/10"
                    >
                      <div className="text-4xl font-bold text-violet-400 mb-2">
                        {item.num}
                      </div>
                      <div className="text-sm text-slate-200 font-medium">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-violet-400/50 text-black hover:text-white hover:bg-violet-500/20 backdrop-blur-sm"
                >
                  Preview Sample Assessment Questions
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Premium Benefits - Glassmorphism */}
      <section className="py-32 relative bg-linear-to-b from-violet-500/20 via-violet-500/10 to-black">
        <div className="absolute inset-0">
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/20 overflow-hidden relative shadow-2xl">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
              />
              <CardHeader className="relative z-10 pb-8">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Badge className="w-fit mb-4 bg-violet-500 text-white border-none px-4 py-2">
                    <Gift className="w-4 h-4 mr-2 inline" />
                    Exclusive Bonus - Worth ₹15,000
                  </Badge>
                </motion.div>
                <CardTitle className="text-4xl mb-4 text-white">
                  DueDraft Premium - 3 Months Free
                </CardTitle>
                <CardDescription className="text-lg text-slate-200">
                  Get full access to our premium AI platform with advanced
                  features and unlimited resources
                  <span className="block mt-2 text-sm text-slate-300">
                    *Terms & Conditions Apply
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {premiumBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <Icon className="w-6 h-6 text-violet-400 mt-1 shrink-0" />
                        <span className="text-slate-200">{benefit.text}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Speakers - Glassmorphism */}
      <section className="relative py-32 bg-linear-to-b from-black via-violet-500/10 to-violet-500/20">
        <div className="absolute inset-0">
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-violet-500/20 border-violet-400/50 text-violet-200">
              <Users className="w-4 h-4 mr-2" />
              Expert-Led Learning
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Learn From The Top 1% in AI
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              {`Industry veterans and AI experts who've been where you want to go`}
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/20 hover:border-violet-400/50 transition-all text-center group shadow-lg overflow-hidden pt-0">
                  {/* Placeholder Image */}
                  <div className="relative h-48 bg-linear-to-br from-violet-500/20 to-violet-700/20 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30"
                      style={{
                        backgroundImage: `url(${speaker.image})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                    {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-6xl">
                      {speaker.avatar}
                    </div> */}
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl mb-2 text-white">
                      {speaker.name}
                    </CardTitle>
                    <CardDescription className="text-violet-300 font-semibold text-base">
                      {speaker.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-200 leading-relaxed text-sm">
                      {speaker.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center pt-2">
                      {speaker.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="border-violet-400/50 text-violet-200 bg-violet-500/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Glassmorphism */}
      <section className="py-32 relative bg-linear-to-b from-violet-500/20 via-violet-500/10 to-black">
        <div className="absolute inset-0">
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-4 bg-violet-500/20 border-violet-400/50 text-violet-200">
              <MessageCircle className="w-4 h-4 mr-2" />
              Hear it From Them
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Success Stories from Legal Professionals
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Real results from lawyers who transformed their practice with AI
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto flex gap-4 items-center">
            <Button
              className="z-10 size-16 rounded-full bg-violet-500 hover:bg-violet-600 shrink-0"
              onClick={() => {
                if (activeTestimonial > 0) {
                  setActiveTestimonial(activeTestimonial - 1);
                } else {
                  setActiveTestimonial(testimonials.length - 1);
                }
              }}
            >
              <ChevronLeft className="size-8" />
            </Button>

            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="flex-1"
            >
              <Card className="bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
                <CardContent className="p-12">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-violet-400 text-violet-400" />
                        </motion.div>
                      )
                    )}
                  </div>

                  <p className="text-xl text-white mb-6 leading-relaxed italic">
                    {`"${testimonials[activeTestimonial].content}"`}
                  </p>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-5xl">
                      {testimonials[activeTestimonial].avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-lg text-white">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-violet-300">
                        {testimonials[activeTestimonial].role}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`h-3 rounded-full transition-all ${
                          index === activeTestimonial
                            ? 'bg-violet-500 w-8'
                            : 'bg-slate-500 hover:bg-slate-400 w-3'
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Button
              className="z-10 size-16 rounded-full bg-violet-500 hover:bg-violet-600 shrink-0"
              onClick={() => {
                if (activeTestimonial < testimonials.length - 1) {
                  setActiveTestimonial(activeTestimonial + 1);
                } else {
                  setActiveTestimonial(0);
                }
              }}
            >
              <ChevronRight className="size-8" />
            </Button>
          </div>
        </div>
      </section>

      {/* Career Opportunities - Glassmorphism */}
      <section className="relative py-32 bg-linear-to-b from-black via-violet-500/10 to-violet-500/60">
        <div className="absolute inset-0">
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg hover:border-violet-400/50 transition-all">
                <CardHeader>
                  <Briefcase className="w-12 h-12 text-violet-400 mb-4" />
                  <CardTitle className="text-3xl mb-3 text-white">
                    Elite Career Pathway
                  </CardTitle>
                  <CardDescription className="text-base text-slate-200 leading-relaxed">
                    Top performers gain access to exclusive opportunities with
                    leading law firms and legal tech companies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/20"
                  >
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-violet-400">
                        1%
                      </span>
                      <span className="text-slate-200">Selection Rate</span>
                    </div>
                    <p className="text-sm text-slate-300">
                      Only the most dedicated and skilled participants qualify
                      for placement opportunities
                    </p>
                  </motion.div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">
                      Selection Criteria:
                    </h4>
                    <ul className="space-y-2 text-slate-200">
                      {[
                        'Outstanding assessment performance (top 10%)',
                        'Active participation and engagement',
                        'High-quality project submissions',
                        'Community contributions and collaboration',
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg hover:border-violet-400/50 transition-all">
                <CardHeader>
                  <Shield className="w-12 h-12 text-violet-400 mb-4" />
                  <CardTitle className="text-3xl mb-3 text-white">
                    Risk-Free Guarantee
                  </CardTitle>
                  <CardDescription className="text-base text-slate-200 leading-relaxed">
                    {`We're so confident in our workshop that we offer a complete money-back promise`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/20"
                  >
                    <div className="text-4xl font-bold text-violet-400 mb-2">
                      100%
                    </div>
                    <p className="text-white font-semibold mb-1">
                      Money Back Guarantee
                    </p>
                    <p className="text-sm text-slate-200">
                      Not satisfied? Get a full refund within 24 hours of Day 1
                    </p>
                  </motion.div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">
                      Terms & Conditions:
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-200">
                      {[
                        'Refund request must be submitted within 24 hours of workshop commencement',
                        'Premium subscription access will be revoked upon refund processing',
                        'All materials, certificates, and template access must be returned',
                        'Refunds processed within 5-7 business days to original payment method',
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/*Social Proof Gallery with Background Image */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')`,
            }}
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-linear-to-b from-violet-500/40 via-violet-500/40 to-black" />
          {/* Animated overlay */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0"
          />
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-white/10 border-white/30 text-white backdrop-blur-md">
              <Star className="w-4 h-4 mr-2 fill-violet-600 text-violet-600" />
              Trusted by Thousands
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Join a Community of{' '}
              <span className="text-violet-200">AI-Powered Professionals</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Real lawyers. Real results. Real transformation.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Globe,
                number: '160+',
                label: 'Countries Represented',
                description: 'Global community of legal professionals',
              },
              {
                icon: Building2,
                number: '500+',
                label: 'Law Firms Transformed',
                description: 'From solo practitioners to global firms',
              },
              {
                icon: Award,
                number: '98%',
                label: 'Satisfaction Rate',
                description: 'Would recommend to colleagues',
              },
              {
                icon: TrendingUp,
                number: '10K+',
                label: 'Success Stories',
                description: 'Lawyers who transformed their practice',
              },
              {
                icon: Brain,
                number: '50+',
                label: 'AI Tools Mastered',
                description: 'Comprehensive toolkit for modern lawyers',
              },
              {
                icon: MessageCircle,
                number: '24/7',
                label: 'Community Support',
                description: 'Always-on help from peers and experts',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/20 hover:border-violet-400/50 transition-all shadow-lg">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 mx-auto mb-4 rounded-xl bg-linear-to-br from-violet-500 to-violet-700 flex items-center justify-center shadow-lg shadow-violet-500/30"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="text-4xl font-bold text-white mb-2">
                        {item.number}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.label}
                      </h3>
                      <p className="text-sm text-slate-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
              <div className="flex -space-x-4">
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
                  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
                ].map((avatar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="w-12 h-12 rounded-full border-2 border-violet-500 overflow-hidden"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${avatar}')` }}
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3 }}
                  className="w-12 h-12 rounded-full border-2 border-violet-500 bg-violet-600 flex items-center justify-center text-white font-bold text-sm"
                >
                  +10K
                </motion.div>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-lg mb-1">
                  Join 10,000+ Legal Professionals
                </p>
                <p className="text-slate-300 text-sm">
                  {`Who've already transformed their practice with AI`}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-10 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-20 right-10 w-40 h-40 bg-violet-500/20 rounded-full blur-2xl"
        />
      </section>

      {/* FAQ Section - Glassmorphism */}
      <section className="py-32 relative bg-linear-to-b from-black via-violet-500/10 to-violet-500/20">
        <div className="absolute inset-0">
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Everything you need to know before you enroll
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-lg px-6 hover:bg-white/10 transition-colors mb-4 shadow-md"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-200 pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Glassmorphism */}
      <section className="py-32 relative bg-linear-to-b from-violet-500/20 via-violet-500/10 to-black">
        <div className="absolute inset-0">
          {/* Grain texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/20 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-r from-violet-600/10 to-violet-400/10" />
              <CardContent className="relative z-10 py-20 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-white"
                >
                  This Weekend, While Others Rest,
                  <br />
                  <span className="text-violet-300">You Transform</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto"
                >
                  Join thousands of legal professionals who are already
                  leveraging AI to accelerate their careers and earnings
                </motion.p>

                {/* Countdown Timer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mb-10"
                >
                  <p className="text-sm text-slate-400 mb-3 uppercase tracking-wider">
                    Next Mastermind Starts In
                  </p>
                  <div className="flex justify-center gap-4">
                    {[
                      { value: '3', label: 'DAYS' },
                      { value: '21', label: 'HOURS' },
                      { value: '04', label: 'MINS' },
                    ].map((time, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 min-w-20"
                      >
                        <div className="text-3xl font-bold text-violet-300">
                          {time.value}
                        </div>
                        <div className="text-xs text-slate-400">
                          {time.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col lg:flex-row gap-4 justify-center mb-8 items-center"
                >
                  <Button
                    size="lg"
                    className="text-lg px-12 py-7 bg-violet-600 hover:bg-violet-700 text-white shadow-2xl shadow-violet-500/30 hover:scale-105 transition-all"
                  >
                    Enroll Now - Limited Seats Available
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-12 py-7 border-2 border-violet-400/50 text-black hover:text-white  hover:bg-violet-500/20 backdrop-blur-sm hover:scale-105 transition-all"
                  >
                    Download Free Preview (5 Pages)
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-200"
                >
                  {[
                    { icon: Shield, text: 'Secure Payment Gateway' },
                    { icon: CheckCircle2, text: 'Instant Community Access' },
                    { icon: Award, text: 'Certificate Included' },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-violet-400" />
                        <span>{item.text}</span>
                      </div>
                    );
                  })}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-violet-400">
                  DueDraft
                </h3>
                <p className="text-slate-300 text-sm">
                  Empowering legal professionals to master AI and transform
                  their careers.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    'About Us',
                    'Curriculum',
                    'Instructors',
                    'Success Stories',
                  ].map((link, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="hover:text-violet-400 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Resources</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {['Sample Notes', 'Free Templates', 'Blog', 'FAQs'].map(
                    (link, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="hover:text-violet-400 transition-colors"
                        >
                          {link}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    'Terms & Conditions',
                    'Privacy Policy',
                    'Refund Policy',
                    'Contact Us',
                  ].map((link, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="hover:text-violet-400 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center text-sm text-slate-400">
              <p>
                © 2024 DueDraft. All rights reserved. | Transforming legal
                careers through AI education.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
