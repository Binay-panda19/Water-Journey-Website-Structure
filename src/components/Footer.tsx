import { motion } from 'motion/react';
import { Droplets, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onSectionChange: (section: string) => void;
}

export default function Footer({ onSectionChange }: FooterProps) {
  const navigationLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'journey', label: 'Journey' },
    { id: 'drives', label: 'Drives' },
    { id: 'about', label: 'About' },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Droplets className="h-8 w-8 text-blue-300" />
              <span className="text-xl font-semibold">WaterJourney</span>
            </motion.div>
            
            <motion.p
              className="text-blue-200 mb-6 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Educating communities about water pollution and inspiring action to protect our precious water resources for future generations.
            </motion.p>

            <motion.div
              className="bg-blue-800/50 p-4 rounded-lg border border-blue-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-blue-100 italic text-center">
                "Together, we can make water's journey cleaner."
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div>
            <motion.h4
              className="font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Navigation
            </motion.h4>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onSectionChange(link.id)}
                  className="block text-blue-200 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              className="font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.h4>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 text-blue-200">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@waterjourney.org</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Global Initiative</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-blue-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="flex space-x-4 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.button
                key={index}
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="text-blue-200 text-sm text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>© 2025 WaterJourney. All rights reserved.</p>
            <p className="mt-1">Educational awareness project for water conservation.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}