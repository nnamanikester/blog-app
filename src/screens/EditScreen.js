import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BloPostForm";

const EditScreen = ({ route: { params }, navigation: { pop } }) => {
  const id = params.id;
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
