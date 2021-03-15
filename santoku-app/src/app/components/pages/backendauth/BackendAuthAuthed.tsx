import {Content, Spinner} from 'native-base';
import React, {useCallback, useState} from 'react';
import {useBackendAuthContext} from '../../../context/BackendAuthContext';
import {Container, Description, Section, TextButton} from '../../basics';

export const BackendAuthAuthed: React.FC = () => {
  const authContext = useBackendAuthContext();
  const [loading, setLoading] = useState<boolean>(false);
  const signOut = useCallback(async () => {
    setLoading(true);
    await authContext.logout();
    setLoading(false);
  }, [authContext]);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <Content>
          <Description>認証済み</Description>
          <Section>
            <TextButton onPress={signOut} value={'サインアウト'} />
          </Section>
        </Content>
      )}
    </Container>
  );
};
