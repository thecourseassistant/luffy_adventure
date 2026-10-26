import React from 'react';

interface DialogueBoxProps {
  speaker: string;
  speakerColor: string;
  dialogue: string;
  onAdvance?: () => void;
  showNextIndicator?: boolean;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({
  speaker,
  speakerColor,
  dialogue,
  onAdvance,
  showNextIndicator = true
}) => {
  return (
    <div
      onClick={onAdvance}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onAdvance) {
          e.preventDefault();
          onAdvance();
        }
      }}
      className="relative w-full max-w-lg sm:max-w-xl mx-auto cursor-pointer select-none focus:outline-none"
    >
      {/* DDLC-Style Character Nameplate Tab */}
      <div
        className="absolute -top-3.5 left-4 sm:left-6 px-4 py-0.5 rounded-t-lg font-bold tracking-wide text-xs sm:text-sm border-t border-x shadow-md z-20 transition-all duration-200"
        style={{
          backgroundColor: '#090d16',
          borderColor: speakerColor || '#ef4444',
          color: speakerColor || '#ef4444'
        }}
      >
        <span>{speaker}</span>
      </div>

      {/* Main Dialogue Box (Clean DDLC visual novel style, no redundant buttons) */}
      <div className="relative bg-slate-950/92 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl min-h-[90px] sm:min-h-[105px] flex flex-col justify-between">
        {/* Dialogue Text */}
        <p className="text-white text-sm sm:text-base leading-relaxed font-medium font-sans pr-4">
          {dialogue}
        </p>

        {/* Discrete subtle visual novel blinker in bottom corner */}
        {showNextIndicator && (
          <div className="self-end text-amber-400 text-xs font-mono animate-bounce opacity-80 pt-1">
            ▼
          </div>
        )}
      </div>
    </div>
  );
};
