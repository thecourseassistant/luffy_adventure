import React from 'react';
import { StoryChoice } from '../types';

interface ChoiceListProps {
  choices: StoryChoice[];
  onSelectChoice: (choice: StoryChoice) => void;
}

export const ChoiceList: React.FC<ChoiceListProps> = ({
  choices,
  onSelectChoice
}) => {
  return (
    <div className="w-full max-w-lg sm:max-w-xl mx-auto flex flex-col gap-1.5 z-30 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
      {choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => onSelectChoice(choice)}
          className="w-full text-left bg-slate-950/92 hover:bg-slate-900 active:bg-slate-800 border border-amber-400/60 hover:border-amber-400 rounded-xl py-2 px-3.5 text-white active:text-amber-300 font-semibold text-xs sm:text-sm transition-all duration-150 cursor-pointer shadow-lg backdrop-blur-md active:scale-[0.98] flex items-center justify-between gap-2 min-h-[42px]"
        >
          <span className="flex-1 leading-snug">{choice.text}</span>
          <span className="text-amber-400 font-bold shrink-0 text-xs">➔</span>
        </button>
      ))}
    </div>
  );
};
