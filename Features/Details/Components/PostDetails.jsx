import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function PostDetails({ username, body, time }) {
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
      <Text>
        Time:
        {' '}
        {time}
      </Text>
    </>
  );
}

PostDetails.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
