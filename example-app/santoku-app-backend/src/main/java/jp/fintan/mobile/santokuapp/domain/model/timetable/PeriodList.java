package jp.fintan.mobile.santokuapp.domain.model.timetable;

import java.util.List;
import java.util.Objects;

public class PeriodList {

  private final List<Period> value;

  public PeriodList(List<Period> value) {
    Objects.requireNonNull(value);

    this.value = value;
  }

  public List<Period> value() {
    return value;
  }
}
