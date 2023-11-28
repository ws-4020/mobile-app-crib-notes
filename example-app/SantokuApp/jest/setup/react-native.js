/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// https://reactnavigation.org/docs/testing#mocking-native-modules
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// !!! NOTICE !!!
// The React Navigation documentation says that `react-native-reanimated` and `react-native-gesture-handler`
// also need to be configured with mocks.
// But since React Navigation v6 does not already depend on those packages, mocking those packages is not necessary
// for React Navigation v6.
//
// If you want to use `react-native-reanimated` and `react-native-gesture-handler`, add mock according to the guide
// provided by each package.
// - `react-native-reanimated`: https://docs.swmansion.com/react-native-reanimated/docs/guide/testing/
// - `react-native-gesture-handler`: https://docs.swmansion.com/react-native-gesture-handler/docs/guides/testing
