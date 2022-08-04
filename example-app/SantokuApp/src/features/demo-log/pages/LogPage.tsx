import React from 'react';

import {LogTemplate} from '../components/LogTemplate';
import {debugLogUseCase} from '../use-cases/debugLogUseCase';
import {errorLogUseCase} from '../use-cases/errorLogUseCase';
import {infoLogUseCase} from '../use-cases/infoLogUseCase';
import {traceLogUseCase} from '../use-cases/traceLogUseCase';
import {warnLogUseCase} from '../use-cases/warnLogUseCase';

export const LogPage: React.FC = () => {
  return (
    <LogTemplate
      testID="LogScreen"
      traceLog={traceLogUseCase}
      debugLog={debugLogUseCase}
      infoLog={infoLogUseCase}
      warnLog={warnLogUseCase}
      errorLog={errorLogUseCase}
    />
  );
};
