import React, { useEffect, useState } from 'react';

import PostComponent from '../Component/PostComponent';
import axios from 'axios';
import { toast } from 'react-toastify';

const PostContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [compLoading, setCompLoading] = useState(false);
  const url = process.env.REACT_APP_POST_API;
  const getPosts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${url}/posts`);
      const reversedPost = res.data.reverse();
      setPosts(reversedPost);
    } catch (error) {
      console.log(error);
      toast.error('Ada kesalahan dalam mengambil post');
    }
    setLoading(false);
  };
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  const addPost = async (value) => {
    setCompLoading(true);
    try {
      const res = await axios.post(`${url}/posts`, value);
      const newPost = [res.data, ...posts];
      setPosts(newPost);
      toast.success('Post telah berhasil di tambahkan');
    } catch (error) {
      console.log(error);
      toast.error('Ada kesalahan dalam menambah post');
    }
    setCompLoading(false);
  };

  const deletePost = (id) => {
    try {
      axios.delete(`${url}/posts/${id}`);
      //   const newPosts = Object.assign({}, posts);
      //   console.log('newPosts', newPosts);
      let afterDeletePost;
      let i;
      //   for (i = 0; i < posts.length; i++) {
      //     let singlePost = posts[i]._id;
      //     if (singlePost === id) {
      //       posts.splice(i, 1);
      //     }
      //   }

      const filteredPost = posts.filter(function (value, index, arr) {
        console.log('param value', value);
        console.log('param index', index);
        console.log('param arr', arr);
        return value._id !== id;
      });

      setPosts(filteredPost);
      console.log('filtered posts', filteredPost);
      console.log('after delete post', afterDeletePost);
      console.log('idPayload', id);
      console.log('si i', i);
      toast.info('Post berhasil dihapus');
    } catch (error) {
      console.log(error);
    }
  };

  console.log('posts', posts);

  return (
    <PostComponent
      posts={posts}
      loading={loading}
      addPost={addPost}
      compLoading={compLoading}
      deletePost={deletePost}
    />
  );
};

export default PostContainer;
