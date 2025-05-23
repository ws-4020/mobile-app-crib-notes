export type ThirdPartyDependency = {
  type: string;
  id: string;
  name?: string;
  version?: string;
  repository?: string;
  licenses?: string | string[];
  licenseContentModuleId?: number;
  noticeContentModuleId?: number;
};
import {Platform} from 'react-native';
const usingTypes = Platform.select({
  ios: ['npm', 'cocoapods'],
  android: ['npm', 'gradle'],
});
export const ThirdPartyDependencies: ThirdPartyDependency[] = [
  {
    type: 'npm',
    id: 'npm:@mswjs/data@0.14.0',
    name: '@mswjs/data',
    version: '0.14.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b7e6f39fae834b72ef575518b0d88d5200e04b65cba72c12ab67b2a449170999.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@notifee/react-native@5.7.0',
    name: '@notifee/react-native',
    version: '5.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/a8b96ed52dc019953943e9f43e5f1279865eecc5c495fc662c5d2dc3195bbe46.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-async-storage/async-storage@1.23.1',
    name: '@react-native-async-storage/async-storage',
    version: '1.23.1',
    licenseContentModuleId:
      require('../../../assets/licenses/212dbf14b113759356207347826f21ac3c81151943fdb89ce25da5dc6214831c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/datetimepicker@8.0.1',
    name: '@react-native-community/datetimepicker',
    version: '8.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/3f4b86b90801dc5ebeef0e70533241805502f7496bfe5dba2d131eaed837b0a3.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-community/netinfo@11.3.1',
    name: '@react-native-community/netinfo',
    version: '11.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-firebase/app@18.5.0',
    name: '@react-native-firebase/app',
    version: '18.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/ee8eb9aaab62cc99d7ab756a29d3016f3b80ae56be8cc25ae30af43515032f54.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-firebase/crashlytics@18.5.0',
    name: '@react-native-firebase/crashlytics',
    version: '18.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9d1200165d417ce68417864b4f62ae7196686f4ca205975f8fe4cf311742b99a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-firebase/messaging@18.5.0',
    name: '@react-native-firebase/messaging',
    version: '18.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9d1200165d417ce68417864b4f62ae7196686f4ca205975f8fe4cf311742b99a.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-masked-view/masked-view@0.3.1',
    name: '@react-native-masked-view/masked-view',
    version: '0.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-native-picker/picker@2.7.5',
    name: '@react-native-picker/picker',
    version: '2.7.5',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/bottom-tabs@6.6.1',
    name: '@react-navigation/bottom-tabs',
    version: '6.6.1',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/core@6.4.17',
    name: '@react-navigation/core',
    version: '6.4.17',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/drawer@6.7.2',
    name: '@react-navigation/drawer',
    version: '6.7.2',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/elements@1.3.31',
    name: '@react-navigation/elements',
    version: '1.3.31',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/native@6.1.18',
    name: '@react-navigation/native',
    version: '6.1.18',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/native-stack@6.11.0',
    name: '@react-navigation/native-stack',
    version: '6.11.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@react-navigation/stack@6.4.1',
    name: '@react-navigation/stack',
    version: '6.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/c3bc4b85acdbcfe7b2ffe3c986dcfc0cc98980c1b98154c87fa5a894acd9ac78.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@shopify/restyle@2.4.4',
    name: '@shopify/restyle',
    version: '2.4.4',
    licenseContentModuleId:
      require('../../../assets/licenses/0873555e5ade346c4a052c3dcd4b6a1952036d4fc8b8c8f1d49483f577c5e3b1.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:@tanstack/react-query@4.36.1',
    name: '@tanstack/react-query',
    version: '4.36.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a405ee70c632bb938acb7ac5f210e814409b3760ea9d2329d8ed8ffcfd11a0e7.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.activity:activity:1.6.0',
    name: 'Activity',
    version: '1.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.startup:startup-runtime:1.1.1',
    name: 'Android App Startup Runtime',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.appcompat:appcompat:1.6.1',
    name: 'Android AppCompat Library',
    version: '1.6.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.arch.core:core-common:2.1.0',
    name: 'Android Arch-Common',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.arch.core:core-runtime:2.1.0',
    name: 'Android Arch-Runtime',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.constraintlayout:constraintlayout:2.0.1',
    name: 'Android ConstraintLayout',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.constraintlayout:constraintlayout-solver:2.0.1',
    name: 'Android ConstraintLayout Solver',
    version: '2.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.datastore:datastore:1.0.0',
    name: 'Android DataStore',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.datastore:datastore-core:1.0.0',
    name: 'Android DataStore Core',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.sqlite:sqlite:2.1.0',
    name: 'Android DB',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.emoji2:emoji2:1.2.0',
    name: 'Android Emoji2 Compat',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.emoji2:emoji2-views-helper:1.2.0',
    name: 'Android Emoji2 Compat view helpers',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-extensions:2.2.0',
    name: 'Android Lifecycle Extensions',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-livedata:2.2.0',
    name: 'Android Lifecycle LiveData',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-livedata-core:2.5.1',
    name: 'Android Lifecycle LiveData Core',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-process:2.4.1',
    name: 'Android Lifecycle Process',
    version: '2.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-runtime:2.5.1',
    name: 'Android Lifecycle Runtime',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-service:2.2.0',
    name: 'Android Lifecycle Service',
    version: '2.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-viewmodel:2.5.1',
    name: 'Android Lifecycle ViewModel',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-viewmodel-savedstate:2.5.1',
    name: 'Android Lifecycle ViewModel with SavedState',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-common:2.5.1',
    name: 'Android Lifecycle-Common',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.lifecycle:lifecycle-common-java8:2.5.1',
    name: 'Android Lifecycle-Common for Java 8 Language',
    version: '2.5.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.datastore:datastore-preferences:1.0.0',
    name: 'Android Preferences DataStore',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.datastore:datastore-preferences-core:1.0.0',
    name: 'Android Preferences DataStore Core',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.resourceinspection:resourceinspection-annotation:1.0.1',
    name: 'Android Resource Inspection - Annotations',
    version: '1.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.appcompat:appcompat-resources:1.6.1',
    name: 'Android Resources Library',
    version: '1.6.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.room:room-common:2.2.5',
    name: 'Android Room-Common',
    version: '2.2.5',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.room:room-runtime:2.2.5',
    name: 'Android Room-Runtime',
    version: '2.2.5',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.vectordrawable:vectordrawable-animated:1.1.0',
    name: 'Android Support AnimatedVectorDrawable',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.cardview:cardview:1.0.0',
    name: 'Android Support CardView v7',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.dynamicanimation:dynamicanimation:1.0.0',
    name: 'Android Support DynamicAnimation',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.annotation:annotation:1.1.0',
    name: 'Android Support Library Annotations',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.asynclayoutinflater:asynclayoutinflater:1.0.0',
    name: 'Android Support Library Async Layout Inflater',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.collection:collection:1.1.0',
    name: 'Android Support Library collections',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.coordinatorlayout:coordinatorlayout:1.2.0',
    name: 'Android Support Library Coordinator Layout',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.legacy:legacy-support-core-ui:1.0.0',
    name: 'Android Support Library core UI',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.legacy:legacy-support-core-utils:1.0.0',
    name: 'Android Support Library core utils',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.cursoradapter:cursoradapter:1.0.0',
    name: 'Android Support Library Cursor Adapter',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.swiperefreshlayout:swiperefreshlayout:1.1.0',
    name: 'Android Support Library Custom View',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.customview:customview:1.1.0',
    name: 'Android Support Library Custom View',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.documentfile:documentfile:1.0.0',
    name: 'Android Support Library Document File',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.drawerlayout:drawerlayout:1.1.1',
    name: 'Android Support Library Drawer Layout',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.fragment:fragment:1.3.6',
    name: 'Android Support Library fragment',
    version: '1.3.6',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.interpolator:interpolator:1.0.0',
    name: 'Android Support Library Interpolators',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.loader:loader:1.0.0',
    name: 'Android Support Library loader',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.localbroadcastmanager:localbroadcastmanager:1.0.0',
    name: 'Android Support Library Local Broadcast Manager',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.media:media:1.0.0',
    name: 'Android Support Library media compat',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.print:print:1.0.0',
    name: 'Android Support Library Print',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.slidingpanelayout:slidingpanelayout:1.0.0',
    name: 'Android Support Library Sliding Pane Layout',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.legacy:legacy-support-v4:1.0.0',
    name: 'Android Support Library v4',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.viewpager:viewpager:1.0.0',
    name: 'Android Support Library View Pager',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.recyclerview:recyclerview:1.1.0',
    name: 'Android Support RecyclerView v7',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.sqlite:sqlite-framework:2.1.0',
    name: 'Android Support SQLite - Framework Implementation',
    version: '2.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.vectordrawable:vectordrawable:1.1.0',
    name: 'Android Support VectorDrawable',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.tracing:tracing:1.2.0',
    name: 'Android Tracing',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.tracing:tracing-ktx:1.2.0',
    name: 'Android Tracing Runtime Kotlin Extensions',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.transition:transition:1.2.0',
    name: 'Android Transition Support Library',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.work:work-runtime:2.7.1',
    name: 'Android WorkManager Runtime',
    version: '2.7.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.maps.android:android-maps-utils:3.8.2',
    name: 'android-maps-utils',
    version: '3.8.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.autofill:autofill:1.1.0',
    name: 'AndroidX Autofill',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.concurrent:concurrent-futures:1.1.0',
    name: 'AndroidX Futures',
    version: '1.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.viewpager2:viewpager2:1.0.0',
    name: 'AndroidX Widget ViewPager2',
    version: '1.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:animated-base:3.1.3',
    name: 'AnimatedBase',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:animated-drawable:3.1.3',
    name: 'AnimatedDrawable',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:animated-gif:3.1.3',
    name: 'AnimatedGif',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.annotation:annotation-jvm:1.7.1',
    name: 'Annotation',
    version: '1.7.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:commons-codec:commons-codec:1.10',
    name: 'Apache Commons Codec',
    version: '1.10',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:commons-io:commons-io:2.6',
    name: 'Apache Commons IO',
    version: '2.6',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:axios@1.6.8',
    name: 'axios',
    version: '1.6.8',
    licenseContentModuleId:
      require('../../../assets/licenses/82761059eaedacb3356803aea8a170d8298609f91b14fc32ee1bfb40d690183c.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.biometric:biometric:1.2.0-alpha04',
    name: 'Biometric',
    version: '1.2.0-alpha04',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.parse.bolts:bolts-tasks:1.4.0',
    name: 'Bolts-Tasks',
    version: '1.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:boost@1.83.0',
    name: 'boost',
    version: '1.83.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c9bff75738922193e67fa726fa225535870d2aa1059f91452c411736284ad566.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.browser:browser:1.6.0',
    name: 'Browser',
    version: '1.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.core:core:1.12.0',
    name: 'Core',
    version: '1.12.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.core:core-ktx:1.12.0',
    name: 'Core Kotlin Extensions',
    version: '1.12.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:DoubleConversion@1.1.6',
    name: 'DoubleConversion',
    version: '1.1.6',
    licenseContentModuleId:
      require('../../../assets/licenses/4af93c12062c58058378de2397dc1c92bbff9ddfb1d583a01c84127557ce97ca.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:drawee:3.1.3',
    name: 'Drawee',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.errorprone:error_prone_annotations:2.9.0',
    name: 'error-prone annotations',
    version: '2.9.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.greenrobot:eventbus:3.2.0',
    name: 'EventBus',
    version: '3.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.annotation:annotation-experimental:1.3.0',
    name: 'Experimental annotation',
    version: '1.3.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo@51.0.34',
    name: 'expo',
    version: '51.0.34',
    licenseContentModuleId:
      require('../../../assets/licenses/2d280fd368b220895e96a6c5a60c6f807e3c089414650fb344253cf7c071c8cb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-application@5.9.1',
    name: 'expo-application',
    version: '5.9.1',
    licenseContentModuleId:
      require('../../../assets/licenses/a8cd79ca39e012a61dc1363e91c05a13506762c6e10ded42728819e9c26f7e4d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-build-properties@0.12.5',
    name: 'expo-build-properties',
    version: '0.12.5',
    licenseContentModuleId:
      require('../../../assets/licenses/8c53aa008c46eed37e9faa26f5a9f62c152137d221144709f0dddab89df80cc7.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-crypto@13.0.2',
    name: 'expo-crypto',
    version: '13.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/6ce08e228084762f2543568914a3beb998884f4d4060f58e20c951b7b6be9435.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-dev-client@4.0.27',
    name: 'expo-dev-client',
    version: '4.0.27',
    licenseContentModuleId:
      require('../../../assets/licenses/931e5ab53fb2adebe5cc2c494c14ab17e2f40170716f2961e5e8ae95737b6827.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-keep-awake@13.0.2',
    name: 'expo-keep-awake',
    version: '13.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/e38283767c0b3d104d14d14b0a0835533230c8189496037b475778ba5a7ba82d.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-linking@6.3.1',
    name: 'expo-linking',
    version: '6.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/491a683bb956056b6fa32e0118df29796053716ad693e1af4b64fecd0f97c912.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-local-authentication@14.0.1',
    name: 'expo-local-authentication',
    version: '14.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/d4e5d9df3b59fadc571334b9c7995931c3e95b802416b040bdabd762ba5a82e9.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-secure-store@13.0.2',
    name: 'expo-secure-store',
    version: '13.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/c910da9ff1fd543ea5de12a1c64665a533c6e40b2028423e62f593d2571ad82f.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-splash-screen@0.27.6',
    name: 'expo-splash-screen',
    version: '0.27.6',
    licenseContentModuleId:
      require('../../../assets/licenses/327b9e8f55cbaf9993e32c0a003b059c2c2070cd3934bd1281b315e5457801fd.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:expo-status-bar@1.12.1',
    name: 'expo-status-bar',
    version: '1.12.1',
    licenseContentModuleId:
      require('../../../assets/licenses/38328c09511f2b87b7427d990712bbfe55dde416a2766fe57ba84c3e761cbcd6.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:fbcore:3.1.3',
    name: 'Facebook Core',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fbjni:fbjni:0.6.0',
    name: 'fbjni',
    version: '0.6.0',
    licenseContentModuleId:
      require('../../../assets/licenses/f62d190c08e2b300b45780f0b3cabcacc78d0e373f7a0de79d31f82b084d35ea.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.code.findbugs:jsr305:3.0.2',
    name: 'FindBugs-jsr305',
    version: '3.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:Firebase@66043bd4579e5b73811f96829c694c7af8d67435',
    name: 'Firebase',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-annotations:16.2.0',
    name: 'firebase-annotations',
    version: '16.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-common:20.3.3',
    name: 'firebase-common',
    version: '20.3.3',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-common-ktx:20.3.3',
    name: 'firebase-common-ktx',
    version: '20.3.3',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-components:17.1.0',
    name: 'firebase-components',
    version: '17.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-crashlytics:18.4.3',
    name: 'firebase-crashlytics',
    version: '18.4.3',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-crashlytics-ndk:18.4.3',
    name: 'firebase-crashlytics-ndk',
    version: '18.4.3',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-datatransport:18.1.8',
    name: 'firebase-datatransport',
    version: '18.1.8',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-encoders:17.0.0',
    name: 'firebase-encoders',
    version: '17.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-encoders-json:18.0.1',
    name: 'firebase-encoders-json',
    version: '18.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-encoders-proto:16.0.0',
    name: 'firebase-encoders-proto',
    version: '16.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-iid-interop:17.1.0',
    name: 'firebase-iid-interop',
    version: '17.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-installations:17.1.4',
    name: 'firebase-installations',
    version: '17.1.4',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-installations-interop:17.1.0',
    name: 'firebase-installations-interop',
    version: '17.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-measurement-connector:19.0.0',
    name: 'firebase-measurement-connector',
    version: '19.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-messaging:23.2.1',
    name: 'firebase-messaging',
    version: '23.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.firebase:firebase-sessions:1.0.2',
    name: 'firebase-sessions',
    version: '1.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseCore@10.15.0',
    name: 'FirebaseCore',
    version: '10.15.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseCoreExtension@10.15.0',
    name: 'FirebaseCoreExtension',
    version: '10.15.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseCoreInternal@10.29.0',
    name: 'FirebaseCoreInternal',
    version: '10.29.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseCrashlytics@10.15.0',
    name: 'FirebaseCrashlytics',
    version: '10.15.0',
    licenseContentModuleId:
      require('../../../assets/licenses/50b21a92f4f7ced3432d8d8cdd9f6b7097c1487b77c9bedf771fa703259089ca.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseInstallations@10.29.0',
    name: 'FirebaseInstallations',
    version: '10.29.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseMessaging@10.15.0',
    name: 'FirebaseMessaging',
    version: '10.15.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:FirebaseSessions@10.29.0',
    name: 'FirebaseSessions',
    version: '10.29.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:fmt@9.1.0',
    name: 'fmt',
    version: '9.1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/825c9324e70f8c839c8ba910543dd4a7daee243b86ef960594c11381a19980b8.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:formik@2.4.6',
    name: 'formik',
    version: '2.4.6',
    licenseContentModuleId:
      require('../../../assets/licenses/185a473131376ec143033f3fb000b66ac411b31885f245bbbf4ad8bb75fe158f.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:fresco:3.1.3',
    name: 'Fresco',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:soloader:3.1.3',
    name: 'FrescoSoloader',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:glog@0.3.5',
    name: 'glog',
    version: '0.3.5',
    licenseContentModuleId:
      require('../../../assets/licenses/0fc497129c5c69ff6f22da6933c7e4aaef082fde8437fd57680c2780100772a4.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:GoogleDataTransport@9.4.1',
    name: 'GoogleDataTransport',
    version: '9.4.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:GoogleUtilities@ea963c370a38a8069cc5f7ba4ca849a60b6d7d15',
    name: 'GoogleUtilities',
    licenseContentModuleId:
      require('../../../assets/licenses/ad6d036b9a78f0e1700d68039c06058033fea063172ce2dc68e382a24b4d1928.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.code.gson:gson:2.8.6',
    name: 'Gson',
    version: '2.8.6',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.guava:listenablefuture:1.0',
    name: 'Guava ListenableFuture only',
    version: '1.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:hermes-engine@0.74.5',
    name: 'hermes-engine',
    version: '0.74.5',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:imagepipeline:3.1.3',
    name: 'ImagePipeline',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:imagepipeline-okhttp3:3.1.3',
    name: 'ImagePipeline-OkHttp 3 Integration',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:imagepipeline-base:3.1.3',
    name: 'ImagePipelineBase',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:imagepipeline-native:3.1.3',
    name: 'ImagePipelineNative',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.infer.annotation:infer-annotation:0.18.0',
    name: 'infer-annotation',
    version: '0.18.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.android.installreferrer:installreferrer:2.2',
    name: 'installreferrer',
    version: '2.2',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains:annotations:13.0',
    name: 'IntelliJ IDEA Annotations',
    version: '13.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:javax.inject:javax.inject:1',
    name: 'javax.inject',
    version: '1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:jsbarcode@3.11.6',
    name: 'jsbarcode',
    version: '3.11.6',
    licenseContentModuleId:
      require('../../../assets/licenses/e6e7fd6aec67045d0afd53a5b8835c8f29f285662b1a6e3fa73398a835b15b05.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:io.insert-koin:koin-core-jvm:3.4.0',
    name: 'koin-core',
    version: '3.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlin:kotlin-reflect:1.9.23',
    name: 'Kotlin Reflect',
    version: '1.9.23',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlin:kotlin-stdlib:1.9.23',
    name: 'Kotlin Stdlib',
    version: '1.9.23',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.9.23',
    name: 'Kotlin Stdlib Jdk7',
    version: '1.9.23',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.8.21',
    name: 'Kotlin Stdlib Jdk8',
    version: '1.8.21',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlinx:kotlinx-coroutines-android:1.6.4',
    name: 'kotlinx-coroutines-android',
    version: '1.6.4',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlinx:kotlinx-coroutines-core-jvm:1.6.4',
    name: 'kotlinx-coroutines-core',
    version: '1.6.4',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlinx:kotlinx-coroutines-play-services:1.6.4',
    name: 'kotlinx-coroutines-play-services',
    version: '1.6.4',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.material:material:1.6.1',
    name: 'Material Components for Android',
    version: '1.6.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:memory-type-java:3.1.3',
    name: 'MemoryTypeJava',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:memory-type-native:3.1.3',
    name: 'MemoryTypeNative',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:memory-type-ashmem:3.1.3',
    name: 'MemoryTypesAshmem',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:middleware:3.1.3',
    name: 'Middleware',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:msw@1.3.4',
    name: 'msw',
    version: '1.3.4',
    licenseContentModuleId:
      require('../../../assets/licenses/be7690d23425cbcf147da49a90e7c86009e614a51ba60127392546f75166e959.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:nanopb@2.30909.1',
    name: 'nanopb',
    version: '2.30909.1',
    licenseContentModuleId:
      require('../../../assets/licenses/e2f2fc8fe3faa7dcb09dbe995db48c6ec5c1f72705db915101e4a83fed44f66d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:nativeimagefilters:3.1.3',
    name: 'NativeImageFilters',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:nativeimagetranscoder:3.1.3',
    name: 'NativeImageTranscoder',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:node-fetch-with-proxy@0.1.6',
    name: 'node-fetch-with-proxy',
    version: '0.1.6',
    licenseContentModuleId:
      require('../../../assets/licenses/316ad7f114387b6c65343b0339fde3407f4ce027fe19331256d1cfb40742b0d5.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.squareup.okhttp3:okhttp:4.9.2',
    name: 'okhttp',
    version: '4.9.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.squareup.okhttp3:okhttp-urlconnection:4.9.2',
    name: 'okhttp-urlconnection',
    version: '4.9.2',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.squareup.okio:okio:2.9.0',
    name: 'Okio',
    version: '2.9.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:org.jetbrains.kotlin:kotlin-annotations-jvm:1.3.72',
    name: 'org.jetbrains.kotlin:kotlin-annotations-jvm',
    version: '1.3.72',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-auth:20.7.0',
    name: 'play-services-auth',
    version: '20.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-auth-api-phone:18.0.1',
    name: 'play-services-auth-api-phone',
    version: '18.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-auth-base:18.0.4',
    name: 'play-services-auth-base',
    version: '18.0.4',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-base:18.2.0',
    name: 'play-services-base',
    version: '18.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-basement:18.2.0',
    name: 'play-services-basement',
    version: '18.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-cloud-messaging:17.0.1',
    name: 'play-services-cloud-messaging',
    version: '17.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-fido:20.0.1',
    name: 'play-services-fido',
    version: '20.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-location:21.0.1',
    name: 'play-services-location',
    version: '21.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-maps:18.2.0',
    name: 'play-services-maps',
    version: '18.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-stats:17.0.2',
    name: 'play-services-stats',
    version: '17.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.gms:play-services-tasks:18.0.2',
    name: 'play-services-tasks',
    version: '18.0.2',
    licenseContentModuleId:
      require('../../../assets/licenses/b0cfc4b81e1364db8879b73f0707b7f9d3fde34450b1747c883e7ab0f844108d.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.yoga:proguard-annotations:1.19.0',
    name: 'Proguard Annotations',
    version: '1.19.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:PromisesObjC@2.4.0',
    name: 'PromisesObjC',
    version: '2.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:PromisesSwift@2.4.0',
    name: 'PromisesSwift',
    version: '2.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RCT-Folly@2024.01.01.00',
    name: 'RCT-Folly',
    version: '2024.01.01.00',
    licenseContentModuleId:
      require('../../../assets/licenses/2206c00af7013581ae0d7c8c8a0089f02fab621913daac019b32336bd4d1e1db.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:React@0.74.5',
    name: 'React',
    version: '0.74.5',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react@18.2.0',
    name: 'react',
    version: '18.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:React-Core@0.74.5',
    name: 'React-Core',
    version: '0.74.5',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-dom@18.2.0',
    name: 'react-dom',
    version: '18.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/52412d7bc7ce4157ea628bbaacb8829e0a9cb3c58f57f99176126bc8cf2bfc85.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native@0.74.5',
    name: 'react-native',
    version: '0.74.5',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-elements@3.4.3',
    name: 'react-native-elements',
    version: '3.4.3',
    licenseContentModuleId:
      require('../../../assets/licenses/cf1c4a31b2ae759282f5f41b1d6b72445aaf2dddcdc00076e17a728351ed8aef.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-gesture-handler@2.16.2',
    name: 'react-native-gesture-handler',
    version: '2.16.2',
    licenseContentModuleId:
      require('../../../assets/licenses/f1ae22eddd3a96c3b7b8a494ef03749ae6a1e19574bacc9c195d83c916de09e2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-maps@1.14.0',
    name: 'react-native-maps',
    version: '1.14.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4099a1a5146930614f6c88cab3d38676d460e0e349f3743693ade20e4407587e.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:react-native-maps@1.14.0',
    name: 'react-native-maps',
    version: '1.14.0',
    licenseContentModuleId:
      require('../../../assets/licenses/4099a1a5146930614f6c88cab3d38676d460e0e349f3743693ade20e4407587e.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:react-native-netinfo@11.3.1',
    name: 'react-native-netinfo',
    version: '11.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-qrcode-svg@6.3.2',
    name: 'react-native-qrcode-svg',
    version: '6.3.2',
    licenseContentModuleId:
      require('../../../assets/licenses/3f0a6105170ca0c9cc78a5d59e0fa4f89f74b7bbda2cc79417074201f09c52f4.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-reanimated@3.10.1',
    name: 'react-native-reanimated',
    version: '3.10.1',
    licenseContentModuleId:
      require('../../../assets/licenses/f1ae22eddd3a96c3b7b8a494ef03749ae6a1e19574bacc9c195d83c916de09e2.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-safe-area-context@4.10.5',
    name: 'react-native-safe-area-context',
    version: '4.10.5',
    licenseContentModuleId:
      require('../../../assets/licenses/f5c7a4d527258e11fdfe3d84eb73cd14fe6d64224ef051e59f6ee21fe378800c.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:react-native-safe-area-context@4.10.5',
    name: 'react-native-safe-area-context',
    version: '4.10.5',
    licenseContentModuleId:
      require('../../../assets/licenses/f5c7a4d527258e11fdfe3d84eb73cd14fe6d64224ef051e59f6ee21fe378800c.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-screens@3.31.1',
    name: 'react-native-screens',
    version: '3.31.1',
    licenseContentModuleId:
      require('../../../assets/licenses/95b52e497653b738fd50e4bd3a8197dc41593c63129acb4f8069dbf49530ef82.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-svg@15.2.0',
    name: 'react-native-svg',
    version: '15.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/1bc2aa7dad15097cd71308d9ae013ff14d11a84357b170c1554f4035fb8a3acb.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-web@0.19.12',
    name: 'react-native-web',
    version: '0.19.12',
    licenseContentModuleId:
      require('../../../assets/licenses/f961d81b4027c179ccd9200e72fa141f8c0575c1f3c93593f36645dc72bf5216.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:react-native-webview@13.8.6',
    name: 'react-native-webview',
    version: '13.8.6',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:react-native-webview@13.8.6',
    name: 'react-native-webview',
    version: '13.8.6',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNCAsyncStorage@1.23.1',
    name: 'RNCAsyncStorage',
    version: '1.23.1',
    licenseContentModuleId:
      require('../../../assets/licenses/212dbf14b113759356207347826f21ac3c81151943fdb89ce25da5dc6214831c.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNCMaskedView@0.3.1',
    name: 'RNCMaskedView',
    version: '0.3.1',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNCPicker@2.7.5',
    name: 'RNCPicker',
    version: '2.7.5',
    licenseContentModuleId:
      require('../../../assets/licenses/22a28f29cff8f5ecf9f463301d9c03b8245a2952ebae0bcab633fd654c0792fb.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNDateTimePicker@8.0.1',
    name: 'RNDateTimePicker',
    version: '8.0.1',
    licenseContentModuleId:
      require('../../../assets/licenses/3f4b86b90801dc5ebeef0e70533241805502f7496bfe5dba2d131eaed837b0a3.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNFBApp@18.5.0',
    name: 'RNFBApp',
    version: '18.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/ee8eb9aaab62cc99d7ab756a29d3016f3b80ae56be8cc25ae30af43515032f54.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNFBCrashlytics@18.5.0',
    name: 'RNFBCrashlytics',
    version: '18.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9d1200165d417ce68417864b4f62ae7196686f4ca205975f8fe4cf311742b99a.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNFBMessaging@18.5.0',
    name: 'RNFBMessaging',
    version: '18.5.0',
    licenseContentModuleId:
      require('../../../assets/licenses/9d1200165d417ce68417864b4f62ae7196686f4ca205975f8fe4cf311742b99a.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNGestureHandler@2.16.2',
    name: 'RNGestureHandler',
    version: '2.16.2',
    licenseContentModuleId:
      require('../../../assets/licenses/f1ae22eddd3a96c3b7b8a494ef03749ae6a1e19574bacc9c195d83c916de09e2.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNNotifee@5.7.0',
    name: 'RNNotifee',
    version: '5.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/a8b96ed52dc019953943e9f43e5f1279865eecc5c495fc662c5d2dc3195bbe46.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNReanimated@3.10.1',
    name: 'RNReanimated',
    version: '3.10.1',
    licenseContentModuleId:
      require('../../../assets/licenses/f1ae22eddd3a96c3b7b8a494ef03749ae6a1e19574bacc9c195d83c916de09e2.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNScreens@3.31.1',
    name: 'RNScreens',
    version: '3.31.1',
    licenseContentModuleId:
      require('../../../assets/licenses/95b52e497653b738fd50e4bd3a8197dc41593c63129acb4f8069dbf49530ef82.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:RNSVG@15.2.0',
    name: 'RNSVG',
    version: '15.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/1bc2aa7dad15097cd71308d9ae013ff14d11a84357b170c1554f4035fb8a3acb.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.savedstate:savedstate:1.2.0',
    name: 'Saved State',
    version: '1.2.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'cocoapods',
    id: 'cocoapods:SocketRocket@0.7.0',
    name: 'SocketRocket',
    version: '0.7.0',
    licenseContentModuleId:
      require('../../../assets/licenses/41c74b84758ab303b091b0afbf958de909559556c8f1591dc4d687ea184356ab.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.soloader:annotation:0.11.0',
    name: 'SoLoader',
    version: '0.11.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.soloader:nativeloader:0.11.0',
    name: 'SoLoader',
    version: '0.11.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.soloader:soloader:0.11.0',
    name: 'SoLoader',
    version: '0.11.0',
    licenseContentModuleId:
      require('../../../assets/licenses/c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.datatransport:transport-api:3.0.0',
    name: 'transport-api',
    version: '3.0.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.datatransport:transport-backend-cct:3.1.9',
    name: 'transport-backend-cct',
    version: '3.1.9',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.google.android.datatransport:transport-runtime:3.1.9',
    name: 'transport-runtime',
    version: '3.1.9',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:ui-common:3.1.3',
    name: 'UiCommon',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.versionedparcelable:versionedparcelable:1.1.1',
    name: 'VersionedParcelable',
    version: '1.1.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.databinding:viewbinding:8.2.1',
    name: 'viewbinding',
    version: '8.2.1',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:vito-options:3.1.3',
    name: 'VitoOptions',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:vito-renderer:3.1.3',
    name: 'VitoRenderer',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:com.facebook.fresco:webpsupport:3.1.3',
    name: 'WebpSupport',
    version: '3.1.3',
    licenseContentModuleId:
      require('../../../assets/licenses/da6d3703ed11cbe42bd212c725957c98da23cbff1998c05fa4b3d976d1a58e93.license.txt') as number,
  },
  {
    type: 'gradle',
    id: 'gradle:androidx.webkit:webkit:1.4.0',
    name: 'WebView Support Library',
    version: '1.4.0',
    licenseContentModuleId:
      require('../../../assets/licenses/cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30.license.txt') as number,
  },
  {
    type: 'npm',
    id: 'npm:yup@1.3.3',
    name: 'yup',
    version: '1.3.3',
    licenseContentModuleId:
      require('../../../assets/licenses/89ae1a9d73f2eb3948e37c810309ccc04e5c2c81cb83618df6bb6429d73d9fc1.license.txt') as number,
  },
].filter(d => {
  return usingTypes?.includes(d.type);
});
