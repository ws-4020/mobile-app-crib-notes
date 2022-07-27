import React from 'react';

import {debugLog} from '../utils/debugLog';
import {errorLog} from '../utils/errorLog';
import {infoLog} from '../utils/infoLog';
import {traceLog} from '../utils/traceLog';
import {warnLog} from '../utils/warnLog';
import {LogTemplate} from './LogTemplate';

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
