import React, { useState } from 'react';
import { STORY_NODES } from './data/storyNodes';
import { StoryChoice, StoryNode } from './types';
import { DialogueBox } from './components/DialogueBox';
import { ChoiceList } from './components/ChoiceList';
import { TeacherOverviewModal } from './components/TeacherOverviewModal';

export default function App() {
  const [currentNodeId, setCurrentNodeId] = useState<string>('intro');
  const [showChoices, setShowChoices] = useState<boolean>(false);
  const [isTeacherViewOpen, setIsTeacherViewOpen] = useState<boolean>(false);

  const currentNode: StoryNode = STORY_NODES[currentNodeId] || STORY_NODES['intro'];
  const isEnding = !!currentNode.ending;
  const hasChoices = !!(currentNode.choices && currentNode.choices.length > 0);

  const handleSelectChoice = (choice: StoryChoice) => {
    setCurrentNodeId(choice.targetNodeId);
    setShowChoices(false); // Reset choice visibility for the new scene
  };

  // Handler for tapping the dialogue box or down vector
  const handleAdvance = () => {
    if (isEnding) {
      return; // No restart on ending scene
    }

    if (hasChoices) {
      // First click reveals the choices
      if (!showChoices) {
        setShowChoices(true);
      }
    } else if (currentNode.nextId) {
      // Direct narrative sequence progression
      setCurrentNodeId(currentNode.nextId);
      setShowChoices(false);
    }
  };

  const handleJumpToScene = (nodeId: string) => {
    setCurrentNodeId(nodeId);
    setShowChoices(false);
  };

  return (
    <div
      onClick={!showChoices && !isEnding ? handleAdvance : undefined}
      className={`relative w-screen h-[100dvh] overflow-hidden bg-black select-none flex flex-col justify-between font-sans ${
        !showChoices && !isEnding ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      {/* 1. Fullscreen Integrated Anime Scene Image */}
      <img
        src={currentNode.bgImage}
        alt="Visual Novel Scene"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none"
        referrerPolicy="no-referrer"
      />

      {/* Subtle vignette gradient that preserves scene colors while darkening the bottom for dialogue contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/25 pointer-events-none" />

      {/* Top Bar with Minimal Header & Small Teacher View Button */}
      <div className="relative z-20 pt-3 px-4 flex justify-between items-center text-[11px] uppercase tracking-wider font-bold">
        <span className="text-slate-200/90 drop-shadow">One Piece · Jungle Adventure</span>

        {/* Small Teacher View Button on Top Right Corner */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsTeacherViewOpen(true);
          }}
          className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-900/85 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-700/70 transition-colors shadow-md cursor-pointer"
          title="Open Teacher Overview"
        >
          Teacher View
        </button>
      </div>

      {/* Center Zone: PowerPoint Rubber Stamp Effect for Endings */}
      <div className="flex-1 flex items-center justify-center pointer-events-none px-4">
        {isEnding && currentNode.ending && (
          <div className="animate-stamp-slam select-none">
            {currentNode.ending.stampType === 'good' ? (
              /* GOOD ENDING STAMP */
              <div className="border-4 sm:border-[5px] border-emerald-400 bg-emerald-950/75 rounded-2xl p-1.5 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                <div className="border-2 border-dashed border-emerald-400/80 rounded-xl px-5 py-2 sm:px-7 sm:py-3 text-center">
                  <span className="block text-2xl sm:text-4xl font-black tracking-[0.25em] text-emerald-300 font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    GOOD ENDING
                  </span>
                  <span className="block text-[10px] sm:text-xs font-bold tracking-widest text-emerald-200/90 uppercase mt-0.5">
                    {currentNode.ending.title}
                  </span>
                </div>
              </div>
            ) : (
              /* BAD ENDING STAMP */
              <div className="border-4 sm:border-[5px] border-red-500 bg-red-950/75 rounded-2xl p-1.5 shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                <div className="border-2 border-dashed border-red-500/80 rounded-xl px-5 py-2 sm:px-7 sm:py-3 text-center">
                  <span className="block text-2xl sm:text-4xl font-black tracking-[0.25em] text-red-400 font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    BAD ENDING
                  </span>
                  <span className="block text-[10px] sm:text-xs font-bold tracking-widest text-red-200/90 uppercase mt-0.5">
                    {currentNode.ending.title}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 2. Lower Section: Dialogue Box FIRST, then Choices UNDER the dialogue */}
      <div
        className="relative z-30 w-full px-3 sm:px-6 pb-4 sm:pb-6 flex flex-col justify-end gap-2"
        onClick={(e) => e.stopPropagation()} // Keep clicks inside isolated
      >
        {/* Clean DDLC Dialogue Box */}
        <DialogueBox
          speaker={currentNode.speaker}
          speakerColor={currentNode.speakerColor}
          dialogue={currentNode.dialogue}
          onAdvance={!isEnding ? handleAdvance : undefined}
          showNextIndicator={!isEnding && (!hasChoices || !showChoices)}
        />

        {/* Choices placed UNDER the dialogue (revealed on down-vector click) */}
        {hasChoices && showChoices && (
          <ChoiceList
            choices={currentNode.choices!}
            onSelectChoice={handleSelectChoice}
          />
        )}
      </div>

      {/* Teacher Overview Modal with Password Protection (147852) */}
      <TeacherOverviewModal
        isOpen={isTeacherViewOpen}
        onClose={() => setIsTeacherViewOpen(false)}
        onJumpToScene={handleJumpToScene}
        currentNodeId={currentNodeId}
      />
    </div>
  );
}
