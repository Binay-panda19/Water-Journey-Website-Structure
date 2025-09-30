import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface Fact {
  title: string;
  content: string;
  statistic?: string;
}

interface FactModalProps {
  isOpen: boolean;
  onClose: () => void;
  fact: Fact | null;
}

export default function FactModal({ isOpen, onClose, fact }: FactModalProps) {
  if (!fact) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-blue-200"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-blue-800 pr-4">{fact.title}</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {fact.statistic && (
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-2xl font-bold text-blue-800 mb-1">
                      {fact.statistic}
                    </p>
                  </div>
                )}
                <p className="text-gray-700 leading-relaxed">
                  {fact.content}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={onClose}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue Journey
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}