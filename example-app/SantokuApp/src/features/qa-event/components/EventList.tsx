import {useTheme} from '@shopify/restyle';
import {StyledScrollView, Text, Box, StyledTouchableOpacity} from 'bases/ui/common';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import {Event} from 'features/backend/apis/model';
import React from 'react';
import {Dimensions} from 'react-native';

import {CardEventSmall} from './CardEventSmall';

const screenWidth = Dimensions.get('screen').width;

export type EventListProps = {
  data?: Event[];
};

export const EventList: React.VFC<EventListProps> = ({data}) => {
  const theme = useTheme<RestyleTheme>();
  return (
    <Box>
      <Text variant="font20Bold" marginHorizontal="p24" marginTop="p32">
        募集中のイベント
      </Text>
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled marginTop="p24">
        {data?.map(item => (
          <CardEventSmall
            key={item.eventId}
            title={item.title}
            likeCount={item.likes}
            userNickname={item.profile?.nickname}
            userDetails="5/5"
          />
        ))}
        <Box width={screenWidth - theme.spacing.p16 * 2} justifyContent="center" alignItems="center">
          <StyledTouchableOpacity>
            <Text variant="font14SemiBold" color="blue">
              もっと見る
            </Text>
          </StyledTouchableOpacity>
        </Box>
      </StyledScrollView>
    </Box>
  );
};
