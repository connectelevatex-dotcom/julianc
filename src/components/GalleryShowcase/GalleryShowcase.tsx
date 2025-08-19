import React from 'react';
import { galleryImages } from '../../data/gallery';
import { GalleryCard } from './GalleryCard';
import './GalleryShowcase.css';

export const GalleryShowcase: React.FC = () => {
  const duplicatedImages = [...galleryImages, ...galleryImages]; // Duplicate for infinite scroll

  return (
    <section className="gallery-showcase" aria-label="Our work gallery showcase">
      <div className="gallery-showcase-container">
        <h2 className="gallery-showcase-title">
          Behind the Scenes
        </h2>
        
        <div className="gallery-showcase-wrapper">
          <div className="gallery-showcase-gradient-left" />
          <div className="gallery-showcase-gradient-right" />
          
          <div className="gallery-track">
            {duplicatedImages.map((image, index) => (
              <GalleryCard
                key={`${image.id}-${index}`}
                image={image}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};