import React from 'react';
import { Button, View } from 'react-native';
import PropTypes from 'prop-types';
import PostDetails from '../Components/PostDetails';

export default function Details({ navigation }) {
  const navigateToFeed = () => {
    navigation.navigate('Feed');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PostDetails username="hi" />
      <Button
        title="To Feed"
        onPress={navigateToFeed}
      />
    </View>
  );
}

Details.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
