import {m} from 'bases/message/Message';
import {Box, StyledScrollView, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledTextInput} from 'bases/ui/common/StyledTextInput';
import {BeginnerMarkIllustration} from 'bases/ui/illastration/BeginnerMarkIllustration';
import {FormatAlignLeftIllustration} from 'bases/ui/illastration/FormatAlignLeftIllustration';
import {MarkdownToolbar} from 'bases/ui/markdown/MarkdownToolbar';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {InputAccessoryView, Keyboard, Platform} from 'react-native';

import {useQuestionForm} from '../forms/useQuestionForm';
import {useTemplates} from '../services/useTemplates';
import {TemplateChip} from './TemplateChip';
import {TemplateClearChip} from './TemplateClearChip';

type QuestionPostProps = {
  isVisibleTagSheet: boolean;
  pageHeight: number;
  contentMaxHeight?: number;
} & ReturnType<typeof useQuestionForm>;

export const QuestionPost: React.FC<QuestionPostProps> = ({
  form,
  setContent,
  setBeginner,
  clearContent,
  pageHeight,
}) => {
  const {data: templates} = useTemplates();
  const beginnerMarkOpacity = useMemo(() => (form.values.beginner ? 1 : 0.2), [form.values.beginner]);
  const toggleBeginner = useCallback(() => setBeginner(!form.values.beginner), [form.values.beginner, setBeginner]);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const contentHeight = useMemo(
    () => (keyboardHeight === 0 ? undefined : pageHeight - keyboardHeight),
    [keyboardHeight, pageHeight],
  );
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', e => setKeyboardHeight(e.endCoordinates.height));
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => setKeyboardHeight(0));
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <StyledScrollView pt="p16" px="p24">
      <Text fontSize={16} lineHeight={24} color="textRed">
        {m('TISインテックグループで共同利用されるため、社外秘情報（画像含む）を投稿しないでください')}
      </Text>
      <Box height={16} />
      <Box flexDirection="row" alignItems="center">
        <StyledTouchableOpacity onPress={toggleBeginner}>
          <BeginnerMarkIllustration opacity={beginnerMarkOpacity} />
        </StyledTouchableOpacity>
        <Box px="p4" />
        <Text fontSize={13} lineHeight={19.5}>
          {m('初歩的な質問内容の場合はチェックしてください')}
        </Text>
      </Box>
      <StyledTextInput
        marginTop="p24"
        placeholder={m('タイトル')}
        multiline
        fontSize={20}
        fontWeight="700"
        lineHeight={24}
        value={form.values.title}
        onChangeText={form.handleChange('title')}
        errorMessage={form.errors.title}
        inputAccessoryViewID="markdown-toolbar"
      />
      <Box py="p12" />
      <Box flexDirection="row" alignItems="center" height={28}>
        <FormatAlignLeftIllustration />
        {templates?.length && (
          <>
            <Box px="p4" />
            <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
              {templates.map((template, index) => (
                <Box key={template.templateId} flexDirection="row">
                  <TemplateChip text={template.title} onPress={() => setContent(template.content)} />
                  {index < templates.length - 1 && <Box px="p4" />}
                </Box>
              ))}
              <TemplateClearChip onPress={clearContent} />
            </StyledScrollView>
          </>
        )}
      </Box>
      <Box py="p12" />
      <StyledTextInput
        placeholder={m('コメントを入力')}
        multiline
        fontSize={14}
        fontWeight="700"
        lineHeight={21}
        height={Platform.select({ios: contentHeight})}
        minHeight={Platform.select({ios: 300})}
        value={form.values.content}
        onChangeText={form.handleChange('content')}
        errorMessage={form.errors.content}
        inputAccessoryViewID="markdown-toolbar"
        textAlignVertical="top"
      />
      <Box py="p48" />
      {Platform.OS === 'ios' && (
        <InputAccessoryView nativeID="markdown-toolbar">
          <MarkdownToolbar />
        </InputAccessoryView>
      )}
    </StyledScrollView>
  );
};
