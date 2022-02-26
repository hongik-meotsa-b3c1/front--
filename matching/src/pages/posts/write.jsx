import post from "apis/post";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

// const Write = () => {
//   const [form, setForm] = useState({});
//   const navigate = useNavigate();

//   const onSubmit = async () => {
//     await post.write(
//       form.title,
//       form.content,
//       Number(form.numOfPeople),
//       form.date
//     );

//     navigate("/");
//   };

//   return (
//     <div>
//       <input
//         name="title"
//         placeholder="제목을 입력하세요."
//         onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
//       />
//       <input
//         name="content"
//         placeholder="내용을 입력하세요."
//         onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
//       />
//       <input
//         type="number"
//         name="numOfPeople"
//         placeholder="사람 수를 숫자로 입력하세요."
//         onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
//       />
//       <input
//         type="date"
//         name="date"
//         placeholder="날짜를 입력하세요."
//         onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
//       />

//       <button onClick={onSubmit}>등록하기</button>
//     </div>
//   );
// };

const Write = () => {
  const navigate = useNavigate();
  const [moviename, setMoviename] = useState("");
  const [movieList1, setMovieList1] = useState([]);
  const [movieList2, setMovieList2] = useState([]);
  const [movieList3, setMovieList3] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("무비네임", moviename);

    axios.post("http://localhost:8000/movie/search/", { moviename: moviename })
      .then((response) => {
        const { data } = response;
        setMovieList1(data[0]);
        console.log(movieList1);

        setMovieList2(data[1]);
        console.log(movieList2);
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
      {movieList1.movie_title} | {movieList1.director}
      {movieList2.movie_title} | {movieList2.direcotr}
    </div>
  );
};
export default Write;
