
import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Droplets, Bug, TrendingUp, Shield, Camera } from 'lucide-react';

const FarmlandServices = () => {
  const services = [
    { icon: <TreePine size={24} />, title: 'Scientific Plantation', desc: 'Expert selection of Eucalyptus & Poplar species.', bg: 'bg-emerald-100', text: 'text-emerald-700' },
    { icon: <Droplets size={24} />, title: 'Smart Irrigation', desc: 'Automated drip systems for water efficiency.', bg: 'bg-blue-100', text: 'text-blue-700' },
    { icon: <Bug size={24} />, title: 'Organic Care', desc: 'Integrated pest management & soil health.', bg: 'bg-amber-100', text: 'text-amber-700' },
    { icon: <TrendingUp size={24} />, title: 'Growth Tracking', desc: 'Biometric monitoring of timber volume.', bg: 'bg-purple-100', text: 'text-purple-700' },
    { icon: <Shield size={24} />, title: 'Full Insurance', desc: 'Coverage against fire, flood, and storms.', bg: 'bg-red-100', text: 'text-red-700' },
    { icon: <Camera size={24} />, title: 'Digital Reports', desc: 'Monthly photo updates on your dashboard.', bg: 'bg-teal-100', text: 'text-teal-700' }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We Manage, You Monitor</h2>
          <p className="text-gray-600 text-lg">
            Our end-to-end <strong>modern farming services</strong> ensure your green assets are healthy, secure, and growing. Perfect for <strong>farmland management for NRIs</strong> and urban investors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${service.bg} ${service.text}`}>
                {service.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-snug">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmlandServices;
