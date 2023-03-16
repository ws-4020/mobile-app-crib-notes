import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {accountId, getDb} from '../../utils/dbManager';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';

export const deleteAccountsMeQuestionLikes = rest.delete(
  `${backendUrl}/accounts/me/likes/questions/:questionId`,
  async (req, res, ctx) => {
    try {
      const questionId = String(req.params.questionId);
      const db = getDb();
      const questionLike = db.questionLike.findFirst({
        where: {accountId: {equals: accountId}, questionId: {equals: questionId}},
      });
      if (questionLike) {
        db.questionLike.delete({where: {accountId: {equals: accountId}, questionId: {equals: questionId}}});
        db.question.update({where: {questionId: {equals: questionId}}, data: {likes: likes => likes - 1}});
      }

      return delayedResponse(ctx.status(204));
    } catch (e) {
      return errorResponse(e, ctx);
    }
  },
);
