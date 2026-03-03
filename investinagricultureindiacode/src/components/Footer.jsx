import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
const Footer = () => {
  const logoUrl = "https://horizons-cdn.hostinger.com/1c27a786-8538-4b6c-bb65-44a25d79a652/0ee58050feb64c01090be2dcfb4560a5.png";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 relative overflow-hidden">
       {/* Decorative gradients */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-green-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <img 
                src={logoUrl} 
                alt="Invest In Agriculture India Logo" 
                className="h-12 w-12 object-contain rounded-full bg-white p-0.5"
              />
              <span className="font-bold text-xl text-white">Invest In Agriculture India</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Democratizing agricultural wealth through transparent, technology-driven tree farming investments.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => <a key={i} href="#" className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 text-white">
                  <Icon size={18} />
                </a>)}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'Press', 'Contact'].map(item => <li key={item}><a href="#" className="hover:text-green-400 transition-colors">{item}</a></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Blog', 'Case Studies', 'Investment Guide', 'FAQ', 'Support'].map(item => <li key={item}><a href="#" className="hover:text-green-400 transition-colors">{item}</a></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Risk Disclosure', 'Refund Policy'].map(item => <li key={item}><a href="#" className="hover:text-green-400 transition-colors">{item}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2024 Invest In Agriculture India. All rights reserved.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-sm font-bold text-green-500 hover:text-green-400 transition-colors">
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>;
};
export default Footer;