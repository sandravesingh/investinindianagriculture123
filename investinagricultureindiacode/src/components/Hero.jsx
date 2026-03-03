
import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sprout, TrendingUp, Users } from 'lucide-react';

const AnimatedCounter = ({ from, to, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(from);
  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate: value => setDisplayValue(Math.floor(value)),
      ease: "easeOut"
    });
    return controls.stop;
  }, [from, to, duration]);
  return <span>{displayValue}</span>;
};

const Hero = () => {
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900 via-green-900 to-slate-950 text-white min-h-[85vh] flex items-center py-16 md:py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-green-500 rounded-full blur-[150px] opacity-20" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text & Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left flex flex-col justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10 self-center lg:self-start"
            >
              <Sprout className="text-green-400 w-4 h-4" />
              <span className="text-green-50 font-medium text-sm tracking-wide">Tree Investment Platform</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Invest in <span className="text-green-400">Agriculture India</span>, <br />
              Grow <span className="text-amber-400">Sustainable Wealth</span>
            </h1>
            
            <p className="text-lg text-green-100/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Secure your future with high-yield <strong>eucalyptus plantation investment</strong> and <strong>poplar farming</strong> assets. Join India's leading platform for transparent tree-based micro investments from just ₹500.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('calculator')} 
                className="bg-green-500 hover:bg-green-400 text-green-950 text-lg px-8 h-14 rounded-full shadow-xl shadow-green-500/20 font-bold transition-all hover:-translate-y-1 w-full sm:w-auto"
              >
                Calculate Returns <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('about')} 
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full backdrop-blur-sm w-full sm:w-auto"
              >
                How It Works
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
               <StatCard value={<>₹<AnimatedCounter from={0} to={500} /></>} label="Min Investment" />
               <StatCard value={<><AnimatedCounter from={0} to={100} />%</>} label="Verified Farms" />
               <StatCard value={<><AnimatedCounter from={0} to={5000} />+</>} label="Active Investors" />
            </div>
          </motion.div>

          {/* Right Column: Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block h-full"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                alt="Eucalyptus and Poplar plantation India" 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Floating Card */}
              <motion.div 
                className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <p className="text-green-300 text-xs font-bold uppercase tracking-wider mb-1">Open Project</p>
                    <h3 className="text-xl font-bold text-white">Poplar Plantation Phase V</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">High</p>
                    <p className="text-xs text-white/60">Demand</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decor blobs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-green-600/30 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label }) => (
  <div className="text-center lg:text-left">
    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{value}</div>
    <div className="text-xs text-green-200/70 font-medium uppercase tracking-wider">{label}</div>
  </div>
);

export default Hero;
