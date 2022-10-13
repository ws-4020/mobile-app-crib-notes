import React from 'react';

import {Box} from '../common';
import {Snackbar} from '../snackbar/Snackbar';
import {MarkdownToolbarItem} from './MarkdownToolbarItem';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

const MarkdownToolbarDivider: React.FC<React.PropsWithChildren<unknown>> = () => (
  <Box marginLeft="p8" marginRight="p16" width={0.5} backgroundColor="divider" />
);

const Space: React.FC<React.PropsWithChildren<unknown>> = () => <Box width={8} />;

export const MarkdownToolbar: React.FC<React.PropsWithChildren<unknown>> = () => (
  <Box backgroundColor="grey3" padding="p16" flexDirection="row">
    <MarkdownToolbarItem text="B" onPress={showUnderDevelopment} />
    <Space />
    <MarkdownToolbarItem text="I" onPress={showUnderDevelopment} />
    <Space />
    <MarkdownToolbarItem text="U" onPress={showUnderDevelopment} />
    <Space />
    <MarkdownToolbarDivider />
    <MarkdownToolbarItem text="tT" onPress={showUnderDevelopment} />
    <Space />
    <MarkdownToolbarItem text="/T" onPress={showUnderDevelopment} />
    <Space />
    <MarkdownToolbarItem text="''" onPress={showUnderDevelopment} />
    <Space />
    <MarkdownToolbarDivider />
    <MarkdownToolbarItem text="=" onPress={showUnderDevelopment} />
  </Box>
);
