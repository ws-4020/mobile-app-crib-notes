import {ConfigPlugin, withXcodeProject} from 'expo/config-plugins';

import {PbxProjectConfig} from './PbxProjectConfig';

type CredentialsProps = {
  developmentTeam?: string;
  codeSignStyle?: string;
  provisioningProfileSpecifier?: string;
  bundleIdentifier?: string;
  codeSignIdentity?: string;
};

/**
 * BundleIdentifierや署名に関する設定をします。
 * @param config ExpoConfig
 * @param developmentTeam
 * @param codeSignStyle
 * @param provisioningProfileSpecifier
 * @param bundleIdentifier
 * @param codeSignIdentity ビルドで使用する証明書に合わせて設定する。例えば、開発用証明書の場合は"iPhone Developer"、配布用証明書の場合は"iPhone Distribution"を指定する。
 */
export const withIosSetCredentials: ConfigPlugin<CredentialsProps> = (
  config,
  {developmentTeam, codeSignStyle, provisioningProfileSpecifier, bundleIdentifier, codeSignIdentity},
) => {
  return withXcodeProject(config, config => {
    const pbxProject = PbxProjectConfig.getPbxProject(config);
    const buildConfigurations = PbxProjectConfig.getBuildConfigurations(pbxProject);

    const editedBuildConfigurations = buildConfigurations.reduce((prev, buildConfiguration) => {
      const id = Object.keys(buildConfiguration)[0];
      if (buildConfiguration[id].buildSettings?.PRODUCT_BUNDLE_IDENTIFIER) {
        return {
          ...prev,
          [id]: {
            ...buildConfiguration[id],
            buildSettings: {
              ...buildConfiguration[id].buildSettings,
              ...(bundleIdentifier && {PRODUCT_BUNDLE_IDENTIFIER: `"${bundleIdentifier}"`}),
              ...(developmentTeam && {DEVELOPMENT_TEAM: `"${developmentTeam}"`}),
              ...(codeSignStyle && {CODE_SIGN_STYLE: `"${codeSignStyle}"`}),
              ...(provisioningProfileSpecifier && {
                PROVISIONING_PROFILE_SPECIFIER: `"${provisioningProfileSpecifier}"`,
              }),
              ...(codeSignIdentity && {CODE_SIGN_IDENTITY: `"${codeSignIdentity}"`}),
            },
          },
        };
      }

      return {
        ...prev,
        ...buildConfiguration,
      };
    }, {});

    config.modResults = PbxProjectConfig.mergeBuildConfigurations(pbxProject, editedBuildConfigurations);

    return config;
  });
};
