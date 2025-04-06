import { motion } from 'framer-motion';
import { Code, Server, Shield, Zap } from 'lucide-react';

export default function Integration() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const steps = [
    {
      icon: Code,
      title: "API Setup",
      description: "Get your API credentials and configure your environment",
    },
    {
      icon: Server,
      title: "Webhook Configuration",
      description: "Set up webhooks to receive real-time message updates",
    },
    {
      icon: Shield,
      title: "Authentication",
      description: "Implement secure authentication for API requests",
    },
    {
      icon: Zap,
      title: "Testing",
      description: "Test your integration in a sandbox environment",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-8"
          >
            Integration Guide
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 text-center mb-12"
          >
            Follow these steps to integrate WhatsApp API into your application
          </motion.p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-[#25D366]/10 p-3 rounded-full">
                    <step.icon className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <a 
              href="#"
              className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1ea855] transition-colors"
            >
              Start Integration
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}