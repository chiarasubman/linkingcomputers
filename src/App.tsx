import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Sparkles,
  Gamepad2,
  BookOpen,
  ArrowRight,
  Circle
} from 'lucide-react';
import { presentationSections, Section, Subsection } from './data/content';
import { Quiz } from './components/Quiz';
import { cn } from './lib/utils';

export default function App() {
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [activeSubsectionIdx, setActiveSubsectionIdx] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);

  const activeSection = presentationSections[activeSectionIdx];
  const activeSubsection = activeSection.subsections[activeSubsectionIdx];

  const nextSubsection = () => {
    if (activeSubsectionIdx < activeSection.subsections.length - 1) {
      setActiveSubsectionIdx(activeSubsectionIdx + 1);
    } else if (activeSectionIdx < presentationSections.length - 1) {
      setActiveSectionIdx(activeSectionIdx + 1);
      setActiveSubsectionIdx(0);
    } else {
      setIsQuizMode(true);
    }
  };

  const prevSubsection = () => {
    if (isQuizMode) {
      setIsQuizMode(false);
    } else if (activeSubsectionIdx > 0) {
      setActiveSubsectionIdx(activeSubsectionIdx - 1);
    } else if (activeSectionIdx > 0) {
      const prevSectionIdx = activeSectionIdx - 1;
      setActiveSectionIdx(prevSectionIdx);
      setActiveSubsectionIdx(presentationSections[prevSectionIdx].subsections.length - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#2D3748] font-sans selection:bg-purple-200">
      {/* Refined Header */}
      <header className="fixed top-0 left-0 right-0 p-6 flex flex-col sm:flex-row justify-between items-center z-40 bg-white/40 backdrop-blur-md border-b border-white/60">
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <div className="w-10 h-10 bg-[#D6BCFA] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight uppercase">Network Masterclass</h1>
            <p className="text-[10px] text-purple-600 font-mono uppercase tracking-widest font-bold opacity-70">Interactive Learning</p>
          </div>
        </div>
        
        <nav className="flex gap-2">
          {presentationSections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSectionIdx(idx);
                setActiveSubsectionIdx(0);
                setIsQuizMode(false);
              }}
              className={cn(
                "nav-button px-4",
                activeSectionIdx === idx && !isQuizMode 
                  ? `${section.color} text-white border-transparent shadow-md` 
                  : "bg-white/50 border-gray-200 hover:bg-white"
              )}
            >
              {section.title}
            </button>
          ))}
          <button
            onClick={() => setIsQuizMode(true)}
            className={cn(
              "nav-button",
              isQuizMode 
                ? "bg-purple-500 text-white border-transparent shadow-md" 
                : "bg-white/50 border-gray-200 hover:bg-white"
            )}
          >
            Quiz
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-32 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {isQuizMode ? (
            <motion.section
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full"
            >
              <div className="text-center mb-12">
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Final Challenge</h2>
                <p className="text-purple-600 font-mono uppercase tracking-widest font-bold">Test your knowledge</p>
              </div>
              <Quiz />
            </motion.section>
          ) : (
            <motion.section
              key={activeSubsection.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-12 items-center max-w-5xl mx-auto w-full"
            >
              {/* Top: Visuals (Always on top) */}
              {activeSubsection.image && (
                <div className="relative w-full group">
                  <div className="relative aspect-video sm:aspect-[21/9] lg:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transition-transform duration-500 group-hover:scale-[1.01]">
                    <img 
                      src={activeSubsection.image} 
                      alt={activeSubsection.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white shadow-lg">
                      <activeSubsection.icon className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  {/* Decorative blobs */}
                  <div className={cn("absolute -top-10 -left-10 w-48 h-48 rounded-full blur-3xl opacity-20", activeSection.color)} />
                  <div className={cn("absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-20", activeSection.color)} />
                </div>
              )}

              {/* Bottom: Information (Always below) */}
              <div className="space-y-10 w-full">
                <div className="space-y-2">
                  <span className={cn("px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white", activeSection.color)}>
                    {activeSection.title}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[1.1] mt-4">
                    {activeSubsection.title}
                  </h2>
                  <p className="text-xl text-purple-600 font-medium italic">
                    {activeSubsection.subtitle}
                  </p>
                </div>

                <div className="space-y-6">
                  {activeSubsection.content.map((block, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="glass-card p-8"
                    >
                      {block.title && (
                        <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                          <Circle className="w-2 h-2 fill-purple-400 text-purple-400" />
                          {block.title}
                        </h3>
                      )}

                      {block.type === 'text' && (
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {block.text}
                        </p>
                      )}

                      {block.type === 'list' && (
                        <div className="space-y-4">
                          {block.items?.map((item, i) => (
                            <div key={i} className="flex gap-4 group">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                              <div>
                                <span className="font-bold text-gray-800 block mb-1">{item.label}</span>
                                <span className="text-sm text-gray-500">{item.description}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {block.type === 'grid' && (
                        <div className="grid sm:grid-cols-2 gap-4">
                          {block.items?.map((item, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/40 border border-white/60 hover:bg-white/80 transition-all">
                              <span className="text-xs font-mono text-purple-500 uppercase tracking-widest block mb-2">{item.label}</span>
                              <p className="text-sm text-gray-600 font-medium">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Refined Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-8 flex flex-col sm:flex-row justify-between items-center z-40 bg-white/40 backdrop-blur-md border-t border-white/60">
        <div className="flex gap-2 mb-4 sm:mb-0">
          {activeSection.subsections.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveSubsectionIdx(idx);
                setIsQuizMode(false);
              }}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all",
                !isQuizMode && activeSubsectionIdx === idx 
                  ? "w-8 bg-purple-500" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={prevSubsection}
            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSubsection}
            className={cn(
              "px-8 h-12 rounded-full text-white font-bold uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg group",
              isQuizMode ? "bg-purple-600" : activeSection.color.replace('bg-', 'bg-')
            )}
          >
            {isQuizMode ? 'Finish' : activeSubsectionIdx === activeSection.subsections.length - 1 ? 'Next Part' : 'Next Slide'}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </footer>
    </div>
  );
}
