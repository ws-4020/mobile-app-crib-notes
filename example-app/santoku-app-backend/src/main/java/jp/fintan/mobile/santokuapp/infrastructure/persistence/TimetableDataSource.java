package jp.fintan.mobile.santokuapp.infrastructure.persistence;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import jp.fintan.mobile.santokuapp.domain.model.team.TeamId;
import jp.fintan.mobile.santokuapp.domain.model.timetable.EndTime;
import jp.fintan.mobile.santokuapp.domain.model.timetable.Period;
import jp.fintan.mobile.santokuapp.domain.model.timetable.StartTime;
import jp.fintan.mobile.santokuapp.domain.model.timetable.TimeBoxName;
import jp.fintan.mobile.santokuapp.domain.model.timetable.Timetable;
import jp.fintan.mobile.santokuapp.domain.model.timetable.TimetableDate;
import jp.fintan.mobile.santokuapp.domain.model.timetable.TimetableId;
import jp.fintan.mobile.santokuapp.domain.model.timetable.TimetableName;
import jp.fintan.mobile.santokuapp.domain.repository.TimetableRepository;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class TimetableDataSource implements TimetableRepository {

  @Override
  public Timetable find(TeamId teamId, TimetableId timetableId) {
    // TODO: 時間割をデータベースから取得
    return new Timetable(
        timetableId,
        new TimetableName("name"),
        new TimetableDate(LocalDate.now()),
        null,
        List.of(
            new Period(
                new TimeBoxName("コマ"),
                new StartTime(LocalTime.now()),
                new EndTime(LocalTime.now()))));
  }
}
