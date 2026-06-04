import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Sparkles, Video, Image, Music, Users, Check, ChevronDown, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-violet-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg">VisualForge Pro</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm hover:text-violet-400 transition">Features</a>
              <a href="#pricing" className="text-sm hover:text-violet-400 transition">Pricing</a>
              <a href="#faq" className="text-sm hover:text-violet-400 transition">FAQ</a>
              <button className="px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition font-medium text-sm">Free Trial</button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full">
              <span className="text-sm font-medium text-violet-300">✨ AI-Powered Editing • No watermark • Free Trial</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-purple-300 to-blue-300 leading-tight">Edit Videos Like a Pro in Seconds</h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">VisualForge Pro is the all-in-one video and photo editor built for content creators. <span className="text-violet-300 font-semibold">Let AI edit for you</span>, or take full control.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:shadow-2xl hover:shadow-violet-500/50 transition font-bold text-lg inline-flex items-center justify-center gap-2 group">Start Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" /></button>
              <button className="px-8 py-4 border-2 border-violet-500/50 hover:border-violet-400 rounded-lg font-bold text-lg hover:bg-violet-500/10 transition inline-flex items-center justify-center gap-2"><Play className="w-5 h-5" /> Demo</button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /><span>No credit card</span></div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /><span>7-14 day trial</span></div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /><span>Cancel anytime</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-purple-300">Everything You Need</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Professional tools for creators</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{icon: Sparkles, title: 'AI Auto-Edit', desc: 'Scene detection, transitions, color grading'}, {icon: Video, title: '4K & 8K Export', desc: 'Pro: 4K, Business: 8K'}, {icon: Music, title: 'Music & SFX', desc: '20 tracks + upload own'}, {icon: Image, title: 'Photo Editor', desc: 'Layers, brushes, filters'}, {icon: Users, title: 'Team Collab', desc: 'Business: 10 members'}, {icon: Zap, title: 'Presets', desc: 'YouTube, Instagram, TikTok'}].map((f, i) => (
              <motion.div key={i} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: i * 0.1}} className="p-8 rounded-2xl border border-violet-500/20 bg-slate-900/50">
                <f.icon className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-purple-300">Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[{name: 'Free', price: '$0', trial: '7 days', features: ['5 projects', '1080p export', 'With watermark']}, {name: 'Pro', price: '$4.99/mo', trial: '14 days', featured: true, features: ['Unlimited projects', '4K export', 'AI Auto-Edit']}, {name: 'Business', price: '$10.99/mo', trial: '14 days', features: ['Everything Pro', '8K export', '10 team members']}].map((p, i) => (
              <motion.div key={i} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: i * 0.1}} className={`p-8 rounded-2xl flex flex-col ${p.featured ? 'border-2 border-violet-500 bg-gradient-to-b from-violet-500/20 to-slate-900/50' : 'border border-violet-500/20 bg-slate-900/50'}`}>
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <div className="mb-6"><span className="text-4xl font-black">{p.price}</span></div>
                <p className="text-sm text-violet-300 mb-6">{p.trial} trial</p>
                <button className={`py-3 px-6 rounded-lg font-bold mb-8 ${p.featured ? 'bg-gradient-to-r from-violet-600 to-purple-600' : 'bg-slate-800'}`}>Get Started</button>
                <ul className="space-y-3 text-sm flex-1">{p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /><span className="text-slate-300">{f}</span></li>
                ))}</ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-purple-300">FAQ</h2>

          <div className="space-y-4">
            {[{q: 'No credit card for trial?', a: 'Correct! Free gets 7 days. Pro/Business get 14 days. No card needed.'}, {q: 'Cancel anytime?', a: 'Yes, instantly. Downgrade to free immediately.'}, {q: 'What after trial?', a: 'Email reminder 3 days before. Auto-downgrade to free if no payment method added.'}, {q: 'Upgrade mid-trial?', a: 'Yes! Upgrade anytime. Subscription starts after trial or charge immediately.'}].map((item, idx) => (
              <motion.details key={idx} initial={{opacity: 0}} whileInView={{opacity: 1}} className="group p-6 rounded-xl border border-violet-500/20 bg-slate-900/50">
                <summary className="flex items-start gap-3 font-bold text-lg list-none cursor-pointer">
                  <ChevronDown className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0 group-open:rotate-180 transition" />
                  <span>{item.q}</span>
                </summary>
                <p className="mt-4 ml-8 text-slate-400">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-violet-500/20 bg-slate-950/50 py-8 px-4 text-center text-slate-400 text-sm">
        <p>&copy; 2025 VisualForge Pro. Made for creators.</p>
      </footer>
    </div>
  );
}
