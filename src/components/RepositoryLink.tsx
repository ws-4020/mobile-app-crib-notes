import {DocusaurusContext} from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, {ComponentProps, PropsWithChildren} from 'react';

export type RepositoryLinkProps = {
  path?: string;
  projectName?: string;
};

export const RepositoryLink: React.FC<PropsWithChildren<RepositoryLinkProps & ComponentProps<'a'>>> = ({
  path,
  projectName,
  children,
  ...anchorProps
}) => {
  const {siteConfig} = useDocusaurusContext() as DocusaurusContext;
  const href = `https://github.com/${siteConfig.organizationName}/${
    projectName ? projectName : siteConfig.projectName
  }${path ?? ''}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...anchorProps}>
      {children}
    </a>
  );
};

export const GithubContentsUrl: React.FC<RepositoryLinkProps> = ({path, projectName}) => {
  const {siteConfig} = useDocusaurusContext() as DocusaurusContext;
  const url = `https://raw.githubusercontent.com/${siteConfig.organizationName}/${
    projectName ? projectName : siteConfig.projectName
  }${path ?? ''}`;
  return <span>`${url}`</span>;
};
