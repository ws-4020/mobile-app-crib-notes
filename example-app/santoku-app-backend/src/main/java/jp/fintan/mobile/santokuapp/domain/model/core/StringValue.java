package jp.fintan.mobile.santokuapp.domain.model.core;

public abstract class StringValue extends ValueObject<String> {
  protected StringValue(String value) {
    super(value);
  }
}
