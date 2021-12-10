package jp.fintan.mobile.santokuapp.domain.model.timetable;

import java.time.ZonedDateTime;
import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.core.ZonedDateTimeValue;

public class TimetableStartedAt extends ZonedDateTimeValue {

  public TimetableStartedAt(ZonedDateTime value) {
    super(value);
    Objects.requireNonNull(value);
  }
}
