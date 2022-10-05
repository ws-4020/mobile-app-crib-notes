import {useTheme} from '@shopify/restyle';
import {Box, Text} from 'bases/ui/common';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import {Event} from 'features/backend/apis/model';
import React, {FC} from 'react';
import {Dimensions} from 'react-native';

import {LikeWithCount} from './LikeWithCount';

const screenWidth = Dimensions.get('screen').width;

export type CardEventSmallProps = {event: Event};

export const EventListCard: FC<CardEventSmallProps> = ({event: {title, likes, profile}}) => {
  const theme = useTheme<RestyleTheme>();
  return (
    <Box
      backgroundColor="white"
      width={screenWidth - theme.spacing.p16 * 2}
      px="p24"
      py="p16"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="p16"
      shadowColor="black"
      shadowOffset={{width: 2, height: 2}}
      shadowRadius={0}
      shadowOpacity={0.1}
      elevation={1}>
      <Text variant="font22Bold" textDecorationLine="underline" numberOfLines={3} ellipsizeMode="tail">
        {title}
      </Text>
      <Box flexDirection="row" justifyContent="space-between" alignItems="center" marginTop="p16">
        <LikeWithCount count={likes} />
        <Box px="p16" />
        <Box flex={1} flexDirection="column">
          <Text variant="font18SemiBold" lineHeight={22} letterSpacing={0.15} color="black2">
            {profile?.nickname}
          </Text>
          <Box flexDirection="row" alignItems="center" justifyContent="space-between">
            <Text variant="font14Regular" letterSpacing={0.25} color="black2">
              {profile?.points}/{profile?.totalPoints}
            </Text>
          </Box>
        </Box>
        <PersonIllustration size="p40" marginLeft="p16" />
      </Box>
    </Box>
  );
};
