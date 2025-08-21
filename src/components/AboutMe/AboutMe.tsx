import React from 'react';
import './AboutMe.css';
import aboutMeImage from './julian.png'; // Updated path

const AboutMe: React.FC = () => {
  return (
    <section className="about-me-section text-white py-16 md:py-24 relative z-10 bg-transparent" id="about">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-2 px-4">
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={aboutMeImage} 
              alt="About Me" 
              className="w-90 h-90 md:w-[500px] md:h-[500px] rounded-full object-cover shadow-lg border-4 border-gray-700 transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Section: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-blue-400">Julin Design</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              I am a passionate video editor based in Germany, dedicated to bringing stories to life through compelling visual narratives. With years of experience in post-production, I specialize in crafting engaging content for various platforms, from dynamic social media clips to cinematic brand films.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mt-4">
              My goal is to transform raw footage into polished masterpieces that captivate audiences and achieve your communication objectives. Let's create something extraordinary together.
            </p>
          </div>
        </div>
    </section>
  );
};

export default AboutMe;
