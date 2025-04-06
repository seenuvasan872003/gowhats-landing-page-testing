import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, ArrowRight, X } from 'lucide-react';

export default function Blog() {
  // const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Communication",
      date: "2024-03-15",
      excerpt: "Exploring how AI and messaging platforms are reshaping how we connect.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
      category: "Technology",
      featured: true
    },
    {
      id: 2,
      title: "Privacy in the Digital Age",
      date: "2024-03-10",
      excerpt: "Understanding modern privacy concerns and how to protect yourself online.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800",
      category: "Security",
      featured: true
    },
    {
      id: 3,
      title: "Business Communication Trends",
      date: "2024-03-05",
      excerpt: "How businesses are adapting to new communication paradigms.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      category: "Business",
      featured: true
    },
    {
      id: 4,
      title: "Messaging Apps Evolution",
      date: "2024-03-01",
      excerpt: "The journey from SMS to modern messaging platforms.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      category: "Technology"
    },
    {
      id: 5,
      title: "Remote Work Communication",
      date: "2024-02-28",
      excerpt: "Best practices for remote team collaboration.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      category: "Work"
    },
    {
      id: 6,
      title: "Digital Wellness",
      date: "2024-02-25",
      excerpt: "Maintaining balance in an always-connected world.",
      image: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80&w=800",
      category: "Lifestyle"
    },
    {
      id: 7,
      title: "Future of Messaging",
      date: "2024-02-20",
      excerpt: "What's next for digital communication platforms.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      category: "Technology"
    },
    {
      id: 8,
      title: "Cross-Platform Integration",
      date: "2024-02-15",
      excerpt: "Connecting different communication tools seamlessly.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      category: "Technology"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  const lastRowPosts = regularPosts.slice(-2);
  const middleRowPosts = regularPosts.slice(0, 4);

  const navItems = [
    { title: "Technology", href: "#" },
    { title: "Business", href: "#" },
    { title: "Security", href: "#" },
    { title: "Tutorials", href: "#" },
    { title: "About", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-green-400 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Blogs</h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-green-200 transition-colors duration-200 font-medium"
                >
                  {item.title}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-green-800 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 py-4 border-t border-green-800"
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block py-2 text-white hover:text-green-200 transition-colors duration-200"
                >
                  {item.title}
                </a>
              ))}
            </motion.nav>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Featured Posts - First Row (3 columns) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {featuredPosts.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"/>
                <span className="absolute bottom-4 left-4 text-white text-sm font-medium bg-green-600 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h2>
                <p className="text-green-700 text-sm mb-3">{post.date}</p>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <button className="inline-flex items-center text-green-600 font-medium group-hover:text-green-700">
                  Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Middle Row (4 columns) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {middleRowPosts.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"/>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-gray-900">{post.title}</h2>
                <p className="text-green-700 text-xs mb-2">{post.date}</p>
                <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Last Row (2 columns) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {lastRowPosts.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group flex md:flex-row flex-col"
            >
              <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent"/>
              </div>
              <div className="p-6 md:w-3/5">
                <span className="text-green-600 text-sm font-medium">{post.category}</span>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">{post.title}</h2>
                <p className="text-green-700 text-sm mb-3">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="inline-flex items-center text-green-600 font-medium group-hover:text-green-700">
                  Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>

    </div>
  );
}