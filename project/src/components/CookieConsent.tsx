import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showManager, setShowManager] = useState(false);
  // Removido o consent, pois não estava sendo usado diretamente

  useEffect(() => {
    const saved = localStorage.getItem('cookieConsent');
    if (!saved) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (choice: string) => {
    localStorage.setItem('cookieConsent', choice);
    setShowBanner(false);
    setShowManager(false);

    if (choice === 'accepted') {
      loadGoogleAnalytics();
    }
  };

  const loadGoogleAnalytics = () => {
    if (window.gtag) return;

    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Y2YL4YK4Z6';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer!.push(args); // 🔧 usada verificação non-null
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-Y2YL4YK4Z6');
    };
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-gray-100 px-6 py-4 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              Utilizamos cookies para melhorar sua experiência. Saiba mais em nossa{' '}
              <a
                href="/politica&privacidade_sbtech.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-purple-400 hover:text-purple-300"
              >
                Política de Privacidade
              </a>.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleConsent('accepted')}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Aceitar
              </button>
              <button
                onClick={() => handleConsent('declined')}
                className="border border-gray-400 text-gray-100 px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Rejeitar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setShowManager(true)}
          className="bg-gray-800 text-gray-200 px-3 py-2 text-xs rounded shadow hover:bg-gray-700 transition"
        >
          Gerenciar Cookies
        </button>
      </div>

      {showManager && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Preferências de Cookies</h2>
            <p className="text-sm text-gray-600 mb-6">
              Você pode aceitar ou rejeitar o uso de cookies neste site. Suas preferências são salvas localmente.
              Veja nossa{' '}
              <a
                href="/politica&privacidade_sbtech.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-purple-500 hover:text-purple-700"
              >
                Política de Privacidade
              </a>.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => handleConsent('accepted')}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Aceitar
              </button>
              <button
                onClick={() => handleConsent('declined')}
                className="border border-gray-400 px-4 py-2 rounded text-gray-700 hover:bg-gray-100 transition"
              >
                Rejeitar
              </button>
              <button
                onClick={() => setShowManager(false)}
                className="text-sm text-gray-400 hover:text-gray-600 transition"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
