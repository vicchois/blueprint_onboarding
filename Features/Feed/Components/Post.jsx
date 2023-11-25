import React from 'react';
import { Text, Button } from 'react-native';
import PropTypes from 'prop-types';

export default function Post({
  username, body, time, navigation,
}) {
  const handleDetails = () => {
    navigation.navigate('Details', { username, body, time });
  };

  return (
    <>
      <Text>
        Author:
        {' '}
        {username}
      </Text>
      <Text>
        Body:
        {' '}
        {body}
      </Text>
      <Button
        title="Details"
        onPress={handleDetails}
      />
    </>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
