package jp.fintan.mobile.santoku.thrownativeerror;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import android.util.Log;

@ReactModule(name = ThrowNativeErrorModule.NAME)
public class ThrowNativeErrorModule extends ReactContextBaseJavaModule {
  public static final String NAME = "ThrowNativeError";

  public ThrowNativeErrorModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void throwErrorSyncProcess() {
    Log.d("ThrowNativeErrorModule", "Throw exception in synchronous process.");
    throw new RuntimeException("Error has occurred in synchronous process.");
  }

  @ReactMethod
  public void throwErrorAsyncProcess() {
    Log.d("ThrowNativeErrorModule", "Throw exception in asynchronous process.");
    new Thread(() -> {
      throw new RuntimeException("Error has occurred in asynchronous process.");
    }).start();
  }
}
