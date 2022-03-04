import post from "apis/post";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Select } from "antd";
import styled from "styled-components";

const { Option } = Select;

const SearchMovie = styled.span`
    padding-right: 122px;
    
`;

//여기에다가 영화정보를 글쓰기 페이지로 리턴해주는 코드를 짜야합니당.

const MovieSearch = (props) => {
  const [moviename, setMoviename] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/movie/search/", { moviename: moviename })
      .then((response) => {
        setLoading(false);
        setMovies(response.data);
      })
      .catch((error) => {
        console.log("에러 : ", error);
      });
  };

  async function handleChange(value) {
    const obj = await JSON.parse(value);
    props.getMovie(obj);
  }



  return (
    <div>
      <SearchMovie>
        <input
          name="moviename"
          placeholder="영화 제목을 입력해주세요."
          onChange={(e) => setMoviename(e.target.value)}
        />
        <input type="submit" value="검색하기" onClick={handleSubmit} />
      </SearchMovie>
      {loading ? (
        <Select defaultValue="영화를 검색해주세요 :)" style={{ width: 228 }} disabled />
      ) : (
        <Select
          defaultValue="영화를 선택해주세요 :)"
          style={{ width: 228 }}
          onChange={handleChange}
        >
          {movies.map((movie) => (
            <Option key={movie.id} value={JSON.stringify(movie)}>
              {/* <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.movie_title}
                  director={movie.movie_director}
                  pubDate={movie.movie_pubDate}
                /> */}
              {movie.movie_title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}(
              {movie.movie_pubDate}) - {movie.movie_director}
            </Option>
          ))}
        </Select>
      )}
    </div>
  );
};

export default MovieSearch;
