import { motion } from 'motion/react';
import { ExternalLink, Calendar, Users, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function DrivesSection() {
  const campaigns = [
    {
      title: 'Plastic-Free Rivers Drive',
      description: 'Join our mission to remove plastic waste from rivers and prevent it from reaching the ocean.',
      image: 'https://images.unsplash.com/photo-1749805339958-4b1d0f16423d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xsdXRlZCUyMHJpdmVyJTIwcGxhc3RpYyUyMHdhc3RlfGVufDF8fHx8MTc1OTE1MTUwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      participants: '2,500+',
      date: 'Every Weekend',
      impact: '50 tons removed'
    },
    {
      title: 'Beach Clean-Up Programs',
      description: 'Organize community beach cleanups to protect marine ecosystems and wildlife.',
      image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNsZWFudXAlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc1OTE0MDUxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      participants: '5,000+',
      date: 'Monthly',
      impact: '120 beaches cleaned'
    },
    {
      title: 'Save 10 Liters a Day Challenge',
      description: 'Take the challenge to reduce your daily water consumption and inspire others.',
      image: 'https://images.unsplash.com/photo-1586427045230-25204a7df680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXVjZXQlMjB0YXAlMjB3YXRlciUyMGZsb3dpbmd8ZW58MXx8fHwxNzU5MTUxNTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      participants: '15,000+',
      date: 'Ongoing',
      impact: '2M liters saved'
    }
  ];

  const resources = [
    {
      title: 'Water Conservation Guide',
      description: 'Comprehensive guide for schools and communities',
      type: 'PDF Download'
    },
    {
      title: 'Pollution Impact Infographic',
      description: 'Visual guide to water pollution effects',
      type: 'Educational Material'
    },
    {
      title: 'Activity Worksheets',
      description: 'Interactive learning materials for students',
      type: 'Classroom Resources'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-blue-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join the Mission
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Take action to protect our water resources through community-driven initiatives 
            and educational programs.
          </motion.p>
        </div>

        {/* Campaign Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{campaign.participants}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{campaign.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-gray-800 mb-3">{campaign.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {campaign.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-green-600">
                    <Target className="h-4 w-4" />
                    <span className="text-sm font-medium">{campaign.impact}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group">
                  <span>Join Campaign</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Educational Resources */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-blue-800 mb-2">Educational Resources</h3>
            <p className="text-gray-600">
              Free materials for schools, educators, and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-blue-600 mb-3">
                  <ExternalLink className="h-6 w-6" />
                </div>
                <h4 className="text-gray-800 mb-2">{resource.title}</h4>
                <p className="text-gray-600 text-sm mb-4">
                  {resource.description}
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  {resource.type}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Access All Resources
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}