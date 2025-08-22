import React from 'react';
import './AboutMe.css';
import aboutMeImage from './julian.png'; // Updated path

const AboutMe: React.FC = () => {
  return (
    <section className="about-me-section text-white py-16 md:py-24 relative z-10 bg-transparent" id="about">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img 
              src={aboutMeImage} 
              alt="About Me" 
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] rounded-full object-cover shadow-lg border-4 border-gray-700 transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Section: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-shadow">
              Hi, I'm <span className="text-blue-400">Julin Design</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 mb-4">
              I am a passionate video editor based in Germany, dedicated to bringing stories to life through compelling visual narratives. With years of experience in post-production, I specialize in crafting engaging content for various platforms, from dynamic social media clips to cinematic brand films.
            </p>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300">
              My goal is to transform raw footage into polished masterpieces that captivate audiences and achieve your communication objectives. Let's create something extraordinary together.
            </p>
          </div>
        </div>
    </section>
  );
};

export default AboutMe;
