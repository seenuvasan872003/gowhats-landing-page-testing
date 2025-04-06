import { motion } from 'framer-motion';
import { BookOpen, Search, Terminal, MessageSquare, Code, Rocket, Book, ArrowRight, Coffee, Zap } from 'lucide-react';

export default function Documentation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const sections = [
    {
      title: "API Reference",
      description: "Complete API documentation with examples",
      icon: Terminal,
    },
    {
      title: "Guides",
      description: "Step-by-step integration guides",
      icon: BookOpen,
    },
    {
      title: "Examples",
      description: "Code examples in multiple languages",
      icon: MessageSquare,
    },
  ];

  const features = [
    {
      icon: Rocket,
      title: "Quick Setup",
      description: "Get started in minutes with our simple setup process"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Instant message delivery with WebSocket support"
    },
    {
      icon: Coffee,
      title: "Developer Friendly",
      description: "Built with developers in mind, easy to integrate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-green-400 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl font-bold mb-6"
            >
              Build with Confidence
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-green-100 mb-8"
            >
              Comprehensive documentation to help you integrate and build amazing applications
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="relative max-w-2xl mx-auto"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Documentation Sections */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-green-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-full inline-block mb-6">
                    <section.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                  <p className="text-gray-600 mb-6">{section.description}</p>
                  <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Start Section */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quick Start Guide</h2>
              <p className="text-gray-600">Get up and running in less than 5 minutes</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 font-mono">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <code className="text-green-400">
                # Install the package<br/>
                npm install @gowhats/api<br/><br/>
                # Initialize the client<br/>
                import &#123; WhatsClient &#125; from '@gowhats/api';<br/>
                const client = new WhatsClient(&#123; apiKey: 'YOUR_API_KEY' &#125;);
              </code>
            </div>
          </motion.div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl border border-green-100"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-green-50 p-3 rounded-lg inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}