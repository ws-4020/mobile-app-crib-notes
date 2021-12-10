package jp.fintan.mobile.santokuapp.domain.model.timetable;

import java.time.LocalTime;
import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.core.LocalTimeValue;

public class StartTime extends LocalTimeValue {

  public StartTime(LocalTime value) {
    super(value);
    Objects.requireNonNull(value);
  }
}
