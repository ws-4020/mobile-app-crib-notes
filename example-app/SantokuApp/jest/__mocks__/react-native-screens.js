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

const View = require('react-native').View;

export const enableScreens = jest.fn();
export const screensEnabled = jest.fn(() => true);
export const ScreenContainer = View;
export const Screen = View;
export const NativeScreen = View;
export const NativeScreenContainer = View;
export const ScreenStack = View;
export const ScreenStackHeaderConfig = View;
export const ScreenStackHeaderSubview = View;
export const ScreenStackHeaderRightView = View;
export const ScreenStackHeaderLeftView = View;
export const ScreenStackHeaderTitleView = View;
export const ScreenStackHeaderCenterView = View;
export const FullWindowOverlay = View;
