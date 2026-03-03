import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Tree-Based Agriculture: Hedge Against Inflation',
      date: 'Nov 20, 2024',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fd7788a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sandalwood vs Teak: ROI Comparison',
      date: 'Nov 15, 2024',
      category: 'Analysis',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51843158c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sustainable Farming Impact Report 2024',
      date: 'Nov 10, 2024',
      category: 'Impact',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Understanding Carbon Credits in Agroforestry',
      date: 'Nov 05, 2024',
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Insights</h2>
            <p className="text-gray-500 mt-2">Latest news and updates from the field.</p>
          </div>
          <button className="text-sm font-bold text-green-600 hover:underline hidden md:block">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-green-50 text-green-700 px-2 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar size={10} /> {post.date}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 leading-tight group-hover:text-green-700 transition-colors">
                  {post.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;