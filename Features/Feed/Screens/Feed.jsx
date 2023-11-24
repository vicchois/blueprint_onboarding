// npm i
// npx expo start

import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Post from '../Components/Post';
import NewPostForm from '../Components/NewPostForm';

export default function Feed({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [newId, setNewId] = useState(0);

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  const addNewPost = (newPost) => {
    const updatedPosts = [...posts];
    updatedPosts.push({ ...newPost, _id: newId });
    setPosts(updatedPosts);
    setNewId((id) => (id + 1));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Posts</Text>
      <NewPostForm addNewPost={addNewPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          body={post.body}
          // time={post.time}
          navigation={navigation}
        />
      ))}

      <Button
        title="To Landing"
        onPress={navigateToLanding}
      />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
