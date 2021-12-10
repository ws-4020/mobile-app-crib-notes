package jp.fintan.mobile.santokuapp.domain.model.timetable;

import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

public class TimetableName extends StringValue {

  public TimetableName(String value) {
    super(value);
    Objects.requireNonNull(value);
  }
}
