import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  RotateCcw
} from 'lucide-react';
import { quizData } from '../data/quiz';
import { cn } from '../lib/utils';

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerClick = (optionIdx: number) => {
    if (selectedOption !== null) return;

    setSelectedOption(optionIdx);
    const correct = optionIdx === quizData[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  if (showScore) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 text-center max-w-2xl mx-auto"
      >
        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <Trophy className="w-12 h-12 text-yellow-500" />
        </div>
        <h3 className="text-4xl font-black uppercase tracking-tighter mb-2">Quiz Complete!</h3>
        <p className="text-gray-500 font-medium mb-8">You've mastered the networks!</p>
        
        <div className="text-7xl font-black text-purple-600 mb-12">
          {score} <span className="text-3xl text-gray-300">/ {quizData.length}</span>
        </div>

        <button
          onClick={resetQuiz}
          className="px-10 py-4 bg-purple-600 text-white rounded-full font-bold uppercase tracking-widest hover:bg-purple-700 transition-all shadow-lg flex items-center gap-3 mx-auto"
        >
          <RotateCcw className="w-5 h-5" />
          Try Again
        </button>
      </motion.div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-500 font-bold">Question {currentQuestion + 1} of {quizData.length}</span>
          <h3 className="text-2xl font-bold mt-2">{question.question}</h3>
        </div>
        <div className="flex gap-1">
          {quizData.map((_, idx) => (
            <div 
              key={idx} 
              className={cn(
                "w-8 h-1.5 rounded-full transition-all",
                idx === currentQuestion ? "bg-purple-500 w-12" : idx < currentQuestion ? "bg-purple-200" : "bg-gray-200"
              )}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {question.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrectOption = idx === question.correctAnswer;
          
          let stateClasses = "bg-white/60 border-white/80 hover:bg-white";
          if (selectedOption !== null) {
            if (isCorrectOption) stateClasses = "bg-green-50 border-green-200 text-green-700 ring-4 ring-green-500/10";
            else if (isSelected) stateClasses = "bg-red-50 border-red-200 text-red-700 ring-4 ring-red-500/10";
            else stateClasses = "opacity-40 grayscale";
          }

          return (
            <motion.button
              key={idx}
              whileHover={selectedOption === null ? { x: 10 } : {}}
              onClick={() => handleAnswerClick(idx)}
              disabled={selectedOption !== null}
              className={cn(
                "glass-card p-6 text-left flex items-center justify-between transition-all group",
                stateClasses
              )}
            >
              <span className="text-lg font-medium">{option}</span>
              <AnimatePresence>
                {selectedOption !== null && isCorrectOption && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </motion.div>
                )}
                {selectedOption !== null && isSelected && !isCorrectOption && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <XCircle className="w-6 h-6 text-red-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {isCorrect !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "mt-8 p-4 rounded-2xl text-center font-bold uppercase tracking-widest text-sm",
              isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            )}
          >
            {isCorrect ? "Great Job! Correct!" : "Oops! Not quite right."}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
