// Import required modules and components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoWhatsHomepage from './pages/gowhats-landing-page';
import Contact from './pages/contact';
import Price from'./pages/priceing';
import Blog from'./pages/blog'
import Integration from './pages/Integration';
import Documentation from './pages/Documentation';
import Resources from './pages/Resources';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Include the Header component for navigation */}
        <Header />
        {/* Main content area */}
        <main className="container mx-auto pb-8 pt-16">
          <Routes>
            {/* Define the default route for GoWhats component */}
            <Route path="/" element={<GoWhatsHomepage />} />
              
            {/* Define the route for the Contact component */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/price" element={<Price/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
        </main>
        {/* Footer or additional components can be added here */}
        <Footer />
        {/* Include the Chatbot component for user interaction */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
