export interface StoryChoice {
  text: string;
  targetNodeId: string;
}

export interface EndingData {
  id: string;
  title: string;
  summary: string;
  finalDialogue: string;
  speaker: string;
  speakerSprite: string;
  stampType: 'good' | 'bad';
}

export interface StoryNode {
  id: string;
  bgImage: string;
  speaker: string;
  speakerColor: string;
  dialogue: string;
  nextId?: string;
  choices?: StoryChoice[];
  ending?: EndingData;
}
