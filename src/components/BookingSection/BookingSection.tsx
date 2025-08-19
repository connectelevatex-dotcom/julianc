import React, { useEffect, useContext } from 'react';
import { CookieConsentContext } from '../../App';
import { setCookie } from '../../utils/cookieUtils';

export const BookingSection: React.FC = () => {
  const hasCookieConsent = useContext(CookieConsentContext);

  useEffect(() => {
    if (hasCookieConsent) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [hasCookieConsent]);

  const handleAcceptCookies = () => {
    setCookie('cookie_consent', 'accepted', 365);
    window.location.reload(); // Reload to apply changes
  };

  return (
    <section className="w-full py-20 bg-black" id="booking">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Book a Call
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to take your content to the next level? Schedule a free consultation to discuss your project
          </p>
        </div>

        {/* Calendly Widget Container */}
        <div className="max-w-4xl mx-auto">
          {hasCookieConsent ? (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/editingjulian-studio?hide_landing_page_details=1&hide_gdpr_banner=1" 
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 bg-gray-700 rounded-lg text-center h-[700px]">
              <p className="text-white text-lg mb-4">Please accept cookies to view the booking calendar.</p>
              <button
                onClick={handleAcceptCookies}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Accept Cookies
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};