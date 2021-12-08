package jp.fintan.mobile.santokuapp.domain.model.timetable;

public class Timetable {

  private final TimetableId timetableId;

  private final TimetableName timetableName;

  private final TimetableDate timetableDate;

  private final TimetableStartedAt timetableStartedAt;

  private final PeriodList periodList;

  public Timetable(
      TimetableId timetableId,
      TimetableName timetableName,
      TimetableDate timetableDate,
      TimetableStartedAt timetableStartedAt,
      PeriodList periodList) {
    this.timetableId = timetableId;
    this.timetableName = timetableName;
    this.timetableDate = timetableDate;
    this.timetableStartedAt = timetableStartedAt;
    this.periodList = periodList;
  }

  public TimetableId timetableId() {
    return timetableId;
  }

  public TimetableName timetableName() {
    return timetableName;
  }

  public TimetableDate timetableDate() {
    return timetableDate;
  }

  public TimetableStartedAt timetableStartedAt() {
    return timetableStartedAt;
  }

  public PeriodList periodList() {
    return periodList;
  }
}
