import React, { useEffect, useState } from 'react';
import { X, Settings, Shield, Eye, Zap } from 'lucide-react';
import { setCookie, getCookie } from '../../utils/cookieUtils';

interface CookieConsentBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

interface CookieSettings {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
}
const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true, // Always true, cannot be disabled
    functional: false,
    analytics: false,
  });

  useEffect(() => {
    const consent = getCookie('cookie_consent');
    if (consent === null) {
      setIsVisible(true);
    } else if (consent === 'accepted') {
      onAccept();
    } else {
      onDecline();
    }

    // Make openCookieSettings available globally
    window.openCookieSettings = () => {
      setIsVisible(true);
      setShowSettings(true);
    };

    return () => {
      delete window.openCookieSettings;
    };
  }, [onAccept, onDecline]);

  const handleAccept = () => {
    setCookie('cookie_consent', 'accepted', 365);
    setCookie('cookie_settings', JSON.stringify({ necessary: true, functional: true, analytics: true }), 365);
    setIsVisible(false);
    setShowSettings(false);
    onAccept();
  };

  const handleDecline = () => {
    setCookie('cookie_consent', 'declined', 365);
    setCookie('cookie_settings', JSON.stringify({ necessary: true, functional: false, analytics: false }), 365);
    setIsVisible(false);
    setShowSettings(false);
    onDecline();
  };

  const handleSaveSettings = () => {
    const hasAcceptedFunctional = settings.functional || settings.analytics;
    setCookie('cookie_consent', hasAcceptedFunctional ? 'accepted' : 'declined', 365);
    setCookie('cookie_settings', JSON.stringify(settings), 365);
    setIsVisible(false);
    setShowSettings(false);
    
    if (hasAcceptedFunctional) {
      onAccept();
    } else {
      onDecline();
    }
  };

  const handleSettingChange = (key: keyof CookieSettings, value: boolean) => {
    if (key === 'necessary') return; // Cannot change necessary cookies
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 text-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold">
              {showSettings ? 'Cookie-Einstellungen' : 'Cookie-Zustimmung'}
            </h2>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              setShowSettings(false);
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showSettings ? (
            // Main Cookie Banner
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Diese Website verwendet Cookies und ähnliche Technologien, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                Einige Cookies sind technisch notwendig, während andere uns helfen, die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.
              </p>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Eye className="w-4 h-4 mr-2 text-blue-400" />
                  Was wir verwenden:
                </h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• <strong>Technisch notwendige Cookies:</strong> Für die Grundfunktionen der Website</li>
                  <li>• <strong>Calendly:</strong> Für Online-Terminbuchungen (nur mit Ihrer Zustimmung)</li>
                  <li>• <strong>Google Drive:</strong> Für eingebettete Videos (nur mit Ihrer Zustimmung)</li>
                  <li>• <strong>Google Fonts:</strong> Für einheitliche Schriftdarstellung</li>
                </ul>
              </div>

              <p className="text-xs text-gray-400">
                Weitere Informationen finden Sie in unserer{' '}
                <a href="/datenschutz" className="text-blue-400 hover:text-blue-300 underline">
                  Datenschutzerklärung
                </a>
                . Sie können Ihre Einstellungen jederzeit über den Link im Footer ändern.
              </p>
            </div>
          ) : (
            // Detailed Settings
            <div className="space-y-6">
              <p className="text-gray-300">
                Wählen Sie, welche Cookies Sie zulassen möchten. Sie können diese Einstellungen jederzeit ändern.
              </p>

              {/* Necessary Cookies */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-green-400" />
                    <h3 className="font-semibold">Technisch notwendige Cookies</h3>
                  </div>
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Immer aktiv
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-2">
                  Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                </p>
                <p className="text-xs text-gray-400">
                  Zweck: Website-Funktionalität, Sicherheit, Cookie-Einstellungen speichern
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-blue-400" />
                    <h3 className="font-semibold">Funktionale Cookies</h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.functional}
                      onChange={(e) => handleSettingChange('functional', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-300 mb-2">
                  Ermöglichen erweiterte Funktionen wie Online-Terminbuchungen und eingebettete Videos.
                </p>
                <p className="text-xs text-gray-400">
                  Dienste: Calendly (Terminbuchung), Google Drive (Video-Einbettungen)
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-purple-400" />
                    <h3 className="font-semibold">Analyse-Cookies</h3>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.analytics}
                      onChange={(e) => handleSettingChange('analytics', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-300 mb-2">
                  Helfen uns zu verstehen, wie Besucher die Website nutzen, um sie zu verbessern.
                </p>
                <p className="text-xs text-gray-400">
                  Derzeit nicht verwendet - für zukünftige Analysen reserviert
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="border-t border-gray-700 p-6">
          {!showSettings ? (
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              >
                Einstellungen
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              >
                Alle ablehnen
              </button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={handleSaveSettings}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              >
                Einstellungen speichern
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              >
                Zurück
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
