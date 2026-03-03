
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-gray-50 rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 p-8 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-center max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wide uppercase mb-4">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Democratizing <span className="text-green-600">Farmland Investment</span> in India
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                <strong>Invest In Agriculture India</strong> is a pioneering platform transforming how urban capital meets rural growth. We specialize in high-value timber assets like <strong>Poplar and Eucalyptus plantation investment</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We bridge the gap for those seeking to <strong>invest in agriculture India</strong> without the hassle of daily management. From identifying fertile land to harvest sales, we handle the entire lifecycle, ensuring our partners and farmers grow together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Target size={20} />, title: "Vision", text: "To become India's most trusted tree investment platform." },
                { icon: <Award size={20} />, title: "Mission", text: "Deliver transparent, market-linked returns through modern farming." },
                { icon: <Heart size={20} />, title: "Values", text: "Integrity, Sustainability, and Shared Growth." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 mx-auto bg-green-50 rounded-full shadow-sm flex items-center justify-center text-green-600 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
