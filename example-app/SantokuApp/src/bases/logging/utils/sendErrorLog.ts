let sendErrorLog;

const setSendErrorLog = (delegate: (error: unknown) => void) => {
  sendErrorLog = delegate;
};

export {sendErrorLog, setSendErrorLog};
