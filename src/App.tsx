import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import FooterSection from './components/ui/footer';
import CookieConsentBanner from './components/CookieConsent/CookieConsentBanner';
import { getCookie } from './utils/cookieUtils';
import './App.css';

export const CookieConsentContext = createContext<boolean>(false);

function App() {
  const [cookieConsent, setCookieConsent] = useState<boolean>(false);

  useEffect(() => {
    const consent = getCookie('cookie_consent');
    if (consent === 'accepted') {
      setCookieConsent(true);
    } else {
      setCookieConsent(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    setCookieConsent(true);
  };

  const handleDeclineCookies = () => {
    setCookieConsent(false);
  };

  return (
    <Router>
      <CookieConsentContext.Provider value={cookieConsent}>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
          <FooterSection />
          <CookieConsentBanner onAccept={handleAcceptCookies} onDecline={handleDeclineCookies} />
        </div>
      </CookieConsentContext.Provider>
    </Router>
  );
}

export default App;