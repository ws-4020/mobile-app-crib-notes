import {m} from 'bases/message/Message';
import {Box, StyledScrollView, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledTextInput} from 'bases/ui/common/StyledTextInput';
import {BeginnerMarkIllustration} from 'bases/ui/illastration/BeginnerMarkIllustration';
import {FormatAlignLeftIllustration} from 'bases/ui/illastration/FormatAlignLeftIllustration';
import {MarkdownToolbar} from 'bases/ui/markdown/MarkdownToolbar';
import {Template} from 'features/backend/apis/model';
import React, {useCallback, useMemo} from 'react';
import {InputAccessoryView} from 'react-native';

import {useQuestionForm} from '../forms/useQuestionForm';
import {TagsSheet} from './TagsSheet';
import {TemplateChip} from './TemplateChip';
import {TemplateClearChip} from './TemplateClearChip';

// TODO: Backendから取得します。
const templates: Template[] = [
  {templateId: '1', title: '技術', content: '技術コンテンツ'},
  {templateId: '2', title: '提案', content: '提案コンテンツ'},
];

type QuestionPostProps = {
  isVisibleTagSheet: boolean;
} & ReturnType<typeof useQuestionForm>;

export const QuestionPost: React.FC<QuestionPostProps> = ({
  isVisibleTagSheet,
  form,
  reset,
  setContent,
  setTags,
  setBeginner,
}) => {
  const beginnerMarkOpacity = useMemo(() => (form.values.beginner ? 1 : 0.2), [form.values.beginner]);
  const toggleBeginner = useCallback(() => setBeginner(!form.values.beginner), [form.values.beginner, setBeginner]);

  return (
    <Box paddingTop="p16" paddingHorizontal="p24">
      <Text fontSize={16} lineHeight={24} color="textRed">
        {m('TISインテックグループで共同利用されるため、社外秘情報（画像含む）を投稿しないでください')}
      </Text>
      <Box height={16} />
      <Box flexDirection="row" alignItems="center">
        <StyledTouchableOpacity onPress={toggleBeginner}>
          <BeginnerMarkIllustration opacity={beginnerMarkOpacity} />
        </StyledTouchableOpacity>
        <Box width={8} />
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
      {templates.length > 0 && (
        <>
          <Box height={24} />
          <Box flexDirection="row" alignItems="center">
            <FormatAlignLeftIllustration />
            <Box width={8} />
            <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
              {templates.map((template, index) => (
                <Box key={template.templateId} flexDirection="row">
                  <TemplateChip text={template.title} onPress={() => setContent(template.content)} />
                  {index < templates.length - 1 && <Box width={8} />}
                </Box>
              ))}
              <TemplateClearChip onPress={reset} />
            </StyledScrollView>
          </Box>
        </>
      )}
      <StyledTextInput
        marginTop="p24"
        placeholder={m('コメントを入力')}
        multiline
        fontSize={14}
        fontWeight="700"
        lineHeight={21}
        value={form.values.content}
        onChangeText={form.handleChange('content')}
        errorMessage={form.errors.content}
        inputAccessoryViewID="markdown-toolbar"
      />
      <InputAccessoryView nativeID="markdown-toolbar">
        <MarkdownToolbar />
      </InputAccessoryView>
      <TagsSheet isVisible={isVisibleTagSheet} initialSelectedTagIds={form.values.tags} select={setTags} />
    </Box>
  );
};
