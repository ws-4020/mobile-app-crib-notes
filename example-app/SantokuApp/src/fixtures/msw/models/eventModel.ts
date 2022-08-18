import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const eventModel = {
  event: {
    eventId: primaryKey(generateId),
    title: String,
    content: String,
    endDate: String,
    likes: Number,
    accountId: String,
    profile: {
      nickname: String,
      type: Array,
      points: Number,
      totalPoints: Number,
    },
  },
};
