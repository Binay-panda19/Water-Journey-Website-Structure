import { motion } from 'motion/react';
import { Target, Users, Globe, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AboutSection() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: '25,000+',
      label: 'Community Members'
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      number: '50+',
      label: 'Countries Reached'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      number: '200+',
      label: 'Clean-up Events'
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      number: '5M+',
      label: 'Liters Saved'
    }
  ];

  const partners = [
    'UNESCO',
    'WWF',
    'Ocean Conservancy',
    'Water.org',
    'National Geographic'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
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
            About WaterJourney
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We are a global educational initiative dedicated to raising awareness about water pollution 
            and inspiring communities to take action for cleaner water resources.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667673077638-3dbc8f39d357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGNvcmFsJTIwcmVlZiUyMHVuZGVyd2F0ZXJ8ZW58MXx8fHwxNzU5MTQyNDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clean ocean with coral reef"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-blue-200"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-blue-600 mb-1">
                <Globe className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-gray-800">Global Impact</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-blue-800 mb-6">Our Mission</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                WaterJourney was founded with a simple yet powerful vision: to educate people about 
                the critical journey water takes from our taps to the ocean, and how our daily 
                actions impact this precious resource.
              </p>
              <p>
                Through interactive storytelling, community engagement, and educational resources, 
                we empower individuals and communities to understand their role in water conservation 
                and pollution prevention.
              </p>
              <p>
                Our platform combines cutting-edge technology with compelling narratives to make 
                environmental education accessible, engaging, and actionable for people of all ages.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Education First</h4>
                  <p className="text-gray-600 text-sm">
                    Providing scientifically accurate, accessible information about water cycles and pollution.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Community Action</h4>
                  <p className="text-gray-600 text-sm">
                    Connecting like-minded individuals to create lasting environmental change.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-gray-800 mb-8">Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 px-6 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}