import axios from "axios";

export default {
  write: (NumOfPeople,content,gather_date,movie_id,title) =>
    axios({
      url: `http://localhost:8000/movie/postWrite`,
      method: "POST",
      data: { NumOfPeople,content,gather_date,movie_id,title },
    }),
};