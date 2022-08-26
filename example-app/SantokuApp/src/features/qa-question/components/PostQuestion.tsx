import {useTheme} from '@shopify/restyle';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React, {FC} from 'react';

export type PostQuestionProps = {
  title: string;
  details: string;
  likeCount?: string;
  userNickname: string;
  userDetails: string;
  onPress?: () => void;
};

export const PostQuestion: FC<PostQuestionProps> = ({
  title,
  details,
  likeCount,
  userNickname,
  userDetails,
  onPress,
}) => {
  const theme = useTheme<RestyleTheme>();
  return (
    <Box
      backgroundColor="white"
      paddingHorizontal="p24"
      marginTop="p16"
      paddingTop="p24"
      paddingBottom="p16"
      shadowOffset={{width: 2, height: 2}}
      shadowColor="black"
      shadowOpacity={0.1}
      elevation={1}>
      <Box flexDirection="row" alignItems="center">
        <PersonIllustration />
        <Box flex={1} flexDirection="column" marginLeft="p16">
          <Text lineHeight={22} fontWeight="600" fontSize={18}>
            {userNickname}
          </Text>
          <Text>{userDetails}</Text>
        </Box>
        <StyledTouchableOpacity>
          <Text>3dot</Text>
        </StyledTouchableOpacity>
      </Box>
      <StyledTouchableOpacity onPress={onPress}>
        <Text marginTop="p24" fontSize={22} fontWeight="700" lineHeight={34} textDecorationLine="underline">
          {title}
        </Text>
      </StyledTouchableOpacity>
      <StyledTouchableOpacity onPress={onPress}>
        <Text marginTop="p16" fontSize={14} lineHeight={28}>
          {details}
        </Text>
      </StyledTouchableOpacity>
      <Box flexDirection="row" justifyContent="space-between" marginTop="p16">
        <StyledTouchableOpacity flexDirection="row" alignItems="center">
          <Text>Clock</Text>
          <Text marginLeft="p8" fontSize={14} fontWeight="600" lineHeight={20} color="grey1">
            20時間前
          </Text>
        </StyledTouchableOpacity>
        <Box flexDirection="row">
          <StyledTouchableOpacity flexDirection="row" alignItems="center" marginLeft="p8">
            <Text>View</Text>
            <Text marginLeft="p8" fontSize={14} lineHeight={20}>
              1
            </Text>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity flexDirection="row" alignItems="center" marginLeft="p8">
            <Text>Like</Text>
            <Text marginLeft="p8" fontSize={14} lineHeight={20}>
              {likeCount}
            </Text>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity flexDirection="row" alignItems="center" marginLeft="p8">
            <Text>Comment</Text>
            <Text marginLeft="p8" fontSize={14} lineHeight={20}>
              1
            </Text>
          </StyledTouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};
