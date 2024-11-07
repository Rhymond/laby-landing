import React from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Brain className="h-8 w-8 text-purple-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                  laby.lt
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => handleNavigation('features')} className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                Funkcijos
              </button>
              <button onClick={() => handleNavigation('how-it-works')} className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                Kaip Tai Veikia
              </button>
              <button onClick={() => handleNavigation('activities')} className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                Veiklos
              </button>
              <Link to="/es-parama" className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                ES Parama
              </Link>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                Pradėti
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-600 hover:bg-purple-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <button 
              onClick={() => handleNavigation('features')} 
              className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Funkcijos
            </button>
            <button 
              onClick={() => handleNavigation('how-it-works')} 
              className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Kaip Tai Veikia
            </button>
            <button 
              onClick={() => handleNavigation('activities')} 
              className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Veiklos
            </button>
            <Link 
              to="/es-parama" 
              className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              ES Parama
            </Link>
            <button className="w-full mt-2 bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
              Pradėti
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}