import { useState } from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import CheckoutPage from './components/CheckoutPage';

type PageType = 'login' | 'home' | 'checkout';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('login');

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
  };

  switch (currentPage) {
    case 'login':
      return <LoginPage onLoginSuccess={() => navigateTo('home')} />;
    case 'home':
      return <HomePage onNavigateToCheckout={() => navigateTo('checkout')} />;
    case 'checkout':
      return <CheckoutPage onBack={() => navigateTo('home')} />;
    default:
      return <LoginPage onLoginSuccess={() => navigateTo('home')} />;
  }
}