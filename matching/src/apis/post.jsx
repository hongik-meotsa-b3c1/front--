import axios from "axios";

export default {
  write: (id,title,content,movie_id,NumOfPeople,gather_date) =>
    axios({
      url: 'http://localhost:8000/movie/writePost',
      method: "POST",
      data: { title,content,movie_id,NumOfPeople,gather_date },
    }),
};