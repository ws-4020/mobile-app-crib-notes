import {createUseContextAndProvider} from 'bases/core/contexts/createUseContextAndProvider';

import {AppTheme} from '../types/AppTheme';

export const [useAppTheme, AppThemeContextProvider] = createUseContextAndProvider<AppTheme>();
