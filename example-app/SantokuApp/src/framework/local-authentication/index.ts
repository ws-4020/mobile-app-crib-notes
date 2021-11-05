import {ExpoLocalAuthentication} from './ExpoLocalAuthentication';
import {LocalAuthentication} from './LocalAuthentication';

export * from './LocalAuthentication';

const localAuthentication: LocalAuthentication = new ExpoLocalAuthentication();

export default localAuthentication;
