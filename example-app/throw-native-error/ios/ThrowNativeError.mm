#import "ThrowNativeError.h"

@implementation ThrowNativeError
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(throwErrorSyncProcess)
{
  [NSException raise:@"NativeModulesSyncProcessException" format:@"Throw exception in synchronous process."];
  // ↓のようなNSException以外のオブジェクトをthrowした場合は、NSSetUncaughtExceptionHandlerで捕捉できない
  // @throw @"Throw exception in synchronous process.";
  // @throw [NSError errorWithDomain:@"ws4020" code:100 userInfo:nil];
}

RCT_EXPORT_METHOD(throwErrorAsyncProcess)
{
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^(void) {
    [NSException raise:@"NativeModulesAsyncProcessException" format:@"Throw exception in asynchronous process."];
  });
}


// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeThrowNativeErrorSpecJSI>(params);
}
#endif

@end
