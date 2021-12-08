package jp.fintan.mobile.santokuapp.application.service.timetable;

import java.time.ZonedDateTime;
import jp.fintan.mobile.santokuapp.domain.model.team.TeamId;
import jp.fintan.mobile.santokuapp.domain.model.timetable.Timetable;
import jp.fintan.mobile.santokuapp.domain.model.timetable.TimetableId;
import jp.fintan.mobile.santokuapp.domain.model.timetable.TimetableStartNotifier;
import jp.fintan.mobile.santokuapp.domain.model.timetable.TimetableStartedAt;
import jp.fintan.mobile.santokuapp.domain.repository.TimetableRepository;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class TimetableStartService {
  private final TimetableRepository timetableRepository;
  private final TimetableStartNotifier timetableStartNotifier;

  public TimetableStartService(
      TimetableRepository timetableRepository, TimetableStartNotifier timetableStartNotifier) {
    this.timetableRepository = timetableRepository;
    this.timetableStartNotifier = timetableStartNotifier;
  }

  public Timetable start(TeamId teamId, TimetableId timetableId) {
    final Timetable timetable = timetableRepository.find(teamId, timetableId);
    // 時間割の開始を通知
    timetableStartNotifier.notify(teamId, timetable);
    return new Timetable(
        timetable.timetableId(),
        timetable.timetableName(),
        timetable.timetableDate(),
        new TimetableStartedAt(ZonedDateTime.now()),
        timetable.periodList());
  }
}
