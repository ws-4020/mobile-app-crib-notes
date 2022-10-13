import React from 'react';

import {AppInitialData} from '../types/AppInitialData';

export interface InitialDataProps {
  initialData: AppInitialData;
}
export type InitialDataDependingComponent<T = object> = React.ComponentType<React.PropsWithChildren<T & InitialDataProps>>;

export function withInitialData<T>(
  initialData: AppInitialData,
  Wrapped: InitialDataDependingComponent<T>,
): React.ComponentType<React.PropsWithChildren<T>> {
  return (props: T) => <Wrapped initialData={initialData} {...props} />;
}
