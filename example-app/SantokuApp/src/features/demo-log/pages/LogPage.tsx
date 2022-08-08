import React from 'react';

import {LogTemplate} from '../components/LogTemplate';
import {debugLog} from '../use-cases/debugLog';
import {errorLog} from '../use-cases/errorLog';
import {infoLog} from '../use-cases/infoLog';
import {traceLog} from '../use-cases/traceLog';
import {warnLog} from '../use-cases/warnLog';

export const LogPage: React.FC = () => {
  return (
    <LogTemplate
      testID="LogScreen"
      traceLog={traceLog}
      debugLog={debugLog}
      infoLog={infoLog}
      warnLog={warnLog}
      errorLog={errorLog}
    />
  );
};
