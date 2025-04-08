import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Globe, Zap, Image as ImageIcon, Webhook, BarChart, MessageCircle, ShoppingCart, Bell } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GowhatsLandingPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleInVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#25D366] text-white py-2 text-center"
        >
          <p className="text-sm">
            {t('banner.liveDemo')}
            <motion.span 
              className="font-bold underline cursor-pointer ml-1"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/contact')}
            >
              {t('banner.bookNow')}
            </motion.span>
          </p>
        </motion.div>
      </AnimatePresence>

      <main>
        <section className="py-20 bg-white text-black relative overflow-hidden">
          <motion.div 
            style={{ opacity }}
            className="absolute inset-0 bg-gradient-to-b from-[#25D366]/10 to-transparent"
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                <div className="block">
                  <span>{t('hero.title.part1')} </span>
                  <span className="text-[#25D366]">{t('hero.title.part2')}</span>
                  <span> {t('hero.title.part3')} </span>
                </div>
                <TypeAnimation
                  sequence={[
                    t('hero.typeAnimation.text1'),
                    2000,
                    t('hero.typeAnimation.text2'),
                    2000,
                  ]}
                  wrapper="span"
                  speed={2}
                  deletionSpeed={1}
                  className="text-[#25D366]"
                  repeat={Infinity}
                />
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-xl mb-8 text-gray-600 leading-relaxed"
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => window.location.href = "https://app.gowhats.in/"} 
                  size="lg" 
                  className="bg-[#25D366] hover:bg-[#000000] text-white transition-all duration-300"
                >
                  {t('hero.button')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="pb-24 bg-gray-50">
          <div className="container w-full mx-auto  lg:px-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative mx-auto w-full  aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 via-white to-gray-50"
            >
              {/* Floating Lucide Icons */}
              <motion.div
                className="z-30 absolute top-4 left-8 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg"
                animate={{ y: [0, -12, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </motion.div>

              <motion.div
                className="z-30 absolute bottom-6 left-6 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg"
                animate={{ y: [0, 12, 0], opacity: [1, 0.8, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <Zap className="w-6 h-6 text-[#25D366]" />
              </motion.div>

              <motion.div
                className="z-30 absolute top-6 right-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg"
                animate={{ y: [0, -14, 0], opacity: [0.9, 1, 0.9] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <ShoppingCart className="w-6 h-6 text-[#25D366]" />
              </motion.div>

              <motion.div
                className="z-30 absolute bottom-10 right-8 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg"
                animate={{ y: [0, 16, 0], opacity: [1, 0.85, 1] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
              >
                <Bell className="w-6 h-6 text-[#25D366]" />
              </motion.div>

              {/* Main Image with Overlay */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-full h-full"
              >
                <img
                  src="https://res.cloudinary.com/dtoul17rs/image/upload/v1731155600/y3cgewysmr6m0ckrxrz0.png"
                  alt="Product Preview"
                  className="w-full h-full object-cover rounded-3xl transition-all duration-700 ease-in-out hover:brightness-110 hover:contrast-105"
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-lg rounded-lg px-5 py-3 shadow-md text-sm font-medium text-[#25D366]">
                  {t('preview')}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#25D366] py-16 mt-[10px]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center"
            >
              {[
                { title: t('stats.companies.title'), subtitle: t('stats.companies.subtitle') },
                { title: t('stats.sales.title'), subtitle: t('stats.sales.subtitle') },
                { title: t('stats.products.title'), subtitle: t('stats.products.subtitle') },
                { title: t('stats.transactions.title'), subtitle: t('stats.transactions.subtitle') },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="text-center text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.title}
                  </motion.div>
                  <p className="text-lg">{item.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 API_Features">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h3 variants={itemVariants} className="text-lg text-center font-bold text-[#25D366] mb-4">
                {t('features.heading')}
              </motion.h3>
              <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
                {t('features.title')}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                {t('features.subtitle')}
              </motion.p>
              <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: MessageSquare, key: 'automation' },
                  { icon: Globe, key: 'language' },
                  { icon: Zap, key: 'ai' },
                  { icon: ImageIcon, key: 'media' },
                  { icon: Webhook, key: 'webhook' },
                  { icon: BarChart, key: 'analytics' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUpVariant}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-500 h-full">
                      <CardHeader>
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.8 }}
                          className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center mb-4"
                        >
                          <feature.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl font-semibold">{t(`features.items.${feature.key}.title`)}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{t(`features.items.${feature.key}.description`)}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h3 variants={itemVariants} className="text-lg text-center font-bold text-[#25D366] mb-4">
                {t('pricing.heading')}
              </motion.h3>
              <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
                {t('pricing.title')}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                {t('pricing.subtitle')}
              </motion.p>
              <motion.div 
                variants={scaleInVariant}
                whileHover={{ scale: 1.02 }}
                className="max-w-md mx-auto"
              >
                <Card className="bg-white shadow-lg border-2 border-[#25D366] transition-all duration-500">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{t('pricing.card.title')}</CardTitle>
                    <p className="text-gray-600">{t('pricing.card.subtitle')}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <motion.p 
                      className="text-4xl font-bold mb-6"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {t('pricing.card.price')} <span className="text-lg font-normal text-gray-600">{t('pricing.card.period')}</span>
                    </motion.p>
                    <ul className="space-y-3 text-left mb-6">
                      <motion.li 
                        className="flex items-center"
                        variants={fadeInUpVariant}
                      >
                        <MessageSquare className="h-5 w-5 mr-2 text-[#25D366]" /> {t('pricing.card.features.messages')}
                      </motion.li>
                      <motion.li 
                        className="flex items-center"
                        variants={fadeInUpVariant}
                      >
                        <Globe className="h-5 w-5 mr-2 text-[#25D366]" /> {t('pricing.card.features.chatbot')}
                      </motion.li>
                      <motion.li 
                        className="flex items-center"
                        variants={fadeInUpVariant}
                      >
                        <Zap className="h-5 w-5 mr-2 text-[#25D366]" /> {t('pricing.card.features.workflows')}
                      </motion.li>
                      <motion.li 
                        className="flex items-center"
                        variants={fadeInUpVariant}
                      >
                        <BarChart className="h-5 w-5 mr-2 text-[#25D366]" /> {t('pricing.card.features.support')}
                      </motion.li>
                    </ul>
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full bg-[#25D366] hover:bg-[#000000] text-white transition-all duration-300"
                      >
                        {t('pricing.card.button')}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
                {t('faq.title')}
              </motion.h2>
              <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {Array.from({ length: 4 }, (_, i) => i).map((index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index + 1}`} 
                      className="border rounded-lg overflow-hidden mb-4"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-colors duration-300 text-left">
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                          {t(`faq.items.${index}.question`)}
                        </motion.span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-white">
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          {t(`faq.items.${index}.answer`)}
                        </motion.p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center bg-[#25D366] rounded-lg p-8 text-white shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <motion.h2 
                className="text-3xl font-bold mb-4"
                variants={fadeInUpVariant}
              >
                {t('cta.title')}
              </motion.h2>
              <motion.p 
                className="text-xl mb-6"
                variants={fadeInUpVariant}
              >
                {t('cta.subtitle')}
              </motion.p>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-[#25D366] hover:bg-gray-100 transition-all duration-300"
                  onClick={() => window.location.href = "https://app.gowhats.in/"}
                >
                  {t('cta.button')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}