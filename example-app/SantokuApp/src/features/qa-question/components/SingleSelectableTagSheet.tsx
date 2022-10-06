import {Tag as TagType} from 'features/backend/apis/model';
import React, {useCallback, useState} from 'react';

import {TagSheet} from './TagSheet';

type TagSheetProps = {
  tags?: TagType[];
  isVisible: boolean;
  initialSelectedTagId?: string;
  select: (tagId?: string) => void;
};
export const SingleSelectableTagSheet: React.FC<TagSheetProps> = ({tags, isVisible, initialSelectedTagId, select}) => {
  const [selectedTagId, setSelectedTagId] = useState(initialSelectedTagId);

  const clear = useCallback(() => setSelectedTagId(undefined), []);

  const selectTag = useCallback((value: string) => {
    setSelectedTagId(value);
  }, []);
  const decide = useCallback(() => select(selectedTagId), [select, selectedTagId]);
  const isActive = useCallback((tagId: string) => selectedTagId === tagId, [selectedTagId]);

  return (
    <TagSheet
      tags={tags}
      isVisible={isVisible}
      clear={clear}
      decide={decide}
      selectTag={selectTag}
      isActive={isActive}
    />
  );
};
