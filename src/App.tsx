import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Anchor, 
  Scale, 
  FileText, 
  ShieldCheck, 
  Clock, 
  Briefcase, 
  Mail, 
  Phone, 
  Linkedin,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Download,
  Award,
  Globe,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'profile', label: 'Profile' },
    { id: 'practice', label: 'Practice' },
    { id: 'matters', label: 'Matters' },
    { id: 'approach', label: 'Approach' },
    { id: 'contact', label: 'Contact' },
  ];

  const stats = [
    { label: 'Years at Sea', value: '25+' },
    { label: 'Disputes Resolved', value: '150+' },
    { label: 'Global Jurisdictions', value: '12' },
    { label: 'Arbitration Panels', value: '08' },
  ];

  const practiceAreas = [
    {
      title: "Maritime Arbitration",
      desc: "Independent adjudication of high-stakes maritime disputes under LMAA, SCMA, and ICC rules.",
      icon: <Scale className="text-gold" size={24} />,
      details: ["LMAA Terms", "SCMA Rules", "Ad-hoc Proceedings"]
    },
    {
      title: "Charterparty Disputes",
      desc: "Expert interpretation of Time, Voyage, and Bareboat charterparty clauses and breach of warranties.",
      icon: <FileText className="text-gold" size={24} />,
      details: ["Performance Claims", "Safe Port Disputes", "Hire/Off-hire"]
    },
    {
      title: "Laytime & Demurrage",
      desc: "Granular analysis of complex laytime calculations and demurrage claims in bulk and tanker sectors.",
      icon: <Clock className="text-gold" size={24} />,
      details: ["NOR Validity", "Stoppage Analysis", "Pumping Warranties"]
    },
    {
      title: "Cargo & Operational",
      desc: "Technical assessment of cargo damage, shortage, and operational failures from a Master's perspective.",
      icon: <Anchor className="text-gold" size={24} />,
      details: ["Bill of Lading", "Seaworthiness", "General Average"]
    },
    {
      title: "Expert Witness",
      desc: "Provision of authoritative expert testimony in High Court and international arbitration proceedings.",
      icon: <Award className="text-gold" size={24} />,
      details: ["Technical Reports", "Oral Testimony", "Practice Advice"]
    },
    {
      title: "Mediation",
      desc: "Facilitating commercial settlements through structured mediation and neutral evaluation.",
      icon: <Globe className="text-gold" size={24} />,
      details: ["Commercial Settlement", "Neutral Evaluation", "Dispute Boards"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-offwhite selection:bg-gold/20">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
        <div className="section-container flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="font-serif text-2xl font-semibold tracking-tight text-navy">Capt. Prabhjot Singh Arora</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-semibold">Maritime Arbitrator</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center">
            {sections.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`} 
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-navy/60 hover:text-gold transition-colors"
              >
                {section.label}
              </a>
            ))}
            <a href="#contact" className="px-6 py-2 border border-navy text-navy text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-navy hover:text-offwhite transition-all">
              Inquire
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-offwhite border-b border-navy/5 overflow-hidden"
            >
              <div className="px-6 py-12 flex flex-col gap-8 items-center">
                {sections.map((section) => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`} 
                    className="text-sm uppercase tracking-[0.3em] font-medium text-navy/60"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-navy rounded-full blur-[120px]" />
          </div>

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl"
            >
              <span className="inline-block text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6">Independent · Neutral · Authoritative</span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium mb-8 leading-[0.9] text-navy">
                Resolving <span className="italic font-light text-navy/40">Maritime</span> Disputes with Precision.
              </h1>
              <div className="grid md:grid-cols-2 gap-12 items-end">
                <p className="text-xl md:text-2xl text-navy/70 font-light leading-relaxed text-balance">
                  Capt. Prabhjot Singh Arora provides independent arbitration and expert advisory for the global shipping industry, specializing in complex charterparty and commercial claims.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="premium-button">
                    Contact for Inquiry
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#profile" className="premium-button-outline">
                    View Profile
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            style={{ opacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-navy/30">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-navy/30 to-transparent" />
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="bg-navy py-24">
          <div className="section-container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-4xl md:text-5xl font-serif text-gold mb-2">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-offwhite/50 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Profile */}
        <section id="profile" className="py-32 bg-paper">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] bg-navy/5 overflow-hidden rounded-sm"
              >
                <img 
                  src="https://picsum.photos/seed/maritime-professional/1200/1500?grayscale" 
                  alt="Professional Portrait Placeholder" 
                  className="object-cover w-full h-full opacity-80 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="text-offwhite/60 text-xs uppercase tracking-[0.3em] mb-2">Master Mariner</div>
                  <div className="text-offwhite font-serif text-2xl">Capt. Prabhjot Singh Arora</div>
                </div>
              </motion.div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">The Arbitrator</span>
                  <h2 className="text-4xl md:text-5xl font-medium text-navy">A Career Built on Operational Excellence.</h2>
                </div>
                
                <div className="space-y-6 text-lg text-navy/70 leading-relaxed font-light">
                  <p>
                    Capt. Prabhjot Singh Arora brings over two decades of command experience at sea, coupled with extensive shore-based commercial exposure. This dual perspective allows him to bridge the gap between technical maritime operations and complex legal interpretations.
                  </p>
                  <p>
                    Having served as Master on a diverse fleet of international vessels, he possesses a first-hand understanding of the challenges faced by shipowners and charterers. His transition to arbitration was driven by a commitment to providing the industry with commercially sensible and legally robust dispute resolution.
                  </p>
                  <p className="italic font-serif text-navy/90 border-l-2 border-gold pl-6 py-2">
                    "My approach is rooted in the belief that maritime disputes require not just legal knowledge, but a deep-seated understanding of the sea's operational realities."
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 pt-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold" />
                    <span className="text-sm font-medium uppercase tracking-wider">LMAA Supporting Member</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-gold" />
                    <span className="text-sm font-medium uppercase tracking-wider">SCMA Panel Member</span>
                  </div>
                </div>

                <button className="flex items-center gap-3 text-navy font-bold uppercase tracking-[0.2em] text-xs group">
                  Download Professional CV
                  <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Practice */}
        <section id="practice" className="py-32">
          <div className="section-container">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl space-y-4">
                <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Expertise</span>
                <h2 className="text-4xl md:text-6xl font-medium text-navy">Specialized Dispute Resolution.</h2>
              </div>
              <p className="text-navy/50 max-w-xs text-sm uppercase tracking-widest leading-relaxed">
                Providing authoritative adjudication across the full spectrum of maritime commercial law.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10 border border-navy/10">
              {practiceAreas.map((area, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ backgroundColor: '#F9F9F7' }}
                  className="bg-offwhite p-12 space-y-8 group transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    {area.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium text-navy group-hover:text-gold transition-colors">{area.title}</h3>
                    <p className="text-navy/60 leading-relaxed text-sm">{area.desc}</p>
                  </div>
                  <ul className="space-y-2">
                    {area.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-navy/40 font-bold">
                        <div className="w-1 h-1 bg-gold rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Matters Section (Anonymized) */}
        <section id="matters" className="py-32 bg-navy text-offwhite overflow-hidden">
          <div className="section-container relative">
            <div className="absolute -top-20 -right-20 text-[200px] font-serif font-bold text-offwhite/5 select-none pointer-events-none">
              MATTERS
            </div>
            
            <div className="mb-20 space-y-4">
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Experience</span>
              <h2 className="text-4xl md:text-5xl font-medium">Representative Matters.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: "Charterparty",
                  title: "Safe Port Dispute - Middle East",
                  desc: "Sole arbitrator in a multi-million dollar dispute involving vessel damage at a restricted draft port during extreme weather events."
                },
                {
                  category: "Performance",
                  title: "Speed & Consumption Warranty",
                  desc: "Tribunal member for a series of claims involving hull fouling and weather factor adjustments under NYPE 2015 terms."
                },
                {
                  category: "Laytime",
                  title: "Complex Tanker Demurrage",
                  desc: "Resolution of disputes involving NOR validity and pumping warranties across multiple discharge ports in Southeast Asia."
                },
                {
                  category: "Cargo",
                  title: "Bulk Cargo Shortage Claim",
                  desc: "Expert witness engagement for a High Court case regarding draft survey discrepancies and shore scale calibrations."
                }
              ].map((matter, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 border border-offwhite/10 hover:border-gold/30 transition-colors group"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-4 block">{matter.category}</span>
                  <h3 className="text-xl font-medium mb-4 group-hover:text-gold transition-colors">{matter.title}</h3>
                  <p className="text-offwhite/60 text-sm leading-relaxed">{matter.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-32">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Philosophy</span>
                  <h2 className="text-4xl md:text-5xl font-medium text-navy">A Commitment to Neutrality.</h2>
                </div>
                
                <div className="space-y-8">
                  {[
                    {
                      title: "Absolute Independence",
                      desc: "Maintaining strict separation from all parties to ensure the integrity of the award."
                    },
                    {
                      title: "Commercial Reality",
                      desc: "Applying legal principles with a pragmatic understanding of shipping operations."
                    },
                    {
                      title: "Procedural Efficiency",
                      desc: "Minimizing delays through active tribunal management and clear directions."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold font-serif italic">
                        0{idx + 1}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium text-navy">{item.title}</h3>
                        <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gold/5 -rotate-3 rounded-sm" />
                <div className="relative bg-offwhite p-12 border border-navy/5 shadow-2xl shadow-navy/5 space-y-8">
                  <h3 className="text-2xl font-serif italic text-navy">Professional Engagements</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-4">Panels & Appointments</h4>
                      <ul className="space-y-3 text-sm text-navy/70">
                        <li className="flex justify-between border-b border-navy/5 pb-2">
                          <span>LMAA Supporting Member</span>
                          <span className="text-navy/40 italic">London</span>
                        </li>
                        <li className="flex justify-between border-b border-navy/5 pb-2">
                          <span>SCMA Panel of Arbitrators</span>
                          <span className="text-navy/40 italic">Singapore</span>
                        </li>
                        <li className="flex justify-between border-b border-navy/5 pb-2">
                          <span>HKMAG Member</span>
                          <span className="text-navy/40 italic">Hong Kong</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-4">Memberships</h4>
                      <ul className="space-y-3 text-sm text-navy/70">
                        <li className="flex justify-between border-b border-navy/5 pb-2">
                          <span>Chartered Institute of Arbitrators</span>
                          <span className="text-navy/40 italic">Fellow</span>
                        </li>
                        <li className="flex justify-between border-b border-navy/5 pb-2">
                          <span>The Nautical Institute</span>
                          <span className="text-navy/40 italic">Member</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-paper border-t border-navy/5">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20 space-y-4">
                <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Inquiry</span>
                <h2 className="text-4xl md:text-6xl font-medium text-navy">Professional Consultation.</h2>
                <p className="text-navy/50 max-w-lg mx-auto text-sm leading-relaxed">
                  All communications are handled with strict professional confidentiality. Please provide details regarding your inquiry below.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12 mb-20">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-navy text-offwhite rounded-full flex items-center justify-center mx-auto">
                    <Mail size={20} />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">Email</div>
                  <div className="text-navy font-medium">inquiry@captarora.com</div>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-navy text-offwhite rounded-full flex items-center justify-center mx-auto">
                    <Phone size={20} />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">Phone</div>
                  <div className="text-navy font-medium">+XX XXX XXXXXXX</div>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-navy text-offwhite rounded-full flex items-center justify-center mx-auto">
                    <Linkedin size={20} />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">LinkedIn</div>
                  <div className="text-navy font-medium hover:text-gold transition-colors cursor-pointer">Professional Profile</div>
                </div>
              </div>

              <form className="grid md:grid-cols-2 gap-x-12 gap-y-8 bg-offwhite p-12 shadow-2xl shadow-navy/5 border border-navy/5">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-navy/10 py-3 focus:border-gold outline-none transition-colors" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">Company / Law Firm</label>
                  <input type="text" className="w-full bg-transparent border-b border-navy/10 py-3 focus:border-gold outline-none transition-colors" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-navy/10 py-3 focus:border-gold outline-none transition-colors" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">Jurisdiction</label>
                  <input type="text" className="w-full bg-transparent border-b border-navy/10 py-3 focus:border-gold outline-none transition-colors" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">Nature of Dispute</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-navy/10 py-3 focus:border-gold outline-none transition-colors resize-none" placeholder="Brief description of the matter..." required></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="w-full premium-button">
                    Submit Professional Inquiry
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-offwhite py-20">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-sm space-y-6">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-tight">Capt. Prabhjot Singh Arora</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-semibold">Maritime Arbitrator</span>
              </div>
              <p className="text-offwhite/40 text-sm leading-relaxed">
                Independent maritime arbitration and expert advisory for the global shipping and legal community.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-20">
              <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Navigation</h4>
                <ul className="space-y-4 text-sm text-offwhite/60">
                  {sections.map(s => (
                    <li key={s.id}><a href={`#${s.id}`} className="hover:text-gold transition-colors">{s.label}</a></li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Legal</h4>
                <ul className="space-y-4 text-sm text-offwhite/60">
                  <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-gold transition-colors">Terms of Engagement</a></li>
                  <li><a href="#" className="hover:text-gold transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-offwhite/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] uppercase tracking-[0.2em] text-offwhite/20">
              © {new Date().getFullYear()} Capt. Prabhjot Singh Arora. All Rights Reserved.
            </div>
            <div className="flex gap-6">
              <Linkedin size={16} className="text-offwhite/20 hover:text-gold transition-colors cursor-pointer" />
              <Mail size={16} className="text-offwhite/20 hover:text-gold transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
