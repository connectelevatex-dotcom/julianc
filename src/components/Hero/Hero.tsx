import React from 'react';
import { Play } from 'lucide-react';
import { ClientShowcase } from '../ClientShowcase/ClientShowcase';
import { AnimatedSection } from '../ui/animated-section';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero relative z-10 bg-transparent" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text hero-initial-animation">
            <AnimatedSection animationType="fadeUp" delay={0.2} duration={0.8}>
              <div className="hero-badge">
                <span className="badge-text">Professional Video Editor</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="fadeUp" delay={0.4} duration={1.0}>
              <h1 className="hero-title">
                Bringing Your Vision to{' '}
                <span className="hero-title-accent">Life</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animationType="fadeUp" delay={0.6} duration={0.8}>
              <p className="hero-description">
                Professional video editing services based in Germany. 
              </p>
            </AnimatedSection>
            
            <AnimatedSection animationType="fadeUp" delay={0.8} duration={0.8}>
              <div className="hero-actions">
                <button className="hero-cta-primary">
                  <Play size={20} />
                  View Portfolio
                </button>
                <button className="hero-cta-secondary">
                  Book a Call Now
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        <AnimatedSection animationType="fadeUp" delay={1.0} duration={1.0}>
          <ClientShowcase />
        </AnimatedSection>
      </div>
    </section>
  );
};