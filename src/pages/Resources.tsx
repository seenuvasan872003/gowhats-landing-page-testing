import { motion } from 'framer-motion';
import { Book, Video, FileText, Code, Users, Rocket, MessageSquare, ArrowRight } from 'lucide-react';

export default function Resources() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of WhatsApp API integration with our comprehensive guide",
      icon: Book,
      link: "#",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000",
      category: "Documentation"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for implementation and advanced features",
      icon: Video,
      link: "#",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000",
      category: "Learning"
    },
    {
      title: "Case Studies",
      description: "Real-world examples and success stories from our partners",
      icon: FileText,
      link: "#",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
      category: "Business"
    }
  ];

  const additionalResources = [
    {
      title: "SDK & Tools",
      description: "Official SDKs and development tools for multiple platforms",
      icon: Code,
      items: ["Node.js SDK", "Python SDK", "Java SDK", "PHP SDK"]
    },
    {
      title: "Community Resources",
      description: "Connect with developers and share knowledge",
      icon: Users,
      items: ["Developer Forum", "GitHub Repositories", "Stack Overflow", "Discord Channel"]
    },
    {
      title: "Integration Guides",
      description: "Detailed guides for specific use cases",
      icon: Rocket,
      items: ["Authentication", "Messaging", "Webhooks", "Media Handling"]
    },
    {
      title: "Support Options",
      description: "Get help when you need it",
      icon: MessageSquare,
      items: ["Documentation", "Community Support", "Premium Support", "Training"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Developer Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build amazing experiences with WhatsApp API
            </p>
          </motion.div>

          {/* Featured Resources Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"/>
                  <span className="absolute bottom-4 left-4 text-white text-sm font-medium bg-green-600 px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <resource.icon className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a 
                    href={resource.link}
                    className="inline-flex items-center text-green-600 font-medium group-hover:text-green-700"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Resources Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalResources.map((resource, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="bg-green-100 p-3 rounded-xl inline-block mb-4">
                  <resource.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <ul className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a 
                        href="#" 
                        className="text-green-600 hover:text-green-700 flex items-center group"
                      >
                        <ArrowRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}