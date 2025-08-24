import React from 'react';
import { Play } from 'lucide-react';
import { ClientShowcase } from '../ClientShowcase/ClientShowcase';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero relative z-10 bg-transparent" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-text">Professional Video Editor</span>
            </div>
            
            <h1 className="hero-title">
              Bringing Your Vision to{' '}
              <span className="hero-title-accent">Life</span>
            </h1>
            
            <p className="hero-description">
              Professional video editing services based in Germany. 
            </p>
            
            <div className="hero-actions">
              <button className="hero-cta-primary">
                <Play size={20} />
                View Portfolio
              </button>
              <button className="hero-cta-secondary">
                Book a Call Now
              </button>
            </div>
          </div>
        </div>
        
        <ClientShowcase />
      </div>
    </section>
  );
};