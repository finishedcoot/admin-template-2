import React from "react";
import PostsComponent from "../components/posts/PostsComponent";
import Container from "../components/shared/Container";
const Posts = () => {
  return (
    <Container title={"Posts"}>
      <PostsComponent />
    </Container>
  );
};

export default Posts;
