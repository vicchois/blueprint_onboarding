import React from 'react';
import { Button, View } from 'react-native';
import PropTypes from 'prop-types';
import PostDetails from '../Components/PostDetails';

export default function Details({ route, navigation }) {
  const { username, body, time } = route.params;

  const navigateToFeed = () => {
    navigation.navigate('Feed');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PostDetails username={username} body={body} time={time} />
      <Button
        title="To Feed"
        onPress={navigateToFeed}
      />
    </View>
  );
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
