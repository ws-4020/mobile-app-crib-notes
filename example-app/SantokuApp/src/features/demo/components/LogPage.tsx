import React from 'react';

import {LogTemplate} from '../log/LogTemplate';
import {useLog} from '../log/useLog';

export const LogPage: React.FC = () => {
  const {traceLog, debugLog, infoLog, warnLog, errorLog} = useLog();
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
