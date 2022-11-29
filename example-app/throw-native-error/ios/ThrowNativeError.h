
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNThrowNativeErrorSpec.h"

@interface ThrowNativeError : NSObject <NativeThrowNativeErrorSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ThrowNativeError : NSObject <RCTBridgeModule>
#endif

@end
