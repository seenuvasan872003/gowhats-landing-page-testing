'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [vibrate, setVibrate] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Start/restart the 5-minute tooltip timer
  const startTooltipTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
        setVibrate(true);
      }
    }, 5 * 60 * 1000); // 5 minutes
  };

  // Start timer on mount
  useEffect(() => {
    startTooltipTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
    setVibrate(false);

    if (!isOpen) {
      // Chat just opened, stop the timer
      if (timerRef.current) clearTimeout(timerRef.current);
    } else {
      // Chat just closed, restart the timer
      startTooltipTimer();
    }
  };

  const handleCancelTooltip = () => {
    setShowTooltip(false);
    setVibrate(false);
    startTooltipTimer(); // Restart loop
  };

  return (
    <div>
      {/* Floating Chatbot Button and Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center text-sm bg-green-100 text-green-800 px-3 py-2 rounded-lg shadow"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              How can I help you?
              <X
                onClick={handleCancelTooltip}
                className="ml-2 hover:text-red-500 w-4 h-4 cursor-pointer rounded"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileTap={{ scale: 0.95 }}
          animate={vibrate ? { scale: [1, 1.1, 1] } : {}}
          transition={{ repeat: vibrate ? 1 : 0, duration: 0.3 }}
          onClick={handleToggleChat}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl"
        >
          <Bot className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Chatbot Sliding Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 80 }}
            className="fixed top-12 right-0 w-full sm:w-[30%] h-full bg-green-50 border-l border-green-200 shadow-2xl z-40 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 bg-green-500 text-white">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <span className="font-semibold">ChatBot</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleToggleChat}
                className="text-white hover:bg-green-600"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm">
              <div className="bg-green-100 text-green-900 p-3 rounded-lg shadow w-max">
                Hello! 👋 How can I assist you today?
              </div>
              <div className="bg-white border border-green-300 p-3 rounded-lg shadow w-max ml-auto">
                I need help with my order.
              </div>
              <div className="bg-green-100 text-green-900 p-3 rounded-lg shadow w-max">
                Sure! Can you provide your order ID?
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
