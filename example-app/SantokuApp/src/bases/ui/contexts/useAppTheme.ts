import {createUseContextAndProvider} from '../../utilities';
import {AppTheme} from '../types/AppTheme';

export const [useAppTheme, AppThemeContextProvider] = createUseContextAndProvider<AppTheme>();
