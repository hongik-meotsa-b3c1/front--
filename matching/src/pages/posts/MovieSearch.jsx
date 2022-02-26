import post from "apis/post";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Movie from "./Movie";

const MovieSearch = () => {
  const navigate = useNavigate();
  const [moviename, setMoviename] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("무비네임", moviename);

    axios
      .post("http://localhost:8000/movie/search/", { moviename: moviename })
      .then((response) => {
        setLoading(false);
        setMovies(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log("에러 : ", error);
      });
  };

  return (
    <div>
      <input
        name="moviename"
        placeholder="검색할 영화제목을 입력하세요"
        onChange={(e) => setMoviename(e.target.value)}
      />
      <input type="submit" value="검색하기" onClick={handleSubmit} />
      {loading ? (
        "여기에 검색한거 띄울거"
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.movie_title}
              director={movie.movie_director}
              pubDate={movie.movie_pubDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
