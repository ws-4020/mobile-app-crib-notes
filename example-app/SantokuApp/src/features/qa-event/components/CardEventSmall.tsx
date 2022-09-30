import {useTheme} from '@shopify/restyle';
import {Box, Text, StyledTouchableOpacity} from 'bases/ui/common';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import React, {FC, useCallback} from 'react';
import {Dimensions} from 'react-native';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';

const screenWidth = Dimensions.get('screen').width;

export type CardEventSmallProps = {
  title: string;
  likeCount: number;
  userNickname?: string;
  userDetails: string;
  onLike?: () => void;
};

export const CardEventSmall: FC<CardEventSmallProps> = ({
  title,
  likeCount,
  userNickname,
  userDetails,
  onLike: externalOnLine,
}) => {
  const theme = useTheme<RestyleTheme>();
  const onLike = useCallback(() => externalOnLine?.(), [externalOnLine]);
  return (
    <Box
      backgroundColor="white"
      width={screenWidth - theme.spacing.p16 * 2}
      marginHorizontal="p16"
      marginBottom="p4"
      paddingHorizontal="p24"
      paddingVertical="p16"
      flexDirection="column"
      borderRadius={'p16'}
      shadowColor="black"
      shadowOffset={{width: 2, height: 2}}
      shadowRadius={0}
      shadowOpacity={0.1}
      elevation={1}>
      <Text variant="font22Bold" textDecorationLine="underline">
        {title}
      </Text>
      <Box flexDirection="row" alignItems="center" marginTop="p16">
        <StyledTouchableOpacity flexDirection="row" alignItems="center" onPress={onLike}>
          <Text>Like</Text>
          <Text marginLeft="p8" variant="font14Regular">
            {likeCount}
          </Text>
        </StyledTouchableOpacity>
        <Box flex={1} flexDirection="column" alignItems="flex-end">
          <Text variant="font18SemiBold">{userNickname}</Text>
          <Text variant="font14Regular">{userDetails}</Text>
        </Box>
        <PersonIllustration size="p40" marginLeft="p16" />
      </Box>
    </Box>
  );
};
