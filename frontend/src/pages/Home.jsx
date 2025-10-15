import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Plans from '../components/Plans';
import IPTV from '../components/IPTV';
import AISection from '../components/AISection';
import Values from '../components/Values';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Toaster } from '../components/ui/sonner';

const Home = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add animation classes
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Header />
      <main>
        <Hero />
        <Services />
        <Plans />
        <IPTV />
        <AISection />
        <Values />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
};

export default Home;