import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import React from 'react';

import {Home} from './Home';

describe('Home', () => {
  let app: RenderAPI;

  beforeEach(() => {
    app = render(<Home.component />);
  });

  it('マウントされたときに正常にレンダリングされること', () => {
    expect(app.queryByTestId('HomeScreen')).toHaveTextContent('Hello, World!');
    expect(app).toMatchSnapshot();
  });

  it('Demoをタップすると、デモ画面に遷移すること', () => {
    fireEvent.press(app.getByTestId('goToDemoButton'));
    expect(__mocks.navigation.navigate).toHaveBeenCalledTimes(1);
    expect(__mocks.navigation.navigate).toHaveBeenCalledWith('Demo');
  });

  it('Go to instructionsをタップすると、Reactの説明画面に遷移すること', () => {
    fireEvent.press(app.getByTestId('goToInstructionsButton'));
    expect(__mocks.navigation.navigate).toHaveBeenCalledTimes(1);
    expect(__mocks.navigation.navigate).toHaveBeenCalledWith('Instructions');
  });

  it('Application Informationをタップすると、アプリ情報画面に遷移すること', () => {
    fireEvent.press(app.getByTestId('viewApplicationInformationButton'));
    expect(__mocks.navigation.navigate).toHaveBeenCalledTimes(1);
    expect(__mocks.navigation.navigate).toHaveBeenCalledWith('AppInfo');
  });
});
