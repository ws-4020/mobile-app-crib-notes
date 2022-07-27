import type {ThirdPartyDependency} from 'features/acknowledgements/types/ThirdPartyDependency';
import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';

import {ACKNOWLEDGEMENT_ITEM_HEIGHT} from '../constants/AcknowledgementItemHeight';
import {useThirdPartyDependenciesWithAction} from '../hooks/useThirdPartyDependenciesWithAction';
import {DependencyWithAction} from '../types/DependencyWithAction';
import {acknowledgementKeyExtractor} from '../utils/acknowledgementKeyExtractor';
import {getItemLayout} from '../utils/getItemLayout';

type AcknowledgementsPageProps = {
  navigateToLicense: (dependency: ThirdPartyDependency) => void;
};

export const AcknowledgementsPage: React.VFC<AcknowledgementsPageProps> = ({navigateToLicense}) => {
  const {thirdPartyDependenciesWithAction} = useThirdPartyDependenciesWithAction(navigateToLicense);
  return (
    <FlatList
      style={styles.container}
      data={thirdPartyDependenciesWithAction}
      renderItem={renderItem}
      keyExtractor={acknowledgementKeyExtractor}
      getItemLayout={getItemLayout}
    />
  );
};

const renderItem: ListRenderItem<DependencyWithAction> = ({item}) => <ListItem {...item} />;
const ListItem: React.FC<DependencyWithAction> = React.memo(({id, name, version, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listItemTouchable}>
      <View style={styles.listItemContainer}>
        <Text>
          <Text style={styles.dependencyName}>{name ?? id}</Text>
          <Text style={styles.dependencyVersion}> ({version})</Text>
        </Text>
      </View>
      <View style={styles.listItemRightIconContainer}>
        <Icon name="chevron-right" color="rgba(50,50,50,0.5)" style={styles.listItemRightIcon} />
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItemTouchable: {
    height: ACKNOWLEDGEMENT_ITEM_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(50,50,50,0.15)',
  },
  listItemContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  dependencyName: {
    color: 'rgba(50,50,50,1)',
    fontWeight: 'bold',
  },
  dependencyVersion: {
    color: 'rgba(50,50,50,0.5)',
  },
  listItemRightIconContainer: {
    flexShrink: 0,
    justifyContent: 'center',
  },
  listItemRightIcon: {
    width: 30,
  },
});
