import { motion } from 'motion/react';
import { ChevronDown, Eye, Route, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onStartJourney: () => void;
}

export default function HeroSection({ onStartJourney }: HeroSectionProps) {
  const highlights = [
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: 'Understand Pollution',
      description: 'Learn how water gets contaminated on its journey'
    },
    {
      icon: <Route className="h-8 w-8 text-blue-600" />,
      title: 'See the Journey',
      description: 'Follow water from your tap to the ocean'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Join the Mission',
      description: 'Be part of the solution to protect our water'
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-sky-200 via-blue-400 to-blue-800">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-24 h-24 bg-white/15 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated water droplet */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1636514233500-6456deda06ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRyb3BsZXQlMjBjcnlzdGFsJTIwY2xlYXJ8ZW58MXx8fHwxNzU5MTUxNTAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Crystal clear water droplet"
                className="w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-white/30"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From Tap to Sea:<br />
            <span className="text-yellow-200">The Journey of Water</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover how water travels, how it gets polluted, and how we can protect it.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={onStartJourney}
            className="bg-white text-blue-800 px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <span>Start the Journey</span>
              <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </div>

        {/* Quick Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-white mb-2">{item.title}</h3>
              <p className="text-blue-100">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="h-8 w-8 text-white/70" />
      </motion.div>
    </section>
  );
}