import React from 'react';

import {AppInitialData} from './types';

export interface InitialDataProps {
  initialData: AppInitialData;
}
export type AppInitialDataWithoutAccountData = Omit<AppInitialData, 'accountData'>;
export interface InitialDataWithoutAccountDataProps {
  initialData: AppInitialDataWithoutAccountData;
}
export type InitialDataDependingComponent<T = object> = React.ComponentType<T & InitialDataProps>;
export type InitialDataDependingNavigationComponent<T = object> = React.ComponentType<
  T & InitialDataWithoutAccountDataProps
>;

export function withInitialData<T>(
  initialData: AppInitialData,
  Wrapped: InitialDataDependingComponent<T>,
): React.ComponentType<T> {
  return (props: T) => <Wrapped initialData={initialData} {...props} />;
}

export function withInitialDataWithoutAccountData<T>(
  initialData: AppInitialDataWithoutAccountData,
  Wrapped: InitialDataDependingNavigationComponent<T>,
): React.ComponentType<T> {
  return (props: T) => <Wrapped initialData={initialData} {...props} />;
}
