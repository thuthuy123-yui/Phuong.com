import { ExamSet } from '../types/exam';

export const exam5: ExamSet = {
  id: 5,
  title: 'Đề số 5',
  subtitle: 'Paper 1: Listening (20 câu) · Paper 2: Reading (30 câu) & Writing (5 câu + 1 email)',
  listening: {
    durationMinutes: 20,
    part1: [
      {
        number: 1,
        audioTitle: 'Audio 1 – Booking a table',
        audioId: 'booking-table',
        prompt: 'How many people will the changed booking be for?',
        options: [
          { letter: 'A', text: 'Four' },
          { letter: 'B', text: 'Five' },
          { letter: 'C', text: 'Six' },
        ],
        answer: 'C',
      },
      {
        number: 2,
        audioTitle: 'Audio 2 – Finding the library',
        audioId: 'finding-library',
        prompt: 'What is the late return fee?',
        options: [
          { letter: 'A', text: '25 pence a day' },
          { letter: 'B', text: '50 pence a day' },
          { letter: 'C', text: 'One pound a day' },
        ],
        answer: 'B',
      },
      {
        number: 3,
        audioTitle: 'Audio 3 – Shopping for clothes',
        audioId: 'shopping-clothes',
        prompt: 'Can the customer pay by credit card?',
        options: [
          { letter: 'A', text: 'Yes' },
          { letter: 'B', text: 'No' },
          { letter: 'C', text: 'Only with cash' },
        ],
        answer: 'A',
      },
      {
        number: 4,
        audioTitle: 'Audio 4 – Ordering in a café',
        audioId: 'ordering-cafe',
        prompt: 'What does the second customer take away?',
        options: [
          { letter: 'A', text: 'Mint tea and lemon cake' },
          { letter: 'B', text: 'Green tea and a cookie' },
          { letter: 'C', text: 'Orange juice and cake' },
        ],
        answer: 'A',
      },
      {
        number: 5,
        audioTitle: 'Audio 5 – Meeting other students',
        audioId: 'meeting-other-students',
        prompt: 'Where does Robert live?',
        options: [
          { letter: 'A', text: 'Near Glasgow' },
          { letter: 'B', text: 'Near Manchester' },
          { letter: 'C', text: 'Near London' },
        ],
        answer: 'B',
      },
    ],
    part2: {
      audioTitle: 'Audio – Meeting other students',
      audioId: 'meeting-other-students',
      instruction: 'Match each person with the correct information.',
      questions: [
        { number: 6, prompt: 'Cara', answer: 'C' },
        { number: 7, prompt: 'Robert', answer: 'D' },
        { number: 8, prompt: 'Selim', answer: 'E' },
        { number: 9, prompt: 'Robert', answer: 'D' },
        { number: 10, prompt: 'Selim', answer: 'B' },
      ],
      options: [
        { letter: 'A', text: 'Studies history and French' },
        { letter: 'B', text: 'Grew up near London' },
        { letter: 'C', text: 'Is from Glasgow' },
        { letter: 'D', text: 'Studies history and maths' },
        { letter: 'E', text: 'Studies history and German' },
      ],
    },
    part3: {
      audioTitle: 'Audio – Changing plans',
      audioId: 'changing-plans',
      instruction: 'Listen to the conversation and choose the correct answer A, B or C.',
      questions: [
        {
          number: 11,
          prompt: 'Who has the tickets for the play?',
          options: [
            { letter: 'A', text: 'Francesco' },
            { letter: 'B', text: 'Sachi' },
            { letter: 'C', text: 'Neither of them' },
          ],
          answer: 'C',
        },
        {
          number: 12,
          prompt: 'When does Francesco say he can go to the play?',
          options: [
            { letter: 'A', text: 'This Friday' },
            { letter: 'B', text: 'Next Friday' },
            { letter: 'C', text: 'Next Saturday' },
          ],
          answer: 'B',
        },
        {
          number: 13,
          prompt: 'What event does Francesco have this Friday?',
          options: [
            { letter: 'A', text: 'A concert' },
            { letter: 'B', text: 'A family dinner' },
            { letter: 'C', text: 'A theatre show' },
          ],
          answer: 'A',
        },
        {
          number: 14,
          prompt: 'What did Sachi have tickets for two weeks ago?',
          options: [
            { letter: 'A', text: 'A new film' },
            { letter: 'B', text: 'A dance group' },
            { letter: 'C', text: 'A football match' },
          ],
          answer: 'A',
        },
        {
          number: 15,
          prompt: 'What does Sachi ask Francesco to do?',
          options: [
            { letter: 'A', text: 'Buy dinner' },
            { letter: 'B', text: 'Promise to go next Friday' },
            { letter: 'C', text: 'Cancel his concert' },
          ],
          answer: 'B',
        },
      ],
    },
    part4: {
      audioTitle: 'Audio – A request from your boss',
      audioId: 'request-your-boss',
      instruction: 'Listen to the announcement or message and choose the correct answer A, B or C.',
      questions: [
        {
          number: 16,
          prompt: 'Which country does Susanne need to visit?',
          options: [
            { letter: 'A', text: 'France' },
            { letter: 'B', text: 'Germany' },
            { letter: 'C', text: 'Italy' },
          ],
          answer: 'B',
        },
        {
          number: 17,
          prompt: 'Who must Mario contact?',
          options: [
            { letter: 'A', text: 'The customer' },
            { letter: 'B', text: 'The manager' },
            { letter: 'C', text: 'The whole team' },
          ],
          answer: 'A',
        },
        {
          number: 18,
          prompt: 'What should Mario book?',
          options: [
            { letter: 'A', text: 'A restaurant' },
            { letter: 'B', text: 'A meeting room' },
            { letter: 'C', text: 'A hotel' },
          ],
          answer: 'B',
        },
        {
          number: 19,
          prompt: 'What is the report about?',
          options: [
            { letter: 'A', text: 'The customer visit' },
            { letter: 'B', text: 'The new project' },
            { letter: 'C', text: 'The team meeting' },
          ],
          answer: 'B',
        },
        {
          number: 20,
          prompt: 'Is the report urgent?',
          options: [
            { letter: 'A', text: 'Yes, it must be done today' },
            { letter: 'B', text: 'No, it can be done in the next few weeks' },
            { letter: 'C', text: 'Yes, it must be done tomorrow' },
          ],
          answer: 'B',
        },
      ],
    },
  },
  reading: {
    durationMinutes: 70,
    section1: [
      {
        number: 1,
        prompt: 'I have never __________ to Scotland.',
        options: [
          { letter: 'A', text: 'be' },
          { letter: 'B', text: 'been' },
          { letter: 'C', text: 'being' },
          { letter: 'D', text: 'was' },
        ],
        answer: 'B',
      },
      {
        number: 2,
        prompt: 'She bought __________ umbrella yesterday.',
        options: [
          { letter: 'A', text: 'a' },
          { letter: 'B', text: 'an' },
          { letter: 'C', text: 'the' },
          { letter: 'D', text: '–' },
        ],
        answer: 'B',
      },
      {
        number: 3,
        prompt: 'My parents __________ dinner when I arrived.',
        options: [
          { letter: 'A', text: 'have' },
          { letter: 'B', text: 'had' },
          { letter: 'C', text: 'were having' },
          { letter: 'D', text: 'are having' },
        ],
        answer: 'C',
      },
      {
        number: 4,
        prompt: 'There is a supermarket __________ the bank and the café.',
        options: [
          { letter: 'A', text: 'between' },
          { letter: 'B', text: 'among' },
          { letter: 'C', text: 'opposite' },
          { letter: 'D', text: 'through' },
        ],
        answer: 'A',
      },
      {
        number: 5,
        prompt: 'He speaks English very __________.',
        options: [
          { letter: 'A', text: 'good' },
          { letter: 'B', text: 'well' },
          { letter: 'C', text: 'better' },
          { letter: 'D', text: 'best' },
        ],
        answer: 'B',
      },
      {
        number: 6,
        prompt: 'You should __________ a doctor if you feel unwell.',
        options: [
          { letter: 'A', text: 'see' },
          { letter: 'B', text: 'seeing' },
          { letter: 'C', text: 'to see' },
          { letter: 'D', text: 'saw' },
        ],
        answer: 'A',
      },
      {
        number: 7,
        prompt: 'I don’t know __________ she is coming today.',
        options: [
          { letter: 'A', text: 'whether' },
          { letter: 'B', text: 'what' },
          { letter: 'C', text: 'who' },
          { letter: 'D', text: 'where' },
        ],
        answer: 'A',
      },
      {
        number: 8,
        prompt: 'This is the __________ interesting book I have read.',
        options: [
          { letter: 'A', text: 'more' },
          { letter: 'B', text: 'most' },
          { letter: 'C', text: 'much' },
          { letter: 'D', text: 'very' },
        ],
        answer: 'B',
      },
      {
        number: 9,
        prompt: 'They have been waiting __________ two hours.',
        options: [
          { letter: 'A', text: 'since' },
          { letter: 'B', text: 'for' },
          { letter: 'C', text: 'during' },
          { letter: 'D', text: 'from' },
        ],
        answer: 'B',
      },
      {
        number: 10,
        prompt: 'Please turn __________ the lights before you leave.',
        options: [
          { letter: 'A', text: 'on' },
          { letter: 'B', text: 'up' },
          { letter: 'C', text: 'off' },
          { letter: 'D', text: 'over' },
        ],
        answer: 'C',
      },
    ],
    section2: [
      {
        number: 11,
        prompt: 'PLEASE DO NOT FEED THE ANIMALS',
        options: [
          { letter: 'A', text: 'Visitors must not give food to the animals.' },
          { letter: 'B', text: 'Animals are not allowed in this area.' },
          { letter: 'C', text: 'Food is available for visitors.' },
        ],
        answer: 'A',
      },
      {
        number: 12,
        prompt: 'The 10.20 flight is delayed. Please wait for further information.',
        options: [
          { letter: 'A', text: 'The flight has been cancelled.' },
          { letter: 'B', text: 'Passengers should board immediately.' },
          { letter: 'C', text: 'The flight will leave later than planned.' },
        ],
        answer: 'C',
      },
      {
        number: 13,
        prompt: 'Customers with online orders should collect them at the counter.',
        options: [
          { letter: 'A', text: 'Online orders are delivered to customers’ homes.' },
          { letter: 'B', text: 'Go to the counter to get your online purchase.' },
          { letter: 'C', text: 'You must order at the counter.' },
        ],
        answer: 'B',
      },
      {
        number: 14,
        prompt: 'The swimming lesson on Friday is cancelled. All other classes will take place as usual.',
        options: [
          { letter: 'A', text: 'No swimming classes will happen this week.' },
          { letter: 'B', text: 'Only Friday’s swimming lesson will not happen.' },
          { letter: 'C', text: 'Every class has changed its time.' },
        ],
        answer: 'B',
      },
      {
        number: 15,
        prompt: 'To: Mark / I borrowed your dictionary for my exam. I’ll put it back on your desk tomorrow. – Chris',
        options: [
          { letter: 'A', text: 'Chris will return the dictionary tomorrow.' },
          { letter: 'B', text: 'Mark must bring his dictionary to the exam.' },
          { letter: 'C', text: 'Chris has lost Mark’s dictionary.' },
        ],
        answer: 'A',
      },
    ],
    section3: {
      title: 'The Benefits of Volunteering',
      passage:
        'Many young people choose to volunteer in their free time. They may help at an animal centre, visit older people or support events in their local community. Volunteering does not usually bring money, but it offers other valuable experiences. Volunteers can learn practical skills such as teamwork, communication and organisation. They also meet people from different backgrounds and understand more about the needs of their community. Sarah began volunteering at a library when she was sixteen. She helped children choose books and organised activities during the school holidays. At first, she was shy about speaking to strangers, but the work helped her become more confident. She now studies education at college and hopes to work with children in the future. She believes volunteering helped her discover what she wanted to do.',
      questions: [
        {
          number: 16,
          prompt: 'What do volunteers usually receive for their work?',
          options: [
            { letter: 'A', text: 'A high salary' },
            { letter: 'B', text: 'Valuable experiences' },
            { letter: 'C', text: 'Free holidays' },
            { letter: 'D', text: 'School grades' },
          ],
          answer: 'B',
        },
        {
          number: 17,
          prompt: 'Which skill is mentioned in the text?',
          options: [
            { letter: 'A', text: 'Driving' },
            { letter: 'B', text: 'Cooking' },
            { letter: 'C', text: 'Teamwork' },
            { letter: 'D', text: 'Programming' },
          ],
          answer: 'C',
        },
        {
          number: 18,
          prompt: 'Where did Sarah volunteer?',
          options: [
            { letter: 'A', text: 'At an animal centre' },
            { letter: 'B', text: 'At a library' },
            { letter: 'C', text: 'At a hospital' },
            { letter: 'D', text: 'At a sports club' },
          ],
          answer: 'B',
        },
        {
          number: 19,
          prompt: 'How did volunteering change Sarah?',
          options: [
            { letter: 'A', text: 'It made her less interested in books.' },
            { letter: 'B', text: 'It helped her become more confident.' },
            { letter: 'C', text: 'It made her leave college.' },
            { letter: 'D', text: 'It gave her a full-time job.' },
          ],
          answer: 'B',
        },
        {
          number: 20,
          prompt: 'What does Sarah hope to do in the future?',
          options: [
            { letter: 'A', text: 'Work with children' },
            { letter: 'B', text: 'Open a library' },
            { letter: 'C', text: 'Become a writer' },
            { letter: 'D', text: 'Travel around the world' },
          ],
          answer: 'A',
        },
      ],
    },
    section4: {
      instruction: 'Read the text below and fill each blank with ONE suitable word from the box.',
      wordBank: ['who', 'their', 'because', 'also', 'with', 'in', 'many', 'help', 'which', 'more'],
      passageWithBlanks:
        'People often use the internet to find information. It is a useful tool for students {{21}} need to do research. They can read articles, watch lessons and communicate {{22}} teachers. However, it is important to choose reliable websites. Some information may be incorrect {{23}} anyone can publish content online. Students should compare different sources and check the date of publication. The internet can {{24}} people learn new skills, too. There are {{25}} free courses available on different subjects. It is best to study {{26}} a quiet place and avoid distractions. Taking short breaks is {{27}} helpful. Students should protect {{28}} personal information and never share passwords. Used carefully, the internet is a tool {{29}} can make learning easier and give people {{30}} opportunities.',
      answers: {
        21: 'who',
        22: 'with',
        23: 'because',
        24: 'help',
        25: 'many',
        26: 'in',
        27: 'also',
        28: 'their',
        29: 'which',
        30: 'more',
      },
    },
  },
  writing: {
    section1: [
      {
        number: 1,
        original: 'The bag is so expensive that I cannot buy it.',
        starter: 'The bag is too',
        acceptedAnswers: [
          'expensive for me to buy.',
        ],
        modelAnswer: 'The bag is too expensive for me to buy.',
      },
      {
        number: 2,
        original: 'Take a map or you may get lost.',
        starter: 'If',
        acceptedAnswers: [
          'you do not take a map, you may get lost.',
          "you don't take a map, you may get lost.",
        ],
        modelAnswer: "If you don't take a map, you may get lost.",
      },
      {
        number: 3,
        original: 'Nobody in the group is as old as David.',
        starter: 'David is',
        acceptedAnswers: [
          'the oldest in the group.',
          'the oldest person in the group.',
        ],
        modelAnswer: 'David is the oldest (person) in the group.',
      },
      {
        number: 4,
        original: 'She likes travelling by train more than travelling by bus.',
        starter: 'She prefers',
        acceptedAnswers: [
          'travelling by train to travelling by bus.',
          'travelling by train to bus.',
        ],
        modelAnswer: 'She prefers travelling by train to travelling by bus.',
      },
      {
        number: 5,
        original: 'He succeeded in getting a ticket.',
        starter: 'He managed',
        acceptedAnswers: [
          'to get a ticket.',
        ],
        modelAnswer: 'He managed to get a ticket.',
      },
    ],
    section2: {
      prompt: 'Your English friend Alex has asked you about your plans for the weekend. Write an email to Alex.',
      requirements: [
        'say what you are going to do',
        'tell him who you will go with',
        'explain why you are looking forward to it',
      ],
      targetWords: 45,
      sampleAnswer:
        'Hi Alex,\n\nThanks for your email! This weekend, I am going to visit a traditional village near my city. I will go there with my two best friends. I am really looking forward to it because we can take nice photos and try delicious local food.\n\nSee you,\nAn',
    },
  },
};
