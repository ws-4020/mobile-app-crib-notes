import {useTheme} from '@shopify/restyle';
import {m} from 'bases/message/Message';
import {StyledScrollView, Text, Box, StyledTouchableOpacity} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import {Event} from 'features/backend/apis/model';
import React from 'react';
import {Platform} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {EventListCard} from './EventListCard';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');
export type EventListProps = {
  data?: Event[];
};

export const EventList: React.FC<EventListProps> = ({data}) => {
  const theme = useTheme<RestyleTheme>();
  const {width: windowWidth} = useSafeAreaFrame();

  return (
    <StyledScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={Platform.select({ios: windowWidth - 32})}
      snapToAlignment={Platform.select({android: 'center'})}
      pagingEnabled
      decelerationRate="fast">
      <StyledSpace width="p16" />
      {data?.map(item => (
        <StyledRow key={item.eventId}>
          <StyledSpace width="p8" />
          <EventListCard event={item} />
          <StyledSpace width="p8" />
        </StyledRow>
      ))}
      <StyledSpace width="p8" />
      <Box width={windowWidth - theme.spacing.p24 * 2} justifyContent="center" alignItems="center">
        <StyledTouchableOpacity onPress={showUnderDevelopment}>
          <Text variant="font14Bold" lineHeight={20} letterSpacing={0.25} color="blue">
            {m('もっと見る')}
          </Text>
        </StyledTouchableOpacity>
      </Box>
      <StyledSpace width="p8" />
    </StyledScrollView>
  );
};
