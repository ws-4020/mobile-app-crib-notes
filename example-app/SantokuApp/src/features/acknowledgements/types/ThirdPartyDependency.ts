export type ThirdPartyDependency = {
  type: string;
  id: string;
  name?: string;
  version?: string;
  repository?: string;
  licenses?: string | string[];
  licenseFileName?: string;
  licenseContentModuleId?: number;
  noticeFileName?: string;
  noticeContentModuleId?: number;
};
