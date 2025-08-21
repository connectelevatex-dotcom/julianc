import React from 'react';
import { GlowCard } from '../ui/spotlight-card';
import { whyChooseMeFeatures } from '../../data/whyChooseMe';

export const WhyChooseMe: React.FC = () => {
  return (
    <section className="w-full py-20 relative overflow-hidden z-10" id="why-choose-me">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Why Creators Choose Me
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Delivering exceptional video editing services that help content creators grow and succeed
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {whyChooseMeFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <GlowCard
                  key={feature.id}
                  glowColor={feature.glowColor}
                  size="lg"
                  className=""
                >
                  {/* Card Content */}
                  <div className="flex flex-col h-full justify-between">
                    {/* Icon and Title */}
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">
                          {feature.stats}
                        </div>
                        <div className="text-sm text-gray-400 uppercase tracking-wider">
                          {feature.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
    </section>
  );
};