import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default function NewPostForm({ addNewPost }) {
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');

  const handleAddPost = () => {
    const currentTime = new Date().toISOString();
    addNewPost({ username, body, time: currentTime });
    setUsername('');
    setBody('');
  };

  return (
    <>
      <TextInput
        placeholder="Author: "
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="Body: "
        onChangeText={setBody}
        value={body}
      />
      <Button title="Print" onPress={handleAddPost} />
    </>
  );
}

NewPostForm.propTypes = {
  addNewPost: PropTypes.func.isRequired,
};
