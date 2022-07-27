import {useIsMounted} from 'bases/core/utils/useIsMounted';
import {Asset} from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import {useEffect, useState} from 'react';

const loadAssetContent = async (moduleId: number | undefined, callback: (content: string) => unknown) => {
  if (moduleId == null) {
    return;
  }
  return Asset.loadAsync(moduleId).then(assets => {
    if (assets?.length && assets[0].localUri) {
      return FileSystem.readAsStringAsync(assets[0].localUri, {encoding: 'utf8'}).then(callback);
    }
  });
};

export const useAssetContent = (moduleId?: number) => {
  const isMounted = useIsMounted();
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    setIsLoading(true);
    loadAssetContent(moduleId, content => {
      if (isMounted()) {
        setContent(content);
      }
    }).finally(() => {
      if (isMounted()) {
        setIsLoading(false);
      }
    });
  }, [isMounted, moduleId]);

  return [content, isLoading] as const;
};
