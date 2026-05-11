import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

import { AuthProvider } from '../src/context/AuthContext';

// CSS Imports
import '../src/index.css';
import '../src/App.css';
import '../src/styles/aiSeoHero.css';
import '../src/styles/contact.css';
import '../src/styles/ExpertPopup.css';
import '../src/styles/footer.css';
import '../src/styles/growNow.css';
import '../src/styles/hero.css';
import '../src/styles/publishSection.css';
import '../src/components/Solution.module.css';
import '../src/styles/soMuchMore.css';
import '../src/styles/threeSteps.css';
import '../src/styles/WebsiteGrowthSlider.css';
import '../src/styles/AdminDashboard.css';
import '../src/styles/AIOptimizationPage.css';
import '../src/styles/AISoftwareServices.css';
import '../src/styles/AIWebAppPage.css';
import '../src/styles/AIWebsiteDesign.css';
import '../src/styles/AuthFigma.css';
import '../src/styles/CaseStudies.css';
import '../src/styles/ContactPage.css';
import '../src/styles/ContactUs.css';
import '../src/styles/EcommercePage.css';
import '../src/styles/FullStackWebDev.css';
import '../src/styles/googleSearchConsole.css';
import '../src/styles/PrivacyPolicy.css';
import '../src/styles/SEOServices.css';
import '../src/styles/softwareDevelopment.css';
import '../src/styles/TermsConditions.css';
import '../src/styles/UserProfile.css';
import '../src/styles/WebsiteMaintenance.css';

// --- WHATSAPP COMPONENT (Stacked above Top-Arrow) ---
const WhatsAppButton = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .whatsapp-float {
          position: fixed;
          bottom: 110px; /* Moved up to clear your Top-Arrow button */
          right: 30px;
          width: 60px;
          height: 60px;
          background-color: #25d366;
          color: #FFF;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          z-index: 10000;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .whatsapp-float:hover {
          transform: scale(1.1) translateY(-5px);
          background-color: #128c7e;
        }
        .whatsapp-icon {
          width: 35px;
          height: 35px;
          fill: white;
        }
        @media (max-width: 768px) {
          .whatsapp-float {
            bottom: 100px;
            right: 20px;
            width: 55px;
            height: 55px;
          }
          .whatsapp-icon {
            width: 30px;
            height: 30px;
          }
        }
      `}} />
      <a 
        href="https://wa.me/94740309534" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg className="whatsapp-icon" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
};

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon1.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WCJCWD3FXL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WCJCWD3FXL');
        `}
      </Script>
      
      {/* Main Page Content */}
      <Component {...pageProps} />

      {/* Floating WhatsApp Button (Stacked above Top-Arrow) */}
      <WhatsAppButton />
      
    </AuthProvider>
  );
}