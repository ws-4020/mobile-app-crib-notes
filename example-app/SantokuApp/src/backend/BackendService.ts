import {AppConfig} from '../framework';
import {Configuration, DefaultApi} from '../generated/api';

export const api = new DefaultApi(new Configuration({basePath: AppConfig.santokuAppBackendUrl}));
