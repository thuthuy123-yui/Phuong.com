import { ExamSet } from '../types/exam';

export const exam3: ExamSet = {
  id: 3,
  title: 'Đề số 3',
  subtitle: 'Paper 1: Listening (20 câu) · Paper 2: Reading (30 câu) & Writing (5 câu + 1 email)',
  listening: {
    durationMinutes: 20,
    part1: [
      {
        number: 1,
        audioTitle: 'Audio 1 – Meeting a new team member',
        audioId: 'meeting-new-team-member',
        prompt: 'How long has Peter worked at the company?',
        options: [
          { letter: 'A', text: 'One year' },
          { letter: 'B', text: 'Three years' },
          { letter: 'C', text: 'Five years' },
        ],
        answer: 'B',
      },
      {
        number: 2,
        audioTitle: 'Audio 2 – Booking a table',
        audioId: 'booking-table',
        prompt: 'What change does Jamie make in the second call?',
        options: [
          { letter: 'A', text: 'He changes the date' },
          { letter: 'B', text: 'He changes the number of people' },
          { letter: 'C', text: 'He cancels the booking' },
        ],
        answer: 'B',
      },
      {
        number: 3,
        audioTitle: 'Audio 3 – Finding the library',
        audioId: 'finding-library',
        prompt: 'How long can students keep borrowed books?',
        options: [
          { letter: 'A', text: 'One week' },
          { letter: 'B', text: 'Two weeks' },
          { letter: 'C', text: 'Three weeks' },
        ],
        answer: 'B',
      },
      {
        number: 4,
        audioTitle: 'Audio 4 – Shopping for clothes',
        audioId: 'shopping-clothes',
        prompt: 'What size does the customer ask for?',
        options: [
          { letter: 'A', text: 'Small' },
          { letter: 'B', text: 'Extra small' },
          { letter: 'C', text: 'Medium' },
        ],
        answer: 'B',
      },
      {
        number: 5,
        audioTitle: 'Audio 5 – Ordering in a café',
        audioId: 'ordering-cafe',
        prompt: 'How much does the first customer pay?',
        options: [
          { letter: 'A', text: '£3.50' },
          { letter: 'B', text: '£4.20' },
          { letter: 'C', text: '95p' },
        ],
        answer: 'A',
      },
    ],
    part2: {
      audioTitle: 'Audio – Business cards',
      audioId: 'business-cards',
      instruction: 'Match each person with the correct job or role.',
      questions: [
        { number: 6, prompt: 'Peter Miller', answer: 'C' },
        { number: 7, prompt: 'Alessandro Rossi', answer: 'A' },
        { number: 8, prompt: 'Megumi Tanaka', answer: 'D' },
        { number: 9, prompt: 'Andres Mulligan', answer: 'B' },
        {
          number: 10,
          prompt: 'Who is the project leader?',
          answer: 'A',
          note: 'Đáp án theo đề gốc: A (Alessandro Rossi — Lead programmer / Project leader).',
        },
      ],
      options: [
        { letter: 'A', text: 'Lead programmer' },
        { letter: 'B', text: 'Intern in research and development' },
        { letter: 'C', text: 'Sales director' },
        { letter: 'D', text: 'Product manager' },
        { letter: 'E', text: 'Megumi Tanaka' },
      ],
    },
    part3: {
      audioTitle: 'Audio – Finding the library',
      audioId: 'finding-library',
      instruction: 'Listen to the conversation and choose the correct answer A, B or C.',
      questions: [
        {
          number: 11,
          prompt: 'Where is the registration office?',
          options: [
            { letter: 'A', text: 'Next to the lecture theatre' },
            { letter: 'B', text: 'Inside the library' },
            { letter: 'C', text: 'Behind the café' },
          ],
          answer: 'A',
        },
        {
          number: 12,
          prompt: 'What does the student need to borrow books?',
          options: [
            { letter: 'A', text: 'A student card' },
            { letter: 'B', text: 'A library card' },
            { letter: 'C', text: 'A passport' },
          ],
          answer: 'B',
        },
        {
          number: 13,
          prompt: 'What is the maximum number of books?',
          options: [
            { letter: 'A', text: 'Four' },
            { letter: 'B', text: 'Six' },
            { letter: 'C', text: 'Eight' },
          ],
          answer: 'B',
        },
        {
          number: 14,
          prompt: 'What happens if a book is returned late?',
          options: [
            { letter: 'A', text: 'A fee is charged each day' },
            { letter: 'B', text: 'The student loses the library card' },
            { letter: 'C', text: 'The book must be replaced' },
          ],
          answer: 'A',
        },
        {
          number: 15,
          prompt: 'What must people do with mobile phones?',
          options: [
            { letter: 'A', text: 'Keep them on silent' },
            { letter: 'B', text: 'Switch them off' },
            { letter: 'C', text: 'Leave them at the desk' },
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
          prompt: 'Who needs to visit a customer in Germany?',
          options: [
            { letter: 'A', text: 'Mario' },
            { letter: 'B', text: 'Susanne' },
            { letter: 'C', text: 'The project manager' },
          ],
          answer: 'B',
        },
        {
          number: 17,
          prompt: 'What is Mario asked to do first?',
          options: [
            { letter: 'A', text: 'Write a report' },
            { letter: 'B', text: 'Book a meeting room' },
            { letter: 'C', text: 'Email the customer' },
          ],
          answer: 'C',
        },
        {
          number: 18,
          prompt: 'What must Mario do before inviting everyone to the meeting?',
          options: [
            { letter: 'A', text: 'Book a meeting room' },
            { letter: 'B', text: 'Call the customer' },
            { letter: 'C', text: 'Prepare a presentation' },
          ],
          answer: 'A',
        },
        {
          number: 19,
          prompt: 'When is the short report needed?',
          options: [
            { letter: 'A', text: 'Today' },
            { letter: 'B', text: 'Tomorrow' },
            { letter: 'C', text: 'In the next two or three weeks' },
          ],
          answer: 'C',
        },
        {
          number: 20,
          prompt: 'Which task is described as very urgent?',
          options: [
            { letter: 'A', text: 'The customer email' },
            { letter: 'B', text: 'The project report' },
            { letter: 'C', text: 'The presentation' },
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
        prompt: 'I’m looking forward to __________ you again.',
        options: [
          { letter: 'A', text: 'see' },
          { letter: 'B', text: 'seeing' },
          { letter: 'C', text: 'saw' },
          { letter: 'D', text: 'seen' },
        ],
        answer: 'B',
      },
      {
        number: 2,
        prompt: 'There is __________ sugar in my tea.',
        options: [
          { letter: 'A', text: 'too many' },
          { letter: 'B', text: 'too much' },
          { letter: 'C', text: 'many' },
          { letter: 'D', text: 'few' },
        ],
        answer: 'B',
      },
      {
        number: 3,
        prompt: 'If it __________ tomorrow, we will stay inside.',
        options: [
          { letter: 'A', text: 'rain' },
          { letter: 'B', text: 'rains' },
          { letter: 'C', text: 'rained' },
          { letter: 'D', text: 'raining' },
        ],
        answer: 'B',
      },
      {
        number: 4,
        prompt: 'This bag belongs to Sarah. It is __________.',
        options: [
          { letter: 'A', text: 'her' },
          { letter: 'B', text: 'hers' },
          { letter: 'C', text: 'she' },
          { letter: 'D', text: 'herself' },
        ],
        answer: 'B',
      },
      {
        number: 5,
        prompt: 'We have known each other __________ five years.',
        options: [
          { letter: 'A', text: 'since' },
          { letter: 'B', text: 'during' },
          { letter: 'C', text: 'for' },
          { letter: 'D', text: 'from' },
        ],
        answer: 'C',
      },
      {
        number: 6,
        prompt: 'The children enjoy __________ in the garden.',
        options: [
          { letter: 'A', text: 'play' },
          { letter: 'B', text: 'to play' },
          { letter: 'C', text: 'playing' },
          { letter: 'D', text: 'played' },
        ],
        answer: 'C',
      },
      {
        number: 7,
        prompt: 'I was hungry, __________ I made a sandwich.',
        options: [
          { letter: 'A', text: 'because' },
          { letter: 'B', text: 'so' },
          { letter: 'C', text: 'although' },
          { letter: 'D', text: 'but' },
        ],
        answer: 'B',
      },
      {
        number: 8,
        prompt: 'He is the man __________ works in the post office.',
        options: [
          { letter: 'A', text: 'which' },
          { letter: 'B', text: 'whose' },
          { letter: 'C', text: 'who' },
          { letter: 'D', text: 'where' },
        ],
        answer: 'C',
      },
      {
        number: 9,
        prompt: 'You __________ smoke in the hospital.',
        options: [
          { letter: 'A', text: 'must' },
          { letter: 'B', text: 'mustn’t' },
          { letter: 'C', text: 'should' },
          { letter: 'D', text: 'may' },
        ],
        answer: 'B',
      },
      {
        number: 10,
        prompt: 'They arrived __________ the party very late.',
        options: [
          { letter: 'A', text: 'to' },
          { letter: 'B', text: 'at' },
          { letter: 'C', text: 'in' },
          { letter: 'D', text: 'on' },
        ],
        answer: 'B',
      },
    ],
    section2: [
      {
        number: 11,
        prompt: 'PLEASE QUEUE HERE',
        options: [
          { letter: 'A', text: 'Wait in this line.' },
          { letter: 'B', text: 'Do not stand here.' },
          { letter: 'C', text: 'This area is for staff.' },
        ],
        answer: 'A',
      },
      {
        number: 12,
        prompt: 'The gym is closed until further notice.',
        options: [
          { letter: 'A', text: 'The gym will open later today.' },
          { letter: 'B', text: 'The gym is not open and no reopening date is given.' },
          { letter: 'C', text: 'The gym is open only for members.' },
        ],
        answer: 'B',
      },
      {
        number: 13,
        prompt: 'Return your library books by 5 p.m. on Thursday to avoid a fine.',
        options: [
          { letter: 'A', text: 'Books returned after Thursday may cost you money.' },
          { letter: 'B', text: 'You can keep books until Friday without charge.' },
          { letter: 'C', text: 'The library closes at five every day.' },
        ],
        answer: 'A',
      },
      {
        number: 14,
        prompt: 'Please use the side entrance while building work is in progress.',
        options: [
          { letter: 'A', text: 'The main entrance is closed temporarily.' },
          { letter: 'B', text: 'The building is closed to everyone.' },
          { letter: 'C', text: 'Work is taking place at the side entrance only.' },
        ],
        answer: 'A',
      },
      {
        number: 15,
        prompt: 'To: Alex / I’ve left your lunch in the fridge. Please heat it up when you get home. – Jane',
        options: [
          { letter: 'A', text: 'Alex must buy lunch.' },
          { letter: 'B', text: 'Jane wants Alex to put lunch in the fridge.' },
          { letter: 'C', text: 'Alex’s lunch is ready to be warmed.' },
        ],
        answer: 'C',
      },
    ],
    section3: {
      title: 'Learning to Cook',
      passage:
        'When Daniel started university, he usually ate sandwiches or bought fast food because he did not know how to cook. He soon realised that eating out every day was expensive. His friend invited him to a free cooking workshop at the student centre. The teacher showed the group how to prepare simple meals using fresh ingredients. Daniel learned to make soup, rice and vegetable dishes. At first, he followed the recipes carefully, but later he began changing them and adding his favourite spices. He now cooks most evenings and sometimes prepares meals for his friends. Cooking has saved him money and helped him eat more healthily. He says the best thing is that he is no longer afraid of trying unfamiliar food.',
      questions: [
        {
          number: 16,
          prompt: 'Why did Daniel often buy fast food?',
          options: [
            { letter: 'A', text: 'He disliked sandwiches.' },
            { letter: 'B', text: 'He could not cook.' },
            { letter: 'C', text: 'The university had no kitchen.' },
            { letter: 'D', text: 'His friends asked him to.' },
          ],
          answer: 'B',
        },
        {
          number: 17,
          prompt: 'Why did he decide to learn cooking?',
          options: [
            { letter: 'A', text: 'Eating out cost too much.' },
            { letter: 'B', text: 'He wanted to become a chef.' },
            { letter: 'C', text: 'His parents told him to.' },
            { letter: 'D', text: 'He wanted to work at the student centre.' },
          ],
          answer: 'A',
        },
        {
          number: 18,
          prompt: 'What did the teacher show the group?',
          options: [
            { letter: 'A', text: 'How to grow vegetables' },
            { letter: 'B', text: 'How to prepare simple meals' },
            { letter: 'C', text: 'How to open a restaurant' },
            { letter: 'D', text: 'How to bake cakes only' },
          ],
          answer: 'B',
        },
        {
          number: 19,
          prompt: 'What does Daniel do now?',
          options: [
            { letter: 'A', text: 'He cooks most evenings.' },
            { letter: 'B', text: 'He eats fast food every day.' },
            { letter: 'C', text: 'He never changes recipes.' },
            { letter: 'D', text: 'He works as a cooking teacher.' },
          ],
          answer: 'A',
        },
        {
          number: 20,
          prompt: 'Which benefit is NOT mentioned?',
          options: [
            { letter: 'A', text: 'Saving money' },
            { letter: 'B', text: 'Eating more healthily' },
            { letter: 'C', text: 'Making friends through meals' },
            { letter: 'D', text: 'Trying unfamiliar food' },
          ],
          answer: 'C',
        },
      ],
    },
    section4: {
      instruction: 'Read the text below and fill each blank with ONE suitable word from the box.',
      wordBank: ['at', 'because', 'enough', 'them', 'and', 'usually', 'from', 'healthy', 'after', 'if'],
      passageWithBlanks:
        'Many students feel tired during the school day. One reason is that they do not get {{21}} sleep. Experts say that most young people need several hours of rest each night. It is helpful to go to bed {{22}} the same time every day. Avoid using a phone just before sleeping {{23}} the screen can make it harder to relax. A quiet room is also important. Some students like reading a book {{24}} they go to bed. Others listen to soft music. During the day, regular exercise can help people feel more {{25}}. However, it is better not to do hard exercise immediately before bedtime. Try to avoid drinks with caffeine {{26}} the evening. If you wake up during the night, do not worry too much. Make small changes and give {{27}} time to work. Good sleeping habits can improve concentration {{28}} mood. You may notice the difference {{29}} a few weeks. Ask for advice {{30}} you continue to have problems.',
      answers: {
        21: 'enough',
        22: 'at',
        23: 'because',
        24: 'before',
        25: 'healthy',
        26: 'in',
        27: 'them',
        28: 'and',
        29: 'after',
        30: 'if',
      },
      note: 'Lưu ý từ đề gốc: đáp án câu 24 là "before" và câu 26 là "in" (bạn có thể gõ trực tiếp vào ô trống).',
    },
  },
  writing: {
    section1: [
      {
        number: 1,
        original: 'The coffee is too hot for me to drink.',
        starter: 'The coffee isn’t',
        acceptedAnswers: [
          'cool enough for me to drink.',
          'cold enough for me to drink.',
        ],
        modelAnswer: 'The coffee isn’t cool enough for me to drink.',
      },
      {
        number: 2,
        original: 'Study hard or you will fail the test.',
        starter: 'If',
        acceptedAnswers: [
          'you do not study hard, you will fail the test.',
          "you don't study hard, you will fail the test.",
        ],
        modelAnswer: "If you don't study hard, you will fail the test.",
      },
      {
        number: 3,
        original: 'No one in my family is younger than Tom.',
        starter: 'Tom is',
        acceptedAnswers: [
          'the youngest in my family.',
          'the youngest person in my family.',
        ],
        modelAnswer: 'Tom is the youngest (person) in my family.',
      },
      {
        number: 4,
        original: 'He prefers walking to driving.',
        starter: 'He would rather',
        acceptedAnswers: [
          'walk than drive.',
        ],
        modelAnswer: 'He would rather walk than drive.',
      },
      {
        number: 5,
        original: 'She succeeded in repairing the computer.',
        starter: 'She managed',
        acceptedAnswers: [
          'to repair the computer.',
        ],
        modelAnswer: 'She managed to repair the computer.',
      },
    ],
    section2: {
      prompt: 'Your English friend Ben asks about your favourite place in your town. Write an email to Ben.',
      requirements: [
        'name the place',
        'describe what you can do there',
        'explain why you like it',
      ],
      targetWords: 45,
      sampleAnswer:
        'Hi Ben,\n\nMy favourite place in my town is Central Park. There, I can walk under green trees, go jogging with my friends, or read a book near the lake. I love it because it is peaceful and helps me relax after school.\n\nWrite soon,\nMinh',
    },
  },
};
