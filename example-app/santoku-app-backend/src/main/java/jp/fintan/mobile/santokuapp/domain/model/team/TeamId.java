package jp.fintan.mobile.santokuapp.domain.model.team;

import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

public class TeamId extends StringValue {

  public TeamId(String value) {
    super(value);
    Objects.requireNonNull(value);
  }
}
