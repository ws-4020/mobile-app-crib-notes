import {useTheme} from '@shopify/restyle';
import {m} from 'bases/message/Message';
import {StyledScrollView, Text, Box, StyledTouchableOpacity} from 'bases/ui/common';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import {Event} from 'features/backend/apis/model';
import React from 'react';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {EventListCard} from './EventListCard';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');
export type EventListProps = {
  data?: Event[];
};

export const EventList: React.VFC<EventListProps> = ({data}) => {
  const theme = useTheme<RestyleTheme>();
  const {width: windowWidth} = useSafeAreaFrame();
  return (
    <StyledScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      {data?.map(item => (
        <Box flexDirection="row" key={item.eventId}>
          <Box px="p12" />
          <EventListCard event={item} />
          <Box px="p12" />
        </Box>
      ))}
      <Box px="p12" />
      <Box width={windowWidth - theme.spacing.p24 * 2} justifyContent="center" alignItems="center">
        <StyledTouchableOpacity onPress={showUnderDevelopment}>
          <Text variant="font14Bold" lineHeight={20} letterSpacing={0.25} color="blue">
            {m('もっと見る')}
          </Text>
        </StyledTouchableOpacity>
      </Box>
      <Box px="p12" />
    </StyledScrollView>
  );
};
