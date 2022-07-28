let sendErrorLog = (error: unknown) => console.log(String(error));

const setErrorSender = (a: (error: unknown) => void) => {
  sendErrorLog = a;
};

export {sendErrorLog, setErrorSender};
