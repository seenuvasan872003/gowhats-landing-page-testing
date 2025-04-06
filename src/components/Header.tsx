import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Globe, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { t,i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // 'en' or 'ta'
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.resources'), path: '/resources' },
    { name: t('nav.integration'), path: '/integration' },
    { name: t('nav.documentation'), path: '/documentation' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.pricing'), path: '/price' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                    <MessageSquare className="h-7 w-7 text-[#25D366]" />
                    <span className="text-xl font-bold cursor-pointer" >GoWhats</span>
                </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                    <div key={item.name} className="relative" onMouseEnter={() => setHoveredItem(item.name)} onMouseLeave={() => setHoveredItem(null)} >
                        <button
                            onClick={() => navigate(item.path)}
                            className={`text-sm font-medium transition-colors hover:text-[#25D366] ${
                            location.pathname === item.path ? 'text-[#25D366]' : 'text-gray-600'
                            }`}
                        >
                            {item.name}
                        </button>
                        {hoveredItem === item.name && (
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#25D366]"
                                layoutId="underline"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                style={{ originX: 0.5 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30
                                }}
                            />
                        )}
                    </div>
                </motion.div>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-600 hover:text-[#25D366]">
                  <Globe className="h-5 w-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => switchLanguage('en')}>{t('nav.English')}</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => switchLanguage('ta')}>{t('nav.tamil')}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white/80 backdrop-blur-md shadow-lg md:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-sm font-medium transition-colors hover:text-[#25D366] ${
                      location.pathname === item.path ? 'text-[#25D366]' : 'text-gray-600'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}