import axios from "axios";

export default {
  write: (title, content, numOfPeople, date) =>
    axios({
      // url: `http://localhost:8000/movie/posttest`,
      method: "POST",
      data: { title, content, numOfPeople, date },
    }),
};