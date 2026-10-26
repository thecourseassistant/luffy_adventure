import { StoryNode } from '../types';

export const STORY_NODES: Record<string, StoryNode> = {
  // SCENE 1: CINEMATIC OPENING (Back of Luffy looking at Emerald Island)
  intro: {
    id: 'intro',
    bgImage: '/src/assets/images/scene_intro_luffy_back_1793009707353.jpg',
    speaker: 'Luffy',
    speakerColor: '#ef4444',
    dialogue: 'YOHOHO! We just landed on Emerald Island! I am going to explore this wild jungle! But first, a smart pirate needs a good tool.',
    nextId: 'choose_tool'
  },

  // SCENE 2: GEAR UP (FIRST CHOICE - TOOL)
  choose_tool: {
    id: 'choose_tool',
    bgImage: '/src/assets/images/scene_luffy_jungle_clean_1793010053521.jpg',
    speaker: 'Luffy',
    speakerColor: '#ef4444',
    dialogue: 'Which tool should I pack into my adventure bag?',
    choices: [
      {
        text: 'Take a strong rope (for climbing trees and cliffs)',
        targetNodeId: 'choose_food'
      },
      {
        text: 'Take a bright torch (for lighting dark places)',
        targetNodeId: 'choose_food'
      },
      {
        text: 'Take a brass compass (for finding the north direction)',
        targetNodeId: 'choose_food'
      }
    ]
  },

  // SCENE 3: FOOD / DRINK
  choose_food: {
    id: 'choose_food',
    bgImage: '/src/assets/images/scene_luffy_jungle_clean_1793010053521.jpg',
    speaker: 'Luffy',
    speakerColor: '#ef4444',
    dialogue: 'Great tool! But wait... my stomach is growling loudly! What food or drink should I pack for lunch?',
    choices: [
      {
        text: 'Pack juicy roast meat on the bone (Luffy\'s favorite food)',
        targetNodeId: 'choose_path'
      },
      {
        text: 'Pack cool coconut water (refreshing drink on a hot day)',
        targetNodeId: 'choose_path'
      },
      {
        text: 'Pack mysterious glowing purple berries (wild jungle fruit)',
        targetNodeId: 'choose_path'
      }
    ]
  },

  // SCENE 4: CHOOSE PATH
  choose_path: {
    id: 'choose_path',
    bgImage: '/src/assets/images/jungle_ancient_ruins_1793007402844.jpg',
    speaker: 'Luffy',
    speakerColor: '#ef4444',
    dialogue: 'Alright, I am all ready! Look ahead, the jungle path divides into three mysterious ways. Which place should we explore first?',
    choices: [
      {
        text: 'Follow the river towards the roaring waterfall',
        targetNodeId: 'path_waterfall'
      },
      {
        text: 'Enter the deep, mysterious ancient cave',
        targetNodeId: 'path_cave'
      },
      {
        text: 'Climb high to the wooden rope bridge in the treetops',
        targetNodeId: 'path_canopy'
      }
    ]
  },

  // ================= BRANCH 1: WATERFALL (NAMI BLENDED) =================
  path_waterfall: {
    id: 'path_waterfall',
    bgImage: '/src/assets/images/scene_waterfall_nami_clean_1793010054468.jpg',
    speaker: 'Nami',
    speakerColor: '#f97316',
    dialogue: 'Luffy! Look at this gorgeous waterfall! My treasure map says ancient temple ruins are hidden right behind these waters. But the rocks are very slippery. What should we do?',
    choices: [
      {
        text: 'Climb the wet rocks carefully together',
        targetNodeId: 'moral_dilemma_waterfall'
      },
      {
        text: 'Search for a secret tunnel under the waterfall mist',
        targetNodeId: 'moral_dilemma_waterfall'
      }
    ]
  },

  moral_dilemma_waterfall: {
    id: 'moral_dilemma_waterfall',
    bgImage: '/src/assets/images/jungle_ancient_ruins_1793007402844.jpg',
    speaker: 'Luffy',
    speakerColor: '#ef4444',
    dialogue: 'Look! Behind the waterfall are the temple ruins! On the left is a shiny golden treasure chest! But on the right, a poor baby jungle animal is trapped in thorny vines, crying for help! What should we do first?',
    choices: [
      {
        text: 'Help the trapped animal first and share our food with it',
        targetNodeId: 'resolve_kindness'
      },
      {
        text: 'Run straight to open the shiny gold chest right now',
        targetNodeId: 'resolve_greed'
      }
    ]
  },

  // ================= BRANCH 2: CAVE (ZORO BLENDED) =================
  path_cave: {
    id: 'path_cave',
    bgImage: '/src/assets/images/scene_cave_zoro_1793009707636.jpg',
    speaker: 'Zoro',
    speakerColor: '#10b981',
    dialogue: 'Oi, Luffy. What took you so long? I have been walking inside this cave for two hours. I am totally NOT lost! The beach is definitely through that dark mossy passage... or maybe that way?',
    choices: [
      {
        text: 'Trust Zoro and follow him deeper into the misty cave',
        targetNodeId: 'zoro_lost_path'
      },
      {
        text: 'Search for sunlight and guide Zoro toward the temple ruins',
        targetNodeId: 'moral_dilemma_cave'
      }
    ]
  },

  zoro_lost_path: {
    id: 'zoro_lost_path',
    bgImage: '/src/assets/images/ending_zoro_lost_clean_1793010055155.jpg',
    speaker: 'Zoro',
    speakerColor: '#10b981',
    dialogue: 'Trust me! A real swordsman never loses his way. Turn left here, then right, then left again! Wait... why are we looking at the exact same giant blue mushroom for the fourth time?',
    choices: [
      {
        text: 'Keep following Zoro with full pirate confidence',
        targetNodeId: 'ending_zoro_lost'
      },
      {
        text: 'Stop, rest, and search for the sunny temple exit together',
        targetNodeId: 'moral_dilemma_cave'
      }
    ]
  },

  moral_dilemma_cave: {
    id: 'moral_dilemma_cave',
    bgImage: '/src/assets/images/scene_cave_zoro_1793009707636.jpg',
    speaker: 'Luffy',
    speakerColor: '#ef4444',
    dialogue: 'We found the cave exit into the ancient ruins! Look, Zoro! A little golden jungle creature is trapped between heavy falling stones. Above it, a pirate chest sparkles with gems! What should we do?',
    choices: [
      {
        text: 'Help the little creature first, share our snack, and lift the heavy stone',
        targetNodeId: 'resolve_kindness'
      },
      {
        text: 'Run straight to open the sparkling treasure chest immediately',
        targetNodeId: 'resolve_greed'
      }
    ]
  },

  // ================= BRANCH 3: CANOPY (CHOPPER BLENDED) =================
  path_canopy: {
    id: 'path_canopy',
    bgImage: '/src/assets/images/scene_canopy_chopper_1793009708735.jpg',
    speaker: 'Chopper',
    speakerColor: '#ec4899',
    dialogue: 'Luffy! Be careful! The wind is blowing on this high rope bridge! I came up into the treetops to search for rare healing herbs. Can you help me cross this bridge?',
    choices: [
      {
        text: 'Hold hands and walk across the swinging rope bridge carefully',
        targetNodeId: 'moral_dilemma_canopy'
      },
      {
        text: 'Swing across like a wild monkey using the giant vines',
        targetNodeId: 'moral_dilemma_canopy'
      }
    ]
  },

  moral_dilemma_canopy: {
    id: 'moral_dilemma_canopy',
    bgImage: '/src/assets/images/scene_canopy_chopper_1793009708735.jpg',
    speaker: 'Chopper',
    speakerColor: '#ec4899',
    dialogue: 'Look across the wooden platform! A wounded golden jungle eagle is tangled in old ropes! It cannot fly! But nearby, an ancient gold chest is resting on a weak branch. If the branch breaks, the gold will fall!',
    choices: [
      {
        text: 'Save the hurt eagle first and feed it our snack to give it strength',
        targetNodeId: 'resolve_kindness'
      },
      {
        text: 'Grab the gold chest before the old branch breaks down',
        targetNodeId: 'resolve_greed'
      }
    ]
  },

  // ================= RESOLUTION: KINDNESS =================
  resolve_kindness: {
    id: 'resolve_kindness',
    bgImage: '/src/assets/images/scene_rescuing_creature_1793010508958.jpg',
    speaker: 'Luffy',
    speakerColor: '#ef4444',
    dialogue: 'I cut the ropes and give the little creature my food! The golden animal eats happily and licks my hand. Suddenly, its fur shines with warm light—it is the magical guardian spirit of Emerald Island!',
    choices: [
      {
        text: 'Laugh out loud and celebrate with our new magical friend',
        targetNodeId: 'ending_feast'
      },
      {
        text: 'Ask our friend to show us the safe path back to the ship',
        targetNodeId: 'ending_guardian'
      }
    ]
  },

  // ================= RESOLUTION: GREED =================
  resolve_greed: {
    id: 'resolve_greed',
    bgImage: '/src/assets/images/scene_luffy_temple_trap_1793010864315.jpg',
    speaker: 'Luffy',
    speakerColor: '#ef4444',
    dialogue: 'I run forward and pull open the heavy gold chest! CLICK! An ancient stone trap is triggered! Giant vines snap shut and a giant stone boulder begins rolling down towards us!',
    choices: [
      {
        text: 'Use your rubber arms to swing high into the trees and escape',
        targetNodeId: 'ending_narrow_escape'
      },
      {
        text: 'Eat those glowing purple berries quickly to get extra running power',
        targetNodeId: 'ending_stomachache'
      }
    ]
  },

  // ================= 5 ENDINGS (VISUAL NOVEL CLIMAX) =================
  ending_feast: {
    id: 'ending_feast',
    bgImage: '/src/assets/images/ending_feast_1793009191397.jpg',
    speaker: 'Luffy',
    speakerColor: '#ef4444',
    dialogue: 'WAHAHAHA! The golden beast led us into the ancient royal banquet hall! Look at all this roast meat, fresh food, and gold! Tonight, the Straw Hats feast!',
    ending: {
      id: 'pirate_king_feast',
      title: 'The Pirate King\'s Golden Feast',
      summary: 'You chose kindness, shared your food, and saved the jungle creature. In return, the magical spirit rewarded Luffy and the crew with the legendary lost banquet!',
      finalDialogue: '"A feast with friends is the best treasure in the whole world! YOHOHO!"',
      speaker: 'Luffy',
      speakerSprite: '',
      stampType: 'good'
    }
  },

  ending_guardian: {
    id: 'ending_guardian',
    bgImage: '/src/assets/images/ending_guardian_1793009191671.jpg',
    speaker: 'Luffy',
    speakerColor: '#ef4444',
    dialogue: 'The gentle golden beast guided us safely to the sunny beach! It gave me a lucky emerald amulet and became our new best friend on Emerald Island!',
    ending: {
      id: 'guardian_friendship',
      title: 'Guardian of the Jungle',
      summary: 'You saved a helpless creature instead of chasing selfish gold. You returned safely to the Thousand Sunny with a loyal friend and a magical amulet.',
      finalDialogue: '"Thank you, little buddy! Kindness made this our most beautiful adventure yet."',
      speaker: 'Luffy',
      speakerSprite: '',
      stampType: 'good'
    }
  },

  ending_narrow_escape: {
    id: 'ending_narrow_escape',
    bgImage: '/src/assets/images/ending_narrow_escape_1793009192260.jpg',
    speaker: 'Luffy',
    speakerColor: '#ef4444',
    dialogue: 'PHEW! That was close! I grabbed a high jungle vine and swung across the canyon just as the giant stone boulder crashed down! We dropped the gold, but we survived!',
    ending: {
      id: 'narrow_escape',
      title: 'A Wild Narrow Escape',
      summary: 'Greed triggered an ancient temple trap! Fast reflexes and brave vine swinging saved the day, but you had to leave the treasure behind.',
      finalDialogue: '"That was dangerous! Next time, I am watching my step before touching shiny chests!"',
      speaker: 'Luffy',
      speakerSprite: '',
      stampType: 'bad'
    }
  },

  ending_zoro_lost: {
    id: 'ending_zoro_lost',
    bgImage: '/src/assets/images/ending_zoro_lost_clean_1793010055155.jpg',
    speaker: 'Zoro',
    speakerColor: '#10b981',
    dialogue: 'Hey Luffy, don\'t look at me like that! I told you, the ship is just over this next hill... wait, why are we back at the exact same glowing mushroom cave again?!',
    ending: {
      id: 'zoro_infinite_loop',
      title: 'Zoro\'s Infinite Direction Loop',
      summary: 'Never let Zoro navigate! You walked in circles until nightfall and missed dinner on the Thousand Sunny ship.',
      finalDialogue: '"The cave moved! I swear the cave moved when we weren\'t looking!"',
      speaker: 'Zoro',
      speakerSprite: '',
      stampType: 'bad'
    }
  },

  ending_stomachache: {
    id: 'ending_stomachache',
    bgImage: '/src/assets/images/ending_stomachache_1793009189517.jpg',
    speaker: 'Chopper',
    speakerColor: '#ec4899',
    dialogue: 'LUFFY! I told you NOT to eat random glowing wild berries! Look at your swollen belly rumbling! Lie down right now while I brew this super bitter medicine potion!',
    ending: {
      id: 'berry_bellyache',
      title: 'The Glowing Berry Bellyache',
      summary: 'Luffy ate suspicious glowing purple berries and got a noisy stomachache in the middle of running from the trap!',
      finalDialogue: '"Drink all of this bitter herbal tea, Luffy! No meat until your tummy stops growling!"',
      speaker: 'Chopper',
      speakerSprite: '',
      stampType: 'bad'
    }
  }
};
