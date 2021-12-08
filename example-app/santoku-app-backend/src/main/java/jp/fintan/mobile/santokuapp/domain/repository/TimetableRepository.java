package jp.fintan.mobile.santokuapp.domain.repository;

import jp.fintan.mobile.santokuapp.domain.model.team.TeamId;
import jp.fintan.mobile.santokuapp.domain.model.timetable.Timetable;
import jp.fintan.mobile.santokuapp.domain.model.timetable.TimetableId;

public interface TimetableRepository {
  Timetable find(TeamId teamId, TimetableId timetableId);
}
