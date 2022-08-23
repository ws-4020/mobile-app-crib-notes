import {m} from 'bases/message/Message';
import {BottomSheet} from 'bases/ui/bottom-sheet/BottomSheet';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {Tag as TagType} from 'features/backend/apis/model';
import React, {useCallback, useState} from 'react';

import {Tag} from './Tag';

// TODO: Backendから取得します。
const tags: TagType[] = [
  {tagId: '1', tagName: '技術支援', questions: 1},
  {tagId: '2', tagName: 'react-native', questions: 1},
  {tagId: '3', tagName: 'typescript', questions: 1},
  {tagId: '4', tagName: 'javascript', questions: 1},
  {tagId: '5', tagName: 'aws', questions: 1},
  {tagId: '6', tagName: 'nablarch', questions: 1},
  {tagId: '7', tagName: 'flutter', questions: 1},
  {tagId: '8', tagName: 'react', questions: 1},
  {tagId: '9', tagName: 'mobile-application', questions: 1},
  {tagId: '10', tagName: 'c', questions: 1},
];

type TagSheetProps = {
  isVisible: boolean;
  initialSelectedTagIds: string[];
  select: (tagIds: string[]) => void;
};
export const TagsSheet: React.FC<TagSheetProps> = ({isVisible, initialSelectedTagIds, select}) => {
  const [selectedTagIds, setSelectedTagIds] = useState(initialSelectedTagIds);
  const selectTag = useCallback(
    (value: string) => {
      const index = selectedTagIds.indexOf(value);
      if (index === -1) {
        setSelectedTagIds(v => [...v, value]);
      } else {
        setSelectedTagIds(v => v.filter(i => i !== value));
      }
    },
    [selectedTagIds],
  );

  const selectTags = useCallback(() => select(selectedTagIds), [select, selectedTagIds]);

  return (
    // TODO: BottomSheetは暫定的な実装です。
    <BottomSheet isVisible={isVisible} containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
      <Box
        flexDirection="column"
        padding="p16"
        backgroundColor="white"
        borderTopLeftRadius="p16"
        borderTopRightRadius="p16">
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
          <Text>Tag</Text>
          <Box flexDirection="row">
            <StyledTouchableOpacity marginRight="p8" paddingHorizontal="p8" paddingVertical="p2" onPress={() => {}}>
              <Text fontSize={14} lineHeight={20}>
                {m('クリア')}
              </Text>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity onPress={selectTags}>
              <Text fontSize={14} lineHeight={20} color="blue" paddingHorizontal="p8" paddingVertical="p2">
                {m('決定')}
              </Text>
            </StyledTouchableOpacity>
          </Box>
        </Box>
        <Box flex={1} marginTop="p24" flexDirection="row" flexWrap="wrap">
          {tags.map(tag => (
            <StyledTouchableOpacity key={tag.tagId} marginBottom="p8" onPress={() => selectTag(tag.tagId)}>
              <Tag text={tag.tagName} isActive={selectedTagIds.indexOf(tag.tagId) !== -1} />
            </StyledTouchableOpacity>
          ))}
        </Box>
      </Box>
    </BottomSheet>
  );
};
