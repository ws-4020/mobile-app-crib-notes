// ✅ no more noisy error logs on the console by React Query when promises are rejected.
import {setLogger} from 'react-query';

setLogger({
  log: () => {},
  warn: () => {},
  error: () => {},
});
