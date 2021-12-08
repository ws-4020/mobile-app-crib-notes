package jp.fintan.mobile.santokuapp.domain.model.team;

import java.util.Objects;

public class TeamId {

  private final String value;

  public TeamId(String value) {
    Objects.requireNonNull(value);

    this.value = value;
  }

  public String value() {
    return value;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    TeamId title = (TeamId) o;
    return Objects.equals(value, title.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(value);
  }
}
