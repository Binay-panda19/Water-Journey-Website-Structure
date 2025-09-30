import { useState } from 'react';
import { motion } from 'motion/react';
import { Droplets, Home, ArrowDown, Waves, Fish, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import FactModal from './FactModal';

interface Stage {
  id: string;
  title: string;
  icon: JSX.Element;
  image: string;
  description: string;
  fact: {
    title: string;
    content: string;
    statistic?: string;
  };
}

export default function InteractiveJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const [selectedFact, setSelectedFact] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stages: Stage[] = [
    {
      id: 'tap',
      title: 'Tap',
      icon: <Droplets className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1586427045230-25204a7df680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXVjZXQlMjB0YXAlMjB3YXRlciUyMGZsb3dpbmd8ZW58MXx8fHwxNzU5MTUxNTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Clean water flows from your faucet, beginning its journey.',
      fact: {
        title: 'Precious Resource',
        statistic: 'Only 0.3%',
        content: "Only 0.3% of Earth's freshwater is accessible for human use. Clean water is precious and should never be taken for granted."
      }
    },
    {
      id: 'usage',
      title: 'Usage',
      icon: <Home className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1636514233500-6456deda06ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRyb3BsZXQlMjBjcnlzdGFsJTIwY2xlYXJ8ZW58MXx8fHwxNzU5MTUxNTAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Water is used for cooking, cleaning, bathing, and many daily activities.',
      fact: {
        title: 'Daily Consumption',
        statistic: '100-150 Liters',
        content: "Every person uses 100–150 liters of water daily, and most of it becomes wastewater mixed with soaps, detergents, and industrial chemicals."
      }
    },
    {
      id: 'drain',
      title: 'Drain',
      icon: <ArrowDown className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1722411487131-23bb3ac91df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZXMlMjBkcmFpbmFnZXxlbnwxfHx8fDE3NTkxNTE1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Used water flows through pipes carrying pollutants and chemicals.',
      fact: {
        title: 'Untreated Wastewater',
        statistic: '80%',
        content: "80% of wastewater globally is released into the environment untreated, carrying chemicals from soap, shampoo, and cleaning agents that harm aquatic ecosystems."
      }
    },
    {
      id: 'river',
      title: 'River',
      icon: <Waves className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1749805339958-4b1d0f16423d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xsdXRlZCUyMHJpdmVyJTIwcGxhc3RpYyUyMHdhc3RlfGVufDF8fHx8MTc1OTE1MTUwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Rivers become highways for pollutants, carrying waste toward the ocean.',
      fact: {
        title: 'Plastic Highway',
        statistic: '2 Million Tons',
        content: "Rivers carry nearly 2 million tons of plastic into oceans each year, acting as highways for pollutants to enter marine ecosystems."
      }
    },
    {
      id: 'ocean',
      title: 'Ocean',
      icon: <Fish className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1667673077638-3dbc8f39d357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGNvcmFsJTIwcmVlZiUyMHVuZGVyd2F0ZXJ8ZW58MXx8fHwxNzU5MTQyNDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'The ocean receives all pollution, affecting marine life and coral reefs.',
      fact: {
        title: 'Marine Impact',
        statistic: '100,000+',
        content: "Over 100,000 marine animals die each year due to plastic pollution. By 2050, plastic in oceans may outweigh fish if no action is taken."
      }
    }
  ];

  const openFactModal = (fact: any) => {
    setSelectedFact(fact);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-blue-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            The Water Journey
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Follow a single drop of water on its journey from your tap to the ocean, 
            and discover how pollution affects every stage of the process.
          </motion.p>
        </div>

        {/* Stage Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-4 min-w-max">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                <motion.button
                  onClick={() => setActiveStage(index)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                    activeStage === index
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`mb-2 ${activeStage === index ? 'text-white' : 'text-blue-600'}`}>
                    {stage.icon}
                  </div>
                  <span className="text-sm font-medium">{stage.title}</span>
                </motion.button>
                
                {index < stages.length - 1 && (
                  <ChevronRight className="h-5 w-5 text-gray-400 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Stage Display */}
        <motion.div
          key={activeStage}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-1/2">
              <ImageWithFallback
                src={stages[activeStage].image}
                alt={stages[activeStage].title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {stages[activeStage].icon}
                </div>
                <h3 className="text-blue-800">
                  Stage {activeStage + 1}: {stages[activeStage].title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {stages[activeStage].description}
              </p>

              <motion.button
                onClick={() => openFactModal(stages[activeStage].fact)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2 w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <Droplets className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Timeline Progress */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {stages.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  index <= activeStage ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <FactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fact={selectedFact}
      />
    </section>
  );
}