import React from 'react';
import {Image, Linking, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {INavigation} from '../../interface/INavigation';
import {MainRoutes} from '../../components/Navigation';
import R from '../../resources/R';

export type IProps = INavigation<MainRoutes, 'Details'>;

export const Details: React.FC<IProps> = ({route}) => {
  const {listItem} = route?.params;

  if (!listItem) {
    return (
      <View style={styles.emptyItemContainer}>
        <Text style={styles.emptyItem}>{R.string.details.empty}</Text>
      </View>
    );
  }

  const createdDate =
    listItem.created_at &&
    new Date(Date.parse(listItem.created_at)).toLocaleString();
  const isHaveOrg =
    listItem.org?.id ||
    listItem.org?.login ||
    listItem.org?.url ||
    listItem.org?.avatar_url;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: listItem.actor.avatar_url,
        }}
      />
      {/* Actor */}
      <Text style={styles.sectionTitle}>{R.string.details.actorInfo}</Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>{listItem.actor.login}</Text>
        <Text style={styles.text}>
          {R.string.details.actorId} - {listItem.actor.id}
        </Text>
      </View>
      {/* General */}
      <Text style={styles.sectionTitle}>{R.string.details.generalInfo}</Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.text}>
          {R.string.general.id} - {listItem.id}
        </Text>
        <Text style={styles.text}>
          {R.string.general.createdDate} - {createdDate}
        </Text>
        <Text style={styles.text}>Type - {listItem.type}</Text>
        {listItem.public && (
          <Text style={styles.text}>{R.string.details.public}</Text>
        )}
      </View>
      {/* Repo */}
      <Text style={styles.sectionTitle}>{R.string.details.repoInfo}</Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.text}>
          {R.string.general.id} - {listItem.repo?.id}
        </Text>
        <Text style={styles.text}>
          {R.string.details.name} - {listItem.repo?.name}
        </Text>
        <Text style={styles.text}>
          {R.string.details.repoInfo} -{' '}
          <Text onPress={() => Linking.openURL(listItem.repo?.url)}>
            {listItem.repo?.url}
          </Text>
        </Text>
      </View>
      {/* Organization */}
      {isHaveOrg && (
        <>
          <Text style={styles.sectionTitle}>{R.string.details.orgInfo}</Text>
          <View style={styles.sectionContainer}>
            {listItem.org?.id && (
              <Text style={styles.text}>
                {R.string.general.id} - {listItem.org.id}
              </Text>
            )}
            {listItem.org?.login && (
              <Text style={styles.text}>
                {R.string.details.name} - {listItem.org.login}
              </Text>
            )}
            {listItem.org?.url && (
              <Text style={styles.text}>
                {R.string.details.repoInfo} -{' '}
                <Text onPress={() => Linking.openURL(listItem.org.url)}>
                  {listItem.org.url}
                </Text>
              </Text>
            )}
            {listItem.org?.avatar_url && (
              <Image
                style={styles.orgAvatar}
                source={{
                  uri: listItem.org.avatar_url,
                }}
              />
            )}
          </View>
        </>
      )}
    </ScrollView>
  );
};
