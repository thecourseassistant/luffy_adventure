import React, { useState } from 'react';
import { STORY_NODES } from '../data/storyNodes';
import { X, PlayCircle, Lock, KeyRound } from 'lucide-react';

const TEACHER_PASSWORD = '147852';

interface TeacherOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToScene: (nodeId: string) => void;
  currentNodeId: string;
}

export const TeacherOverviewModal: React.FC<TeacherOverviewModalProps> = ({
  isOpen,
  onClose,
  onJumpToScene,
  currentNodeId
}) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === TEACHER_PASSWORD) {
      setIsAuthenticated(true);
      setErrorMsg('');
      setPasswordInput('');
    } else {
      setErrorMsg('Incorrect password. Please try again.');
    }
  };

  const sections = [
    {
      title: 'Act 1: The Island Shore & Gear Up',
      nodeIds: ['intro', 'choose_tool', 'choose_food']
    },
    {
      title: 'Act 2: The Three Jungle Paths',
      nodeIds: ['choose_path', 'path_waterfall', 'path_cave', 'path_canopy']
    },
    {
      title: 'Act 3: Decisions & Dilemmas',
      nodeIds: ['moral_dilemma_waterfall', 'moral_dilemma_cave', 'moral_dilemma_canopy', 'zoro_lost_path']
    },
    {
      title: 'Act 4: Consequences (Kindness vs. Greed)',
      nodeIds: ['resolve_kindness', 'resolve_greed']
    },
    {
      title: 'Act 5: The 5 Story Endings',
      nodeIds: [
        'ending_feast',
        'ending_guardian',
        'ending_narrow_escape',
        'ending_zoro_lost',
        'ending_stomachache'
      ]
    }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold text-amber-400 tracking-tight">
              Teacher Overview
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Password Gate if not yet authenticated */}
        {!isAuthenticated ? (
          <div className="p-6 sm:p-8 flex flex-col items-center justify-center max-w-md mx-auto w-full text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-400">
              <KeyRound className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">
              Enter Teacher Password
            </h4>
            <p className="text-xs text-slate-400 mb-5">
              Please enter the 6-digit password to access the teacher dashboard.
            </p>

            <form onSubmit={handlePasswordSubmit} className="w-full space-y-4">
              <div>
                <input
                  type="password"
                  autoFocus
                  placeholder="Password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  className="w-full text-center tracking-widest text-lg font-mono py-2.5 px-4 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
                />
                {errorMsg && (
                  <p className="text-xs font-semibold text-rose-400 mt-2">
                    {errorMsg}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl transition-colors cursor-pointer shadow-md"
                >
                  Unlock View
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Full Teacher Overview Content */
          <>
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              {sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-1">
                    {section.title}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.nodeIds.map((nodeId) => {
                      const node = STORY_NODES[nodeId];
                      if (!node) return null;
                      const isCurrent = currentNodeId === nodeId;

                      return (
                        <div
                          key={nodeId}
                          className={`relative bg-slate-950/70 border rounded-xl p-3 flex gap-3 transition-all ${
                            isCurrent
                              ? 'border-amber-400 ring-1 ring-amber-400/50'
                              : 'border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {/* Scene Thumbnail */}
                          <img
                            src={node.bgImage}
                            alt={node.speaker}
                            className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-lg shrink-0 border border-slate-800"
                            referrerPolicy="no-referrer"
                          />

                          {/* Scene Details */}
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <span
                                  className="text-xs font-bold"
                                  style={{ color: node.speakerColor || '#ef4444' }}
                                >
                                  {node.speaker}
                                </span>
                                {node.ending ? (
                                  <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.5 rounded font-bold uppercase">
                                    Ending
                                  </span>
                                ) : node.choices && node.choices.length > 0 ? (
                                  <span className="text-[10px] text-sky-400 font-mono">
                                    {node.choices.length} choices
                                  </span>
                                ) : null}
                              </div>

                              <p className="text-xs text-slate-300 line-clamp-3 leading-snug">
                                "{node.dialogue}"
                              </p>
                            </div>

                            {/* Jump button */}
                            <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                              <span className="text-[10px] text-slate-500 font-mono truncate max-w-[120px]">
                                ID: {nodeId}
                              </span>
                              <button
                                onClick={() => {
                                  onJumpToScene(nodeId);
                                  onClose();
                                }}
                                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-amber-400/15 hover:bg-amber-400 text-amber-300 hover:text-slate-950 rounded-lg transition-colors cursor-pointer"
                              >
                                <PlayCircle className="w-3.5 h-3.5" />
                                <span>{isCurrent ? 'Current' : 'Jump'}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-950/80 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Back to Game
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
