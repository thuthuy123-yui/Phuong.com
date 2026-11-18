import { ExamSet } from '../types/exam';

export const exam1: ExamSet = {
  id: 1,
  title: 'Đề số 1',
  subtitle: 'Paper 1: Listening (20 câu) · Paper 2: Reading (30 câu) & Writing (5 câu + 1 email)',
  listening: {
    durationMinutes: 20,
    part1: [
      {
        number: 1,
        audioTitle: 'Audio 1 – Booking a table',
        audioId: 'booking-table',
        prompt: 'How many people is Jamie’s original reservation for?',
        options: [
          { letter: 'A', text: 'Two' },
          { letter: 'B', text: 'Four' },
          { letter: 'C', text: 'Six' },
        ],
        answer: 'B',
      },
      {
        number: 2,
        audioTitle: 'Audio 2 – Shopping for clothes',
        audioId: 'shopping-clothes',
        prompt: 'What colour jumper does the customer ask for?',
        options: [
          { letter: 'A', text: 'Black' },
          { letter: 'B', text: 'Blue' },
          { letter: 'C', text: 'Grey' },
        ],
        answer: 'A',
      },
      {
        number: 3,
        audioTitle: 'Audio 3 – Finding the library',
        audioId: 'finding-library',
        prompt: 'Where is the library?',
        options: [
          { letter: 'A', text: 'Opposite the lecture theatre' },
          { letter: 'B', text: 'Next to the registration office' },
          { letter: 'C', text: 'Behind the café' },
        ],
        answer: 'B',
      },
      {
        number: 4,
        audioTitle: 'Audio 4 – Ordering in a café',
        audioId: 'ordering-cafe',
        prompt: 'What does the first customer finally order?',
        options: [
          { letter: 'A', text: 'Orange juice' },
          { letter: 'B', text: 'Mint tea' },
          { letter: 'C', text: 'Apple juice' },
        ],
        answer: 'C',
      },
      {
        number: 5,
        audioTitle: 'Audio 5 – Meeting a new team member',
        audioId: 'meeting-new-team-member',
        prompt: 'Which department does Carla work in?',
        options: [
          { letter: 'A', text: 'Design' },
          { letter: 'B', text: 'Sales' },
          { letter: 'C', text: 'Marketing' },
        ],
        answer: 'C',
      },
    ],
    part2: {
      audioTitle: 'Audio – Business cards',
      audioId: 'business-cards',
      instruction: 'Match each person with the correct information.',
      questions: [
        { number: 6, prompt: 'Peter Miller', answer: 'C' },
        { number: 7, prompt: 'Alessandro Rossi', answer: 'A' },
        { number: 8, prompt: 'Megumi Tanaka', answer: 'D' },
        { number: 9, prompt: 'Andres Mulligan', answer: 'B' },
        {
          number: 10,
          prompt: 'Which person is joining a team for a few months?',
          answer: 'D',
          note: 'Đáp án theo đề gốc: D (Intern in the research and development team — Andres Mulligan).',
        },
      ],
      options: [
        { letter: 'A', text: 'Project leader on a programming project' },
        { letter: 'B', text: 'Intern in the research and development team' },
        { letter: 'C', text: 'Sells medical equipment' },
        { letter: 'D', text: 'Uses the name Meg when working internationally' },
        { letter: 'E', text: 'Peter Miller' },
      ],
    },
    part3: {
      audioTitle: 'Audio – Organising a group project',
      audioId: 'organising-group-project',
      instruction: 'Listen to the conversation and choose the correct answer A, B or C.',
      questions: [
        {
          number: 11,
          prompt: 'When do the students decide to meet?',
          options: [
            { letter: 'A', text: 'Tuesday' },
            { letter: 'B', text: 'Wednesday' },
            { letter: 'C', text: 'Friday' },
          ],
          answer: 'B',
        },
        {
          number: 12,
          prompt: 'What time will they meet?',
          options: [
            { letter: 'A', text: '3 p.m.' },
            { letter: 'B', text: '4 p.m.' },
            { letter: 'C', text: '5 p.m.' },
          ],
          answer: 'B',
        },
        {
          number: 13,
          prompt: 'Where will they meet?',
          options: [
            { letter: 'A', text: 'In the library' },
            { letter: 'B', text: 'In the university café' },
            { letter: 'C', text: 'In the classroom' },
          ],
          answer: 'B',
        },
        {
          number: 14,
          prompt: "Why don't they choose the library?",
          options: [
            { letter: 'A', text: 'It is too far away' },
            { letter: 'B', text: 'They cannot talk there' },
            { letter: 'C', text: 'It closes early' },
          ],
          answer: 'B',
        },
        {
          number: 15,
          prompt: 'When does Robert need to leave?',
          options: [
            { letter: 'A', text: '4:30' },
            { letter: 'B', text: '4:50' },
            { letter: 'C', text: '5:30' },
          ],
          answer: 'B',
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
          prompt: 'What is the teacher’s surname?',
          options: [
            { letter: 'A', text: 'Brown' },
            { letter: 'B', text: 'Black' },
            { letter: 'C', text: 'Blake' },
          ],
          answer: 'B',
        },
        {
          number: 17,
          prompt: 'Where is the classroom?',
          options: [
            { letter: 'A', text: 'Room 13, first floor' },
            { letter: 'B', text: 'Room 7B, second floor' },
            { letter: 'C', text: 'Room 30, ground floor' },
          ],
          answer: 'A',
        },
        {
          number: 18,
          prompt: 'On which days are classes held?',
          options: [
            { letter: 'A', text: 'Tuesday and Thursday' },
            { letter: 'B', text: 'Monday and Wednesday' },
            { letter: 'C', text: 'Monday and Friday' },
          ],
          answer: 'B',
        },
        {
          number: 19,
          prompt: 'When is the teacher’s office hour?',
          options: [
            { letter: 'A', text: 'Friday at 6 p.m.' },
            { letter: 'B', text: 'Wednesday at 4:30 p.m.' },
            { letter: 'C', text: 'Monday at 6 p.m.' },
          ],
          answer: 'A',
        },
        {
          number: 20,
          prompt: 'Which book should students buy?',
          options: [
            { letter: 'A', text: 'Teacher’s Book' },
            { letter: 'B', text: 'Level 2 Student’s Book' },
            { letter: 'C', text: 'Level 1 Student’s Book' },
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
        prompt: 'She decided __________ a new language this year.',
        options: [
          { letter: 'A', text: 'learn' },
          { letter: 'B', text: 'learning' },
          { letter: 'C', text: 'to learn' },
          { letter: 'D', text: 'learned' },
        ],
        answer: 'C',
      },
      {
        number: 2,
        prompt: 'There isn’t __________ milk left in the fridge.',
        options: [
          { letter: 'A', text: 'many' },
          { letter: 'B', text: 'much' },
          { letter: 'C', text: 'few' },
          { letter: 'D', text: 'several' },
        ],
        answer: 'B',
      },
      {
        number: 3,
        prompt: 'My brother is interested __________ photography.',
        options: [
          { letter: 'A', text: 'at' },
          { letter: 'B', text: 'on' },
          { letter: 'C', text: 'in' },
          { letter: 'D', text: 'for' },
        ],
        answer: 'C',
      },
      {
        number: 4,
        prompt: 'We arrived __________ the station before 7 a.m.',
        options: [
          { letter: 'A', text: 'at' },
          { letter: 'B', text: 'in' },
          { letter: 'C', text: 'to' },
          { letter: 'D', text: 'on' },
        ],
        answer: 'A',
      },
      {
        number: 5,
        prompt: 'This exercise is __________ than the last one.',
        options: [
          { letter: 'A', text: 'easy' },
          { letter: 'B', text: 'easier' },
          { letter: 'C', text: 'easiest' },
          { letter: 'D', text: 'more easy' },
        ],
        answer: 'B',
      },
      {
        number: 6,
        prompt: 'You __________ wear a seat belt in a car.',
        options: [
          { letter: 'A', text: 'should' },
          { letter: 'B', text: 'would' },
          { letter: 'C', text: 'couldn’t' },
          { letter: 'D', text: 'might not' },
        ],
        answer: 'A',
      },
      {
        number: 7,
        prompt: 'I haven’t seen Mary __________ last Monday.',
        options: [
          { letter: 'A', text: 'for' },
          { letter: 'B', text: 'since' },
          { letter: 'C', text: 'during' },
          { letter: 'D', text: 'from' },
        ],
        answer: 'B',
      },
      {
        number: 8,
        prompt: 'The film was so __________ that everyone laughed.',
        options: [
          { letter: 'A', text: 'bored' },
          { letter: 'B', text: 'boring' },
          { letter: 'C', text: 'funny' },
          { letter: 'D', text: 'tired' },
        ],
        answer: 'C',
      },
      {
        number: 9,
        prompt: 'Could you tell me __________ the nearest bank is?',
        options: [
          { letter: 'A', text: 'what' },
          { letter: 'B', text: 'where' },
          { letter: 'C', text: 'who' },
          { letter: 'D', text: 'which' },
        ],
        answer: 'B',
      },
      {
        number: 10,
        prompt: 'He is good __________ playing the guitar.',
        options: [
          { letter: 'A', text: 'in' },
          { letter: 'B', text: 'for' },
          { letter: 'C', text: 'at' },
          { letter: 'D', text: 'with' },
        ],
        answer: 'C',
      },
    ],
    section2: [
      {
        number: 11,
        prompt: 'KEEP THE DOOR CLOSED',
        options: [
          { letter: 'A', text: 'You should not open this door.' },
          { letter: 'B', text: 'The door is always locked.' },
          { letter: 'C', text: 'You must close the door after entering.' },
        ],
        answer: 'A',
      },
      {
        number: 12,
        prompt: 'Tickets must be bought online before Friday.',
        options: [
          { letter: 'A', text: 'You can buy tickets at the door on Friday.' },
          { letter: 'B', text: 'Buy your ticket on the internet by Thursday.' },
          { letter: 'C', text: 'Tickets are free on Friday.' },
        ],
        answer: 'B',
      },
      {
        number: 13,
        prompt: 'Library users: Return all books to the desk, not the shelves.',
        options: [
          { letter: 'A', text: 'Put books back where you found them.' },
          { letter: 'B', text: 'Give books to a member of staff.' },
          { letter: 'C', text: 'Take books home before returning them.' },
        ],
        answer: 'B',
      },
      {
        number: 14,
        prompt: 'The café will close early today because of a private event.',
        options: [
          { letter: 'A', text: 'The café is not open today.' },
          { letter: 'B', text: 'Customers must leave earlier than usual.' },
          { letter: 'C', text: 'There is a special public event today.' },
        ],
        answer: 'B',
      },
      {
        number: 15,
        prompt: 'To: Sam / I’m running late. Please start dinner without me. I’ll be home around eight. – Dad',
        options: [
          { letter: 'A', text: 'Dad wants Sam to wait for him.' },
          { letter: 'B', text: 'Dad will not have dinner at home.' },
          { letter: 'C', text: 'Sam should eat before Dad arrives.' },
        ],
        answer: 'C',
      },
    ],
    section3: {
      title: 'A New Hobby',
      passage:
        'When Mia moved to a new town, she did not know many people. At first, she spent most evenings at home watching television. One day, she saw a notice about a photography club at the local library. She had always enjoyed taking pictures with her phone, so she decided to join. The club met every Wednesday evening. Members went on short walks, shared their photographs and learned how to use cameras. Mia was nervous at her first meeting, but everyone was friendly. An older member showed her how to take better pictures in low light. After a few months, Mia entered a local photo competition and won second prize. More importantly, she made several good friends and began to explore places around her new town. She now believes that trying something new can make a big difference.',
      questions: [
        {
          number: 16,
          prompt: 'Why did Mia join the photography club?',
          options: [
            { letter: 'A', text: 'She wanted to buy a camera.' },
            { letter: 'B', text: 'She was interested in taking pictures.' },
            { letter: 'C', text: 'Her friend asked her to join.' },
            { letter: 'D', text: 'She needed a job at the library.' },
          ],
          answer: 'B',
        },
        {
          number: 17,
          prompt: 'How often did the club meet?',
          options: [
            { letter: 'A', text: 'Every day' },
            { letter: 'B', text: 'Every Monday' },
            { letter: 'C', text: 'Every Wednesday' },
            { letter: 'D', text: 'Every month' },
          ],
          answer: 'C',
        },
        {
          number: 18,
          prompt: 'What did Mia learn at her first meetings?',
          options: [
            { letter: 'A', text: 'How to repair a phone' },
            { letter: 'B', text: 'How to take photos in low light' },
            { letter: 'C', text: 'How to enter a competition' },
            { letter: 'D', text: 'How to teach photography' },
          ],
          answer: 'B',
        },
        {
          number: 19,
          prompt: 'What happened after a few months?',
          options: [
            { letter: 'A', text: 'She opened a photo shop.' },
            { letter: 'B', text: 'She moved to another town.' },
            { letter: 'C', text: 'She won second prize in a competition.' },
            { letter: 'D', text: 'She stopped going to the club.' },
          ],
          answer: 'C',
        },
        {
          number: 20,
          prompt: 'What is the main idea of the text?',
          options: [
            { letter: 'A', text: 'A hobby can help people learn and make friends.' },
            { letter: 'B', text: 'Photography is an expensive hobby.' },
            { letter: 'C', text: 'Libraries should organise competitions.' },
            { letter: 'D', text: 'Moving to a new town is always difficult.' },
          ],
          answer: 'A',
        },
      ],
    },
    section4: {
      instruction: 'Read the text below and fill each blank with ONE suitable word from the box.',
      wordBank: ['because', 'also', 'when', 'their', 'with', 'many', 'learn', 'about', 'and', 'for'],
      passageWithBlanks:
        'Learning a new skill can be useful at any age. Some people study a language {{21}} they want to travel. Others take a course {{22}} improve their work skills. Community centres offer {{23}} different classes, including cooking and computer lessons. Students can meet people {{24}} similar interests. They often practise together {{25}} share ideas. It is important to choose a subject that you enjoy. {{26}} you are interested in the topic, learning becomes easier. You should spend time practising {{27}} home. You do not need to study for hours every day; even a short lesson can help you {{28}} something new. In this way, learning can become part of {{29}} daily lives and bring opportunities {{30}} the future.',
      answers: {
        21: 'because',
        22: 'to',
        23: 'many',
        24: 'with',
        25: 'and',
        26: 'when',
        27: 'at',
        28: 'learn',
        29: 'their',
        30: 'for',
      },
      note: 'Lưu ý từ đề gốc: đáp án câu 22 là "to" và câu 27 là "at" (bạn có thể gõ trực tiếp vào ô trống).',
    },
  },
  writing: {
    section1: [
      {
        number: 1,
        original: 'The weather was so bad that we stayed at home.',
        starter: 'Because',
        acceptedAnswers: [
          'the weather was so bad, we stayed at home.',
          'the weather was bad, we stayed at home.',
          'of the bad weather, we stayed at home.',
        ],
        modelAnswer: 'Because the weather was so bad, we stayed at home. (hoặc: Because of the bad weather, we stayed at home.)',
      },
      {
        number: 2,
        original: 'You should leave now or you will miss the bus.',
        starter: 'If',
        acceptedAnswers: [
          'you do not leave now, you will miss the bus.',
          "you don't leave now, you will miss the bus.",
        ],
        modelAnswer: "If you don't leave now, you will miss the bus.",
      },
      {
        number: 3,
        original: 'No student in the class is taller than Peter.',
        starter: 'Peter',
        acceptedAnswers: [
          'is the tallest student in the class.',
          'is the tallest in the class.',
        ],
        modelAnswer: 'Peter is the tallest student in the class.',
      },
      {
        number: 4,
        original: 'I like tea more than coffee.',
        starter: 'I prefer',
        acceptedAnswers: [
          'tea to coffee.',
        ],
        modelAnswer: 'I prefer tea to coffee.',
      },
      {
        number: 5,
        original: 'She succeeded in passing the exam.',
        starter: 'She managed',
        acceptedAnswers: [
          'to pass the exam.',
        ],
        modelAnswer: 'She managed to pass the exam.',
      },
    ],
    section2: {
      prompt: 'Your English friend Jack has invited you to visit him during the summer holiday. Write an email to Jack.',
      requirements: [
        'thank him for the invitation',
        'say when you can visit',
        'ask what you should bring',
      ],
      targetWords: 45,
      sampleAnswer:
        'Hi Jack,\n\nThank you very much for inviting me to visit you during the summer holiday. I am really excited about it! I can visit you from July 10th to July 15th. Could you please tell me what I should bring for the trip?\n\nSee you soon,\nNam',
    },
  },
};
