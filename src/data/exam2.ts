import { ExamSet } from '../types/exam';

export const exam2: ExamSet = {
  id: 2,
  title: 'Đề số 2',
  subtitle: 'Paper 1: Listening (20 câu) · Paper 2: Reading (30 câu) & Writing (5 câu + 1 email)',
  listening: {
    durationMinutes: 20,
    part1: [
      {
        number: 1,
        audioTitle: 'Audio 1 – Meeting other students',
        audioId: 'meeting-other-students',
        prompt: 'Where is Cara from?',
        options: [
          { letter: 'A', text: 'Glasgow' },
          { letter: 'B', text: 'Manchester' },
          { letter: 'C', text: 'Leeds' },
        ],
        answer: 'A',
      },
      {
        number: 2,
        audioTitle: 'Audio 2 – Booking a table',
        audioId: 'booking-table',
        prompt: 'What time does Jamie finally book the table for?',
        options: [
          { letter: 'A', text: '7:30' },
          { letter: 'B', text: '8:00' },
          { letter: 'C', text: '9:00' },
        ],
        answer: 'A',
      },
      {
        number: 3,
        audioTitle: 'Audio 3 – Shopping for clothes',
        audioId: 'shopping-clothes',
        prompt: 'How much is the jumper?',
        options: [
          { letter: 'A', text: '£19' },
          { letter: 'B', text: '£29' },
          { letter: 'C', text: '£39' },
        ],
        answer: 'B',
      },
      {
        number: 4,
        audioTitle: 'Audio 4 – Ordering in a café',
        audioId: 'ordering-cafe',
        prompt: 'What does the second customer order?',
        options: [
          { letter: 'A', text: 'Green tea and a sandwich' },
          { letter: 'B', text: 'Mint tea and lemon cake' },
          { letter: 'C', text: 'Coffee and a cookie' },
        ],
        answer: 'B',
      },
      {
        number: 5,
        audioTitle: 'Audio 5 – Finding the library',
        audioId: 'finding-library',
        prompt: 'How many books can a student borrow at one time?',
        options: [
          { letter: 'A', text: 'Four' },
          { letter: 'B', text: 'Five' },
          { letter: 'C', text: 'Six' },
        ],
        answer: 'C',
      },
    ],
    part2: {
      audioTitle: 'Audio – Meeting other students',
      audioId: 'meeting-other-students',
      instruction: 'Match each student with the correct information.',
      questions: [
        { number: 6, prompt: 'Cara', answer: 'B' },
        { number: 7, prompt: 'Robert', answer: 'C' },
        { number: 8, prompt: 'Selim', answer: 'A' },
        { number: 9, prompt: 'Robert’s father', answer: 'D' },
        { number: 10, prompt: 'Selim', answer: 'E' },
      ],
      options: [
        { letter: 'A', text: 'Studies history and German' },
        { letter: 'B', text: 'Comes from Glasgow' },
        { letter: 'C', text: 'Studies history and maths' },
        { letter: 'D', text: 'Is from near Manchester' },
        { letter: 'E', text: 'Grew up near London' },
      ],
    },
    part3: {
      audioTitle: 'Audio – Changing plans',
      audioId: 'changing-plans',
      instruction: 'Listen to the conversation and choose the correct answer A, B or C.',
      questions: [
        {
          number: 11,
          prompt: 'What does Sachi plan to buy?',
          options: [
            { letter: 'A', text: 'Tickets for a play' },
            { letter: 'B', text: 'Tickets for a concert' },
            { letter: 'C', text: 'Tickets for a film' },
          ],
          answer: 'A',
        },
        {
          number: 12,
          prompt: 'Why can’t Francesco go to the theatre this Friday?',
          options: [
            { letter: 'A', text: 'He has to work' },
            { letter: 'B', text: 'He has a concert' },
            { letter: 'C', text: 'He is visiting family' },
          ],
          answer: 'B',
        },
        {
          number: 13,
          prompt: 'What did Sachi and Francesco miss two weeks earlier?',
          options: [
            { letter: 'A', text: 'A football match' },
            { letter: 'B', text: 'A dance performance' },
            { letter: 'C', text: 'A school meeting' },
          ],
          answer: 'B',
        },
        {
          number: 14,
          prompt: 'What does Francesco suggest doing before his concert?',
          options: [
            { letter: 'A', text: 'Having dinner' },
            { letter: 'B', text: 'Going shopping' },
            { letter: 'C', text: 'Watching a film' },
          ],
          answer: 'A',
        },
        {
          number: 15,
          prompt: 'When do they agree to see the play?',
          options: [
            { letter: 'A', text: 'This Friday' },
            { letter: 'B', text: 'Next Wednesday' },
            { letter: 'C', text: 'Next Friday' },
          ],
          answer: 'C',
        },
      ],
    },
    part4: {
      audioTitle: 'Audio – A voicemail message',
      audioId: 'voicemail-message',
      instruction: 'Listen to the announcement or message and choose the correct answer A, B or C.',
      questions: [
        {
          number: 16,
          prompt: 'Who is leaving the message?',
          options: [
            { letter: 'A', text: 'Marina Silva' },
            { letter: 'B', text: 'Alex Brown' },
            { letter: 'C', text: 'John Miller' },
          ],
          answer: 'A',
        },
        {
          number: 17,
          prompt: 'Which company is Marina calling from?',
          options: [
            { letter: 'A', text: 'Old Time Books' },
            { letter: 'B', text: 'Old Time Toys' },
            { letter: 'C', text: 'Old Town Travel' },
          ],
          answer: 'B',
        },
        {
          number: 18,
          prompt: 'What information does Marina want?',
          options: [
            { letter: 'A', text: 'Information about new products' },
            { letter: 'B', text: 'A job application' },
            { letter: 'C', text: 'A meeting address' },
          ],
          answer: 'A',
        },
        {
          number: 19,
          prompt: 'What should John send by email?',
          options: [
            { letter: 'A', text: 'A price list only' },
            { letter: 'B', text: 'A brochure and price information' },
            { letter: 'C', text: 'A customer list' },
          ],
          answer: 'B',
        },
        {
          number: 20,
          prompt: 'What is Marina’s phone number area code?',
          options: [
            { letter: 'A', text: '0208' },
            { letter: 'B', text: '0280' },
            { letter: 'C', text: '0820' },
          ],
          answer: 'A',
        },
      ],
    },
  },
  reading: {
    durationMinutes: 70,
    section1: [
      {
        number: 1,
        prompt: 'I usually __________ breakfast at seven.',
        options: [
          { letter: 'A', text: 'have' },
          { letter: 'B', text: 'has' },
          { letter: 'C', text: 'having' },
          { letter: 'D', text: 'had' },
        ],
        answer: 'A',
      },
      {
        number: 2,
        prompt: 'There are __________ apples in the basket.',
        options: [
          { letter: 'A', text: 'any' },
          { letter: 'B', text: 'much' },
          { letter: 'C', text: 'a little' },
          { letter: 'D', text: 'a few' },
        ],
        answer: 'D',
      },
      {
        number: 3,
        prompt: 'She has lived here __________ 2022.',
        options: [
          { letter: 'A', text: 'for' },
          { letter: 'B', text: 'since' },
          { letter: 'C', text: 'from' },
          { letter: 'D', text: 'during' },
        ],
        answer: 'B',
      },
      {
        number: 4,
        prompt: 'This is the __________ restaurant in our town.',
        options: [
          { letter: 'A', text: 'good' },
          { letter: 'B', text: 'better' },
          { letter: 'C', text: 'best' },
          { letter: 'D', text: 'well' },
        ],
        answer: 'C',
      },
      {
        number: 5,
        prompt: 'They __________ TV when I called them.',
        options: [
          { letter: 'A', text: 'watch' },
          { letter: 'B', text: 'watched' },
          { letter: 'C', text: 'were watching' },
          { letter: 'D', text: 'are watching' },
        ],
        answer: 'C',
      },
      {
        number: 6,
        prompt: 'Would you like __________ tea?',
        options: [
          { letter: 'A', text: 'some' },
          { letter: 'B', text: 'any' },
          { letter: 'C', text: 'many' },
          { letter: 'D', text: 'few' },
        ],
        answer: 'A',
      },
      {
        number: 7,
        prompt: 'The train was late, __________ we took a taxi.',
        options: [
          { letter: 'A', text: 'but' },
          { letter: 'B', text: 'so' },
          { letter: 'C', text: 'because' },
          { letter: 'D', text: 'although' },
        ],
        answer: 'B',
      },
      {
        number: 8,
        prompt: 'My sister is afraid __________ dogs.',
        options: [
          { letter: 'A', text: 'at' },
          { letter: 'B', text: 'with' },
          { letter: 'C', text: 'of' },
          { letter: 'D', text: 'for' },
        ],
        answer: 'C',
      },
      {
        number: 9,
        prompt: 'He asked me __________ I was from.',
        options: [
          { letter: 'A', text: 'where' },
          { letter: 'B', text: 'what' },
          { letter: 'C', text: 'which' },
          { letter: 'D', text: 'who' },
        ],
        answer: 'A',
      },
      {
        number: 10,
        prompt: 'You must __________ your homework before dinner.',
        options: [
          { letter: 'A', text: 'finish' },
          { letter: 'B', text: 'finishes' },
          { letter: 'C', text: 'finishing' },
          { letter: 'D', text: 'to finish' },
        ],
        answer: 'A',
      },
    ],
    section2: [
      {
        number: 11,
        prompt: 'STAFF ONLY',
        options: [
          { letter: 'A', text: 'Only employees may enter.' },
          { letter: 'B', text: 'Everyone can enter.' },
          { letter: 'C', text: 'Staff must wait outside.' },
        ],
        answer: 'A',
      },
      {
        number: 12,
        prompt: 'Please switch off your mobile phones during the performance.',
        options: [
          { letter: 'A', text: 'You may use your phone quietly.' },
          { letter: 'B', text: 'Do not use your phone while the show is on.' },
          { letter: 'C', text: 'Phones are available at the entrance.' },
        ],
        answer: 'B',
      },
      {
        number: 13,
        prompt: 'The 8.15 bus to Oxford will leave from Gate 6 today.',
        options: [
          { letter: 'A', text: 'The bus is cancelled.' },
          { letter: 'B', text: 'The bus leaves at a different time.' },
          { letter: 'C', text: 'Passengers should go to Gate 6.' },
        ],
        answer: 'C',
      },
      {
        number: 14,
        prompt: 'Students: The deadline for project work has been extended to 30 April.',
        options: [
          { letter: 'A', text: 'You have more time to finish your project.' },
          { letter: 'B', text: 'Projects are not needed this year.' },
          { letter: 'C', text: 'You must submit your project before April.' },
        ],
        answer: 'A',
      },
      {
        number: 15,
        prompt: 'To: Nina / The supermarket is out of eggs, so please buy some at the shop near the station. – Mum',
        options: [
          { letter: 'A', text: 'Nina should buy eggs at the supermarket.' },
          { letter: 'B', text: 'Mum has already bought eggs.' },
          { letter: 'C', text: 'Nina needs to get eggs somewhere else.' },
        ],
        answer: 'C',
      },
    ],
    section3: {
      title: 'The Community Garden',
      passage:
        'A few years ago, an empty piece of land near Oak Street was full of rubbish. People in the neighbourhood decided to change it into a community garden. They asked the local council for permission and received some money to buy tools and seeds. At first, only six families joined the project. They worked together every Saturday morning, cleaning the ground and building small wooden beds for vegetables. Soon, more neighbours became interested. Today, the garden has flowers, fruit trees and vegetables. Children learn how plants grow, while older people share their gardening experience. The group also gives some of its vegetables to a nearby food centre. The garden has made the area more attractive and helped neighbours become friends.',
      questions: [
        {
          number: 16,
          prompt: 'What was the land like before the project?',
          options: [
            { letter: 'A', text: 'It was a car park.' },
            { letter: 'B', text: 'It was full of rubbish.' },
            { letter: 'C', text: 'It was a playground.' },
            { letter: 'D', text: 'It was a farm.' },
          ],
          answer: 'B',
        },
        {
          number: 17,
          prompt: 'Who gave the group permission to use the land?',
          options: [
            { letter: 'A', text: 'The local council' },
            { letter: 'B', text: 'A school' },
            { letter: 'C', text: 'A shop owner' },
            { letter: 'D', text: 'A nearby family' },
          ],
          answer: 'A',
        },
        {
          number: 18,
          prompt: 'When did the families work together?',
          options: [
            { letter: 'A', text: 'Every Friday evening' },
            { letter: 'B', text: 'Every Sunday' },
            { letter: 'C', text: 'Every Saturday morning' },
            { letter: 'D', text: 'Every afternoon' },
          ],
          answer: 'C',
        },
        {
          number: 19,
          prompt: 'What does the group do with some vegetables?',
          options: [
            { letter: 'A', text: 'Sells them to shops' },
            { letter: 'B', text: 'Gives them to a food centre' },
            { letter: 'C', text: 'Takes them to school' },
            { letter: 'D', text: 'Keeps them for visitors' },
          ],
          answer: 'B',
        },
        {
          number: 20,
          prompt: 'What has the garden done for the neighbourhood?',
          options: [
            { letter: 'A', text: 'Made people move away' },
            { letter: 'B', text: 'Created more traffic' },
            { letter: 'C', text: 'Helped neighbours become friends' },
            { letter: 'D', text: 'Made houses cheaper' },
          ],
          answer: 'C',
        },
      ],
    },
    section4: {
      instruction: 'Read the text below and fill each blank with ONE suitable word from the box.',
      wordBank: ['which', 'because', 'their', 'also', 'in', 'many', 'by', 'and', 'healthy', 'them'],
      passageWithBlanks:
        'Walking is one of the easiest ways to stay {{21}}. It does not cost much money, and almost everyone can do it. People walk {{22}} different reasons. Some walk to work, while others do it {{23}} exercise. Walking outside gives people a chance to enjoy nature. It can {{24}} help reduce stress. You do not need special equipment, but comfortable shoes are important. Try to walk with a friend or listen to music if you enjoy {{25}}. Many people choose a park {{26}} they can see trees and flowers. Start with a short walk and slowly increase the distance. Walking regularly can improve {{27}} health and help people sleep better. It is a simple activity {{28}} can become part of everyday life. Even ten minutes a day is better than doing {{29}} at all. Make a plan and invite {{30}} friends to join you.',
      answers: {
        21: 'healthy',
        22: 'for',
        23: 'for',
        24: 'also',
        25: 'them',
        26: 'because',
        27: 'their',
        28: 'which',
        29: 'nothing',
        30: 'your',
      },
      note: 'Lưu ý từ đề gốc: đáp án câu 22, 23 là "for", câu 29 là "nothing", câu 30 là "your" (bạn có thể gõ trực tiếp vào ô trống).',
    },
  },
  writing: {
    section1: [
      {
        number: 1,
        original: 'The box is too heavy for me to carry.',
        starter: 'I am not',
        acceptedAnswers: [
          'strong enough to carry the box.',
        ],
        modelAnswer: 'I am not strong enough to carry the box.',
      },
      {
        number: 2,
        original: 'He was tired, but he finished his work.',
        starter: 'Although',
        acceptedAnswers: [
          'he was tired, he finished his work.',
        ],
        modelAnswer: 'Although he was tired, he finished his work.',
      },
      {
        number: 3,
        original: 'No city in the country is bigger than this one.',
        starter: 'This is',
        acceptedAnswers: [
          'the biggest city in the country.',
        ],
        modelAnswer: 'This is the biggest city in the country.',
      },
      {
        number: 4,
        original: 'She likes swimming more than running.',
        starter: 'She prefers',
        acceptedAnswers: [
          'swimming to running.',
        ],
        modelAnswer: 'She prefers swimming to running.',
      },
      {
        number: 5,
        original: 'They succeeded in finding the address.',
        starter: 'They managed',
        acceptedAnswers: [
          'to find the address.',
        ],
        modelAnswer: 'They managed to find the address.',
      },
    ],
    section2: {
      prompt: 'Your English friend Lily wants to know about your school. Write an email to Lily.',
      requirements: [
        'describe your school',
        'say what subject you like best',
        'explain why you like it',
      ],
      targetWords: 45,
      sampleAnswer:
        'Hi Lily,\n\nMy school is quite big and modern with a nice library and a sports yard. My favourite subject is English because it helps me communicate with international friends and watch films without subtitles. What is your favourite subject?\n\nBest wishes,\nLinh',
    },
  },
};
