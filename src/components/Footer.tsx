import { MessageSquare, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <footer className="bg-white backdrop-blur-md shadow-lg text-black py-16">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-8 w-8 text-[#25D366]" />
              <span className="text-2xl font-bold">GoWhats</span>
            </div>
            <p className="text-gray-400">
              Transform your business with our powerful WhatsApp API solution.
            </p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-[#25D366]">
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-[#25D366]">
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-[#25D366]">
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-[#25D366]">
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Features', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-[#25D366] cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'API Reference', 'Tutorials', 'Case Studies', 'Support'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-[#25D366] cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-400">Subscribe to our newsletter for updates and tips.</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white border-green-400 focus:border-green-500 focus:ring-green-500 text-gray-900"
                aria-label="Email"
              />
              <Button className="bg-[#25D366] hover:bg-[#128C7E]">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} GoWhats. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}