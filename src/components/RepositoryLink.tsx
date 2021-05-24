import {DocusaurusContext} from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, {PropsWithChildren} from 'react';

export type RepositoryLinkProps = {
  path?: string;
};

export const RepositoryLink: React.FC<PropsWithChildren<RepositoryLinkProps>> = ({path, children}) => {
  const {siteConfig} = useDocusaurusContext() as DocusaurusContext;
  const href = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}${path ?? ''}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
