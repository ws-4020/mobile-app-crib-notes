import React from 'react';
import {Dimensions} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {StyledScrollView, Text, Box, StyledTouchableOpacity} from 'bases/ui/common';
import {CardEventSmall} from './CardEventSmall';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';

const screenWidth = Dimensions.get('screen').width;

export const EventList: React.VFC = () => {
  const theme = useTheme<RestyleTheme>();
  return (
    <Box>
      <Text variant="font20Bold" marginHorizontal="p24" marginTop="p32">
        募集中のイベント
      </Text>
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled marginTop="p24">
        <CardEventSmall
          title="タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル…"
          likeCount="999"
          userNickname="東洋 太郎"
          userDetails="5/5"
        />
        <CardEventSmall
          title="タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル…"
          likeCount="999"
          userNickname="東洋 太郎"
          userDetails="5/5"
        />
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
