package jp.fintan.mobile.santokuapp.domain.model.timetable;

import java.time.LocalDate;
import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.core.LocalDateValue;

public class TimetableDate extends LocalDateValue {

  public TimetableDate(LocalDate value) {
    super(value);
    Objects.requireNonNull(value);
  }
}
