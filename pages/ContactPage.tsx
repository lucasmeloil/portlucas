import React, { useState, useEffect } from 'react';
import { MailIcon, SmartphoneIcon, CheckCircleIcon, AlertTriangleIcon } from '../components/icons';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Hide notification after 5 seconds
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;

    try {
      const response = await fetch("https://formsubmit.co/ajax/lucameloil@pm.me", {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
            setStatus('success');
            form.reset();
        } else {
            setStatus('error');
        }
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const notificationConfig = {
    success: {
      borderColor: 'border-green-500/50',
      textColor: 'text-green-300',
      shadowColor: 'shadow-green-500/20',
      message: 'Email enviado com sucesso!',
      icon: <CheckCircleIcon className="h-5 w-5 mr-3" />,
    },
    error: {
      borderColor: 'border-red-500/50',
      textColor: 'text-red-300',
      shadowColor: 'shadow-red-500/20',
      message: 'Ocorreu um erro. Tente novamente.',
      icon: <AlertTriangleIcon className="h-5 w-5 mr-3" />,
    },
  };

  const currentNotification = (status === 'success' || status === 'error') ? notificationConfig[status] : null;

  return (
    <>
      {currentNotification && (
         <div 
           role="alert"
           aria-live="assertive"
           className={`fixed bottom-24 md:bottom-5 right-5 flex items-center bg-gray-800/90 backdrop-blur-sm border ${currentNotification.borderColor} ${currentNotification.textColor} px-6 py-4 rounded-lg shadow-lg ${currentNotification.shadowColor} animate-fade-in-up z-50`}
         >
           {currentNotification.icon}
           <p className="font-orbitron text-sm">{currentNotification.message}</p>
         </div>
      )}

      <section id="contact" className="max-w-7xl mx-auto animate-fade-in mb-20 md:mb-32">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12 text-center text-shadow-neon-purple">
          Contato
        </h2>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg max-w-4xl mx-auto shadow-lg shadow-purple-500/10 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
          <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="font-orbitron text-xl text-blue-400 mb-2">Vamos conversar</h3>
                <p className="text-gray-400">Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades para fazer parte de suas visões.</p>
            </div>
              <div className="space-y-4">
                <a href="mailto:lucameloil@pm.me" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <MailIcon className="h-5 w-5" />
                  <span>lucameloil@pm.me</span>
                </a>
                  <a href="tel:+5579996125356" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                    <SmartphoneIcon className="h-5 w-5" />
                    <span>(79) 99612-5356</span>
                  </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="Novo Contato do Portfólio!" />
              <input type="hidden" name="_captcha" value="false" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nome</label>
              <input type="text" name="name" id="name" required className="w-full bg-gray-900/70 border border-blue-500/30 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input type="email" name="email" id="email" required className="w-full bg-gray-900/70 border border-blue-500/30 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensagem</label>
              <textarea name="message" id="message" rows={4} required className="w-full bg-gray-900/70 border border-blue-500/30 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full font-orbitron bg-purple-600/50 border border-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-all duration-300 text-shadow-neon-purple shadow-lg hover:shadow-purple-500/40 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-purple-600/50"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </section>
      <footer className="text-center py-8 border-t border-purple-500/20">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Lucas Melo. Todos os direitos reservados.
        </p>
        <p className="text-gray-600 text-sm mt-1">
          Design e Desenvolvimento com um toque futurista.
        </p>
      </footer>
    </>
  );
};

export default ContactPage;