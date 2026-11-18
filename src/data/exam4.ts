import { ExamSet } from '../types/exam';

export const exam4: ExamSet = {
  id: 4,
  title: 'Đề số 4',
  subtitle: 'Paper 1: Listening (20 câu) · Paper 2: Reading (30 câu) & Writing (5 câu + 1 email)',
  listening: {
    durationMinutes: 20,
    part1: [
      {
        number: 1,
        audioTitle: 'Audio 1 – Ordering in a café',
        audioId: 'ordering-cafe',
        prompt: 'Which drink does the first customer finally choose?',
        options: [
          { letter: 'A', text: 'Fresh orange juice' },
          { letter: 'B', text: 'Apple juice' },
          { letter: 'C', text: 'Mint tea' },
        ],
        answer: 'B',
      },
      {
        number: 2,
        audioTitle: 'Audio 2 – Shopping for clothes',
        audioId: 'shopping-clothes',
        prompt: 'Where are the changing rooms?',
        options: [
          { letter: 'A', text: 'Behind the customer' },
          { letter: 'B', text: 'Next to the cashier' },
          { letter: 'C', text: 'Upstairs' },
        ],
        answer: 'A',
      },
      {
        number: 3,
        audioTitle: 'Audio 3 – Meeting other students',
        audioId: 'meeting-other-students',
        prompt: 'Which subject does Selim study with history?',
        options: [
          { letter: 'A', text: 'French' },
          { letter: 'B', text: 'Maths' },
          { letter: 'C', text: 'German' },
        ],
        answer: 'C',
      },
      {
        number: 4,
        audioTitle: 'Audio 4 – Booking a table',
        audioId: 'booking-table',
        prompt: 'Where is Jamie’s larger table moved?',
        options: [
          { letter: 'A', text: 'Near the window' },
          { letter: 'B', text: 'Near the kitchen' },
          { letter: 'C', text: 'Outside' },
        ],
        answer: 'B',
      },
      {
        number: 5,
        audioTitle: 'Audio 5 – Meeting a new team member',
        audioId: 'meeting-new-team-member',
        prompt: 'Where is Carla from?',
        options: [
          { letter: 'A', text: 'Brazil' },
          { letter: 'B', text: 'The UK' },
          { letter: 'C', text: 'Canada' },
        ],
        answer: 'A',
      },
    ],
    part2: {
      audioTitle: 'Audio – Meeting a new team member',
      audioId: 'meeting-new-team-member',
      instruction: 'Match each person with the correct information.',
      questions: [
        { number: 6, prompt: 'Peter', answer: 'D' },
        { number: 7, prompt: 'Carla', answer: 'A' },
        { number: 8, prompt: 'Peter', answer: 'B' },
        { number: 9, prompt: 'Carla', answer: 'C' },
        { number: 10, prompt: 'Peter', answer: 'E' },
      ],
      options: [
        { letter: 'A', text: 'Works in marketing' },
        { letter: 'B', text: 'Designs new products' },
        { letter: 'C', text: 'Is from Brazil' },
        { letter: 'D', text: 'Is from the UK' },
        { letter: 'E', text: 'Has worked at the company for three years' },
      ],
    },
    part3: {
      audioTitle: 'Audio – Organising a group project',
      audioId: 'organising-group-project',
      instruction: 'Listen to the conversation and choose the correct answer A, B or C.',
      questions: [
        {
          number: 11,
          prompt: 'Why does Selim want to start the project early?',
          options: [
            { letter: 'A', text: 'He wants to finish before exams' },
            { letter: 'B', text: 'They need enough time' },
            { letter: 'C', text: 'He is free every morning' },
          ],
          answer: 'B',
        },
        {
          number: 12,
          prompt: 'What other project does Robert have?',
          options: [
            { letter: 'A', text: 'A science project' },
            { letter: 'B', text: 'A history project' },
            { letter: 'C', text: 'A maths project' },
          ],
          answer: 'C',
        },
        {
          number: 13,
          prompt: 'Which day suits Cara?',
          options: [
            { letter: 'A', text: 'Wednesday' },
            { letter: 'B', text: 'Thursday' },
            { letter: 'C', text: 'Friday' },
          ],
          answer: 'A',
        },
        {
          number: 14,
          prompt: 'What time can Selim meet?',
          options: [
            { letter: 'A', text: '10 a.m. to 12' },
            { letter: 'B', text: '3 p.m. to 5 p.m.' },
            { letter: 'C', text: 'After 5 p.m.' },
          ],
          answer: 'B',
        },
        {
          number: 15,
          prompt: 'How long will the planning meeting take?',
          options: [
            { letter: 'A', text: 'Less than an hour' },
            { letter: 'B', text: 'Two hours' },
            { letter: 'C', text: 'All afternoon' },
          ],
          answer: 'A',
        },
      ],
    },
    part4: {
      audioTitle: 'Audio – The first English class',
      audioId: 'first-english-class',
      instruction: 'Listen to the announcement or message and choose the correct answer A, B or C.',
      questions: [
        {
          number: 16,
          prompt: 'What time does the class start?',
          options: [
            { letter: 'A', text: '4:00 p.m.' },
            { letter: 'B', text: '4:30 p.m.' },
            { letter: 'C', text: '5:00 p.m.' },
          ],
          answer: 'B',
        },
        {
          number: 17,
          prompt: 'How long is each class?',
          options: [
            { letter: 'A', text: '60 minutes' },
            { letter: 'B', text: '90 minutes' },
            { letter: 'C', text: '120 minutes' },
          ],
          answer: 'B',
        },
        {
          number: 18,
          prompt: 'Where is the teacher’s office?',
          options: [
            { letter: 'A', text: 'Room 13' },
            { letter: 'B', text: 'Office 7B' },
            { letter: 'C', text: 'Office 13' },
          ],
          answer: 'B',
        },
        {
          number: 19,
          prompt: 'When does the course begin?',
          options: [
            { letter: 'A', text: 'March 13' },
            { letter: 'B', text: 'March 20' },
            { letter: 'C', text: 'May 20' },
          ],
          answer: 'A',
        },
        {
          number: 20,
          prompt: 'What kind of book should students buy?',
          options: [
            { letter: 'A', text: 'A photocopy' },
            { letter: 'B', text: 'The teacher’s book' },
            { letter: 'C', text: 'The Level 1 Student’s Book' },
          ],
          answer: 'C',
        },
      ],
    },
  },
  reading: {
    durationMinutes: 70,
    section1: [
      {
        number: 1,
        prompt: 'I __________ to the cinema last night.',
        options: [
          { letter: 'A', text: 'go' },
          { letter: 'B', text: 'went' },
          { letter: 'C', text: 'have gone' },
          { letter: 'D', text: 'going' },
        ],
        answer: 'B',
      },
      {
        number: 2,
        prompt: 'There are not __________ chairs for everyone.',
        options: [
          { letter: 'A', text: 'enough' },
          { letter: 'B', text: 'too' },
          { letter: 'C', text: 'much' },
          { letter: 'D', text: 'little' },
        ],
        answer: 'A',
      },
      {
        number: 3,
        prompt: 'She is taller __________ her brother.',
        options: [
          { letter: 'A', text: 'as' },
          { letter: 'B', text: 'than' },
          { letter: 'C', text: 'then' },
          { letter: 'D', text: 'that' },
        ],
        answer: 'B',
      },
      {
        number: 4,
        prompt: 'I enjoy __________ to music in the evening.',
        options: [
          { letter: 'A', text: 'listen' },
          { letter: 'B', text: 'to listen' },
          { letter: 'C', text: 'listening' },
          { letter: 'D', text: 'listened' },
        ],
        answer: 'C',
      },
      {
        number: 5,
        prompt: 'We will call you when we __________ home.',
        options: [
          { letter: 'A', text: 'get' },
          { letter: 'B', text: 'got' },
          { letter: 'C', text: 'will get' },
          { letter: 'D', text: 'getting' },
        ],
        answer: 'A',
      },
      {
        number: 6,
        prompt: 'He has worked here __________ 2020.',
        options: [
          { letter: 'A', text: 'for' },
          { letter: 'B', text: 'since' },
          { letter: 'C', text: 'during' },
          { letter: 'D', text: 'from' },
        ],
        answer: 'B',
      },
      {
        number: 7,
        prompt: 'This is the book __________ I told you about.',
        options: [
          { letter: 'A', text: 'who' },
          { letter: 'B', text: 'where' },
          { letter: 'C', text: 'which' },
          { letter: 'D', text: 'whose' },
        ],
        answer: 'C',
      },
      {
        number: 8,
        prompt: 'You don’t have __________ money to buy that phone.',
        options: [
          { letter: 'A', text: 'many' },
          { letter: 'B', text: 'enough' },
          { letter: 'C', text: 'few' },
          { letter: 'D', text: 'several' },
        ],
        answer: 'B',
      },
      {
        number: 9,
        prompt: 'The children were excited __________ the school trip.',
        options: [
          { letter: 'A', text: 'about' },
          { letter: 'B', text: 'at' },
          { letter: 'C', text: 'for' },
          { letter: 'D', text: 'with' },
        ],
        answer: 'A',
      },
      {
        number: 10,
        prompt: 'Could you __________ me your pen, please?',
        options: [
          { letter: 'A', text: 'borrow' },
          { letter: 'B', text: 'lend' },
          { letter: 'C', text: 'take' },
          { letter: 'D', text: 'bring' },
        ],
        answer: 'B',
      },
    ],
    section2: [
      {
        number: 11,
        prompt: 'NO ENTRY – EMERGENCY EXIT',
        options: [
          { letter: 'A', text: 'Use this door in an emergency only.' },
          { letter: 'B', text: 'This is the main entrance.' },
          { letter: 'C', text: 'The exit is permanently locked.' },
        ],
        answer: 'A',
      },
      {
        number: 12,
        prompt: 'Please collect your repaired bicycle after 4 p.m.',
        options: [
          { letter: 'A', text: 'The bicycle will be ready before lunch.' },
          { letter: 'B', text: 'You should come after four to get your bicycle.' },
          { letter: 'C', text: 'The shop closes at four.' },
        ],
        answer: 'B',
      },
      {
        number: 13,
        prompt: 'All books on the display table are 20% off this week.',
        options: [
          { letter: 'A', text: 'The books are free this week.' },
          { letter: 'B', text: 'Every book in the shop is cheaper.' },
          { letter: 'C', text: 'Books on this table have a discount.' },
        ],
        answer: 'C',
      },
      {
        number: 14,
        prompt: 'The meeting has been moved from Room 3 to Room 8.',
        options: [
          { letter: 'A', text: 'The meeting will take place in a different room.' },
          { letter: 'B', text: 'The meeting has been cancelled.' },
          { letter: 'C', text: 'Room 8 is not available.' },
        ],
        answer: 'A',
      },
      {
        number: 15,
        prompt: 'To: Paul / Can you water the plants before you leave? I’ll be away until Sunday. – Kate',
        options: [
          { letter: 'A', text: 'Kate wants Paul to take the plants with him.' },
          { letter: 'B', text: 'Paul should look after the plants while Kate is away.' },
          { letter: 'C', text: 'Kate will return before Sunday.' },
        ],
        answer: 'B',
      },
    ],
    section3: {
      title: 'A Day Without a Car',
      passage:
        'Last month, the town of Brookfield organised a day without cars in its centre. The aim was to encourage people to walk, cycle or use public transport. Several main streets were closed to private vehicles from 8 a.m. until 6 p.m. At first, some shop owners worried that fewer customers would visit. However, many people came by bus or bicycle and enjoyed walking around safely. Local groups organised music, street games and a small food market. Families especially liked the quieter streets, and children could ride their bicycles without worrying about traffic. The council collected feedback after the event. Most residents supported doing it again, perhaps once every month. The council is now discussing how to make the town centre safer and cleaner.',
      questions: [
        {
          number: 16,
          prompt: 'What was the aim of the event?',
          options: [
            { letter: 'A', text: 'To sell more cars' },
            { letter: 'B', text: 'To encourage other ways of travelling' },
            { letter: 'C', text: 'To close all the shops' },
            { letter: 'D', text: 'To raise money for schools' },
          ],
          answer: 'B',
        },
        {
          number: 17,
          prompt: 'How long were the streets closed to private cars?',
          options: [
            { letter: 'A', text: 'Eight hours' },
            { letter: 'B', text: 'Ten hours' },
            { letter: 'C', text: 'Twelve hours' },
            { letter: 'D', text: 'All weekend' },
          ],
          answer: 'B',
        },
        {
          number: 18,
          prompt: 'What were some shop owners worried about?',
          options: [
            { letter: 'A', text: 'The weather' },
            { letter: 'B', text: 'The cost of the event' },
            { letter: 'C', text: 'Losing customers' },
            { letter: 'D', text: 'The food market' },
          ],
          answer: 'C',
        },
        {
          number: 19,
          prompt: 'What did families enjoy?',
          options: [
            { letter: 'A', text: 'Quiet streets' },
            { letter: 'B', text: 'Free car parking' },
            { letter: 'C', text: 'Longer shop hours' },
            { letter: 'D', text: 'A new bus station' },
          ],
          answer: 'A',
        },
        {
          number: 20,
          prompt: 'What is the council doing now?',
          options: [
            { letter: 'A', text: 'Planning to remove all buses' },
            { letter: 'B', text: 'Discussing safer and cleaner streets' },
            { letter: 'C', text: 'Building a new shopping centre' },
            { letter: 'D', text: 'Stopping the event permanently' },
          ],
          answer: 'B',
        },
      ],
    },
    section4: {
      instruction: 'Read the text below and fill each blank with ONE suitable word from the box.',
      wordBank: ['their', 'for', 'which', 'and', 'more', 'in', 'because', 'can', 'from', 'also'],
      passageWithBlanks:
        'Public parks are important places in a city. They give people space to relax and enjoy nature. Children {{21}} play, while adults can walk or exercise. Parks are useful {{22}} people of all ages. Trees provide shade and make the air cleaner. Some parks have lakes {{23}} attract birds and other animals. Visitors should keep the area clean {{24}} put rubbish in bins. It is important to protect plants and not damage {{25}}. Parks can become busy {{26}} weekends, especially when the weather is good. Many cities are creating {{27}} green spaces because people need places to spend time outdoors. A park is not only beautiful; it is {{28}} a place where neighbours meet. These public spaces make cities better places to live, so everyone should help look after them {{29}} future generations. Small actions, such as picking up litter, can make a difference {{30}} the community.',
      answers: {
        21: 'can',
        22: 'for',
        23: 'which',
        24: 'and',
        25: 'them',
        26: 'on',
        27: 'more',
        28: 'also',
        29: 'for',
        30: 'in',
      },
      note: 'Lưu ý từ đề gốc: đáp án câu 25 là "them" và câu 26 là "on" (bạn có thể gõ trực tiếp vào ô trống).',
    },
  },
  writing: {
    section1: [
      {
        number: 1,
        original: 'The test was so difficult that I could not finish it.',
        starter: 'The test was too',
        acceptedAnswers: [
          'difficult for me to finish.',
        ],
        modelAnswer: 'The test was too difficult for me to finish.',
      },
      {
        number: 2,
        original: 'Hurry up or we will be late.',
        starter: 'If',
        acceptedAnswers: [
          'we do not hurry up, we will be late.',
          "we don't hurry up, we will be late.",
          'you do not hurry up, we will be late.',
          "you don't hurry up, we will be late.",
        ],
        modelAnswer: "If we don't hurry up, we will be late.",
      },
      {
        number: 3,
        original: 'No other student in the team plays better than Anna.',
        starter: 'Anna',
        acceptedAnswers: [
          'plays the best in the team.',
          'is the best player in the team.',
        ],
        modelAnswer: 'Anna plays the best in the team. (hoặc: Anna is the best player in the team.)',
      },
      {
        number: 4,
        original: 'He likes football more than tennis.',
        starter: 'He prefers',
        acceptedAnswers: [
          'football to tennis.',
        ],
        modelAnswer: 'He prefers football to tennis.',
      },
      {
        number: 5,
        original: 'They succeeded in booking a table.',
        starter: 'They managed',
        acceptedAnswers: [
          'to book a table.',
        ],
        modelAnswer: 'They managed to book a table.',
      },
    ],
    section2: {
      prompt: 'Your English friend Emma wants to visit your town next month. Write an email to Emma.',
      requirements: [
        'suggest a good time to visit',
        'recommend one place to see',
        'tell her how to get there',
      ],
      targetWords: 45,
      sampleAnswer:
        'Hi Emma,\n\nI am so glad you want to visit my town next month! The best time to come is the second weekend when the weather is cool. You should visit the Old Museum. You can take bus number 5 from the station directly there.\n\nBest,\nHoa',
    },
  },
};
