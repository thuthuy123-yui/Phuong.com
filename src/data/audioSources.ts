import { AudioSource, AudioSourceId } from '../types/exam';

export const AUDIO_SOURCES: Record<AudioSourceId, AudioSource> = {
  'booking-table': {
    id: 'booking-table',
    title: 'Booking a table',
    level: 'A1',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/booking-table',
  },
  'finding-library': {
    id: 'finding-library',
    title: 'Finding the library',
    level: 'A1',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/finding-library',
  },
  'ordering-cafe': {
    id: 'ordering-cafe',
    title: 'Ordering in a café',
    level: 'A1',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/ordering-cafe',
  },
  'shopping-clothes': {
    id: 'shopping-clothes',
    title: 'Shopping for clothes',
    level: 'A1',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/shopping-clothes',
  },
  'meeting-other-students': {
    id: 'meeting-other-students',
    title: 'Meeting other students',
    level: 'A1',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/meeting-other-students',
  },
  'organising-group-project': {
    id: 'organising-group-project',
    title: 'Organising a group project',
    level: 'A1',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/organising-group-project',
  },
  'meeting-new-team-member': {
    id: 'meeting-new-team-member',
    title: 'Meeting a new team member',
    level: 'A1',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/meeting-new-team-member',
  },
  'request-your-boss': {
    id: 'request-your-boss',
    title: 'A request from your boss',
    level: 'A1',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/request-your-boss',
  },
  'voicemail-message': {
    id: 'voicemail-message',
    title: 'A voicemail message',
    level: 'A1',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/voicemail-message',
  },
  'first-english-class': {
    id: 'first-english-class',
    title: 'The first English class',
    level: 'A1',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/first-english-class',
  },
  'changing-plans': {
    id: 'changing-plans',
    title: 'Changing plans',
    level: 'A2',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a2/changing-plans',
  },
  'business-cards': {
    id: 'business-cards',
    title: 'Business cards',
    level: 'A1',
    url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/business-cards',
  },
};

export const AUDIO_SOURCE_LIST: AudioSource[] = [
  AUDIO_SOURCES['booking-table'],
  AUDIO_SOURCES['finding-library'],
  AUDIO_SOURCES['ordering-cafe'],
  AUDIO_SOURCES['shopping-clothes'],
  AUDIO_SOURCES['meeting-other-students'],
  AUDIO_SOURCES['organising-group-project'],
  AUDIO_SOURCES['meeting-new-team-member'],
  AUDIO_SOURCES['request-your-boss'],
  AUDIO_SOURCES['voicemail-message'],
  AUDIO_SOURCES['first-english-class'],
  AUDIO_SOURCES['changing-plans'],
  AUDIO_SOURCES['business-cards'],
];
