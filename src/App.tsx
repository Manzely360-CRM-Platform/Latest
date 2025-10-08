import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import PartnerLogin from './pages/PartnerLogin';
import { AuthProvider, useAuth } from './contexts/AuthContext';

type Page = 'home' | 'login' | 'register' | 'partner-login';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { user, signOut } = useAuth();

  useEffect(() => {
    if (user) {
      setCurrentPage('home');
    }
  }, [user]);

  const handleNavigation = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onNavigate={handleNavigation} onLoginSuccess={handleLoginSuccess} />;
      case 'register':
        return <Register onNavigate={handleNavigation} />;
      case 'partner-login':
        return <PartnerLogin onNavigate={handleNavigation} onLoginSuccess={handleLoginSuccess} />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header onNavigate={handleNavigation} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
