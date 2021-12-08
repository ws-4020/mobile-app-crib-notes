package jp.fintan.mobile.santokuapp.domain.model.timetable;

public class Period {

  private final TimeBoxName timeBoxName;

  private final StartTime startTime;

  private final EndTime endTime;

  public Period(TimeBoxName timeBoxName, StartTime startTime, EndTime endTime) {
    this.timeBoxName = timeBoxName;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  public TimeBoxName timeBoxName() {
    return timeBoxName;
  }

  public StartTime startTime() {
    return startTime;
  }

  public EndTime endTime() {
    return endTime;
  }
}
