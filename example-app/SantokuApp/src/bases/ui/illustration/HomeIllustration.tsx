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

import homeImageSource from 'assets/images/home.png';
import React from 'react';

import {StyledImage, StyledImageProps} from '../common/StyledImage';

export type HomeIllustrationProps = Omit<StyledImageProps, 'source'>;

export const HomeIllustration = ({width = 22.63, height = 24, ...rest}: HomeIllustrationProps) => {
  return <StyledImage source={homeImageSource} width={width} height={height} {...rest} />;
};
