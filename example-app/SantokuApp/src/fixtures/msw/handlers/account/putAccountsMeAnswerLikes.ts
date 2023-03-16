import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {accountId, getDb} from '../../utils/dbManager';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';

export const putAccountsMeAnswerLikes = rest.put(
  `${backendUrl}/accounts/me/likes/questions/:questionId/answers/:answerId`,
  async (req, res, ctx) => {
    try {
      const questionId = String(req.params.questionId);
      const answerId = String(req.params.answerId);
      const db = getDb();
      const answerLike = db.answerLike.findFirst({
        where: {accountId: {equals: accountId}, questionId: {equals: questionId}, answerId: {equals: answerId}},
      });
      if (!answerLike) {
        db.answerLike.create({questionId, accountId, answerId});
        db.answer.update({
          where: {accountId: {equals: accountId}, questionId: {equals: questionId}, answerId: {equals: answerId}},
          data: {likes: likes => likes + 1},
        });
      }

      return delayedResponse(ctx.status(204));
    } catch (e) {
      return errorResponse(e, ctx);
    }
  },
);
