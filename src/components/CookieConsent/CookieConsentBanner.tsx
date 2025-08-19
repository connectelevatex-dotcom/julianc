import React, { useEffect, useState } from 'react';
import { setCookie, getCookie } from '../../utils/cookieUtils';

interface CookieConsentBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie('cookie_consent');
    if (consent === null) {
      setIsVisible(true);
    } else if (consent === 'accepted') {
      onAccept();
    } else {
      onDecline();
    }
  }, [onAccept, onDecline]);

  const handleAccept = () => {
    setCookie('cookie_consent', 'accepted', 365);
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    setCookie('cookie_consent', 'declined', 365);
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-lg z-50">
      <p className="text-sm mb-3 md:mb-0 md:mr-4 text-center md:text-left">
        This website uses cookies to ensure you get the best experience. By using our services, you agree to our use of cookies.
        <a href="/datenschutz" className="text-blue-400 hover:underline ml-2">More information</a>
      </p>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
        <button
          onClick={handleAccept}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full md:w-auto"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full md:w-auto"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
