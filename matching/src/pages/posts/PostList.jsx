import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Post from "./Post";

const Movie = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 50px;
  padding-top: 70px;
  width: 80%;
  margin-left: 90px;
`;

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/movie/posts/")
      .then((res) => {
        setLoading(false);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log("에러 : ", error);
      });
  }, []);

  return (
    <div>
      {loading ? (
        ""
      ) : (
        <Movie>
          {posts.map((post) => (
            <Post
      
              key={post.id}
              title={post.title}
              movie_image={post.movie_image}
              movie_director={post.movie_director}
              id={post.id}
              author={post.author}
              content={post.content}
              movie_title={post.movie_title}
              NumOfPeople={post.NumOfPeople}
              gather_date={post.gather_date}
            />
          ))}
        </Movie>
      )}
    </div>
  );
};

export default PostList;
