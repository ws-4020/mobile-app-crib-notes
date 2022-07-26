import {createUseContextAndProvider} from '../../core/contexts/createUseContextAndProvider';
import {AppTheme} from '../types/AppTheme';

export const [useAppTheme, AppThemeContextProvider] = createUseContextAndProvider<AppTheme>();
