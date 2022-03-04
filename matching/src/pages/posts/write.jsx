import MovieSearch from "./MovieSearch";
import { useState } from "react";
import styled from "styled-components";
import { Form, Input, InputNumber, Button } from "antd";
import useDidMountEffect from "utils/useDidMountEffect";
import { useNavigate } from "react-router";
import axios from "axios";

const Back = styled.div`
  background-color: gray;
  border: none;
  text-align: center;
  font-family: Jua;
  padding-right: 500px;
  display: flex;
  justify-content: center;
  margin-left: 140px;

  .contentForm {
    height: 270px;
  }
`;

const Gather = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & .gatherForm {
    padding-left: 220px;
  }
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 233px;
`;

const MovieInfo = styled.span`
  margin-left: 265px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  margin-left: 280px;
  

  & .movieText {
    width: 200px;
    height: 25px;
    padding-left: 100px;
    padding-top: 50px;
  }

  .space{
    padding-bottom: 50px;
  }

`;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label}을 입력해주세요.",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const Write = () => {
  const onFinish = async (values) => {
    values.movie_id = movie.id;
    values.gather_date = date;

    axios
      .post("http://localhost:8000/movie/postWrite/", values)
      .then((res) => {
        console.log(res);
        alert("등록되었습니다.");
        // navigate('/${res.data}');
        //movie/postWrite에 post후에 id 반환 요청 
      })
      .catch((error) => {
        console.log("에러 : ", error);
      });
  };
  const navigate = useNavigate();
  const [movie, setMovie] = useState();
  const [isMovie, setIsMovie] = useState(false);
  const [date, setDate] = useState(null);

  const getMovie = (data) => {
    //어쨌든 여기에서 data는 내 영화 객체!
    setMovie(data);
    setIsMovie(true);
  };

  useDidMountEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div>
      <Back>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"title"}
            label="제목"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Gather>
            <Form.Item
              className="gatherForm"
              name={"NumOfPeople"}
              label="모집인원"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <span>
              <label htmlFor="date">
                모집날짜{" "}
                <input
                  type="date"
                  name="gather_date"
                  id="date"
                  style={{ width: 158.141, height: 32 }}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </label>
            </span>
          </Gather>

          <Search>
            영화검색 <MovieSearch getMovie={getMovie} />
          </Search>
          {isMovie ? (
            <MovieInfo>
              <img
                style={{ width: 150, height: 200 }}
                src={movie.movie_image}
                disabled
              />
              <span className="movieText">
                <input
                  value={
                    movie.movie_title
                      .replace(/<b>/gi, "")
                      .replace(/<\/b>/gi, "") +
                    " (" +
                    movie.movie_pubDate +
                    ")"
                  }
                  style={{width:208}}
                  disabled
                />
                <div className='space'/>
                <input
                  value={movie.movie_director}
                  style={{width:208}}
                  disabled
                />
              </span>
            </MovieInfo>
          ) : (
            <MovieInfo >
              <input
                style={{ width: 150, height: 200 }}
                value="영화 포스터"
                disabled
              />
              <span className='movieText'>
                <input value="영화 제목" style={{width:208}} disabled />
                <div className='space'/>
                <input value="영화 감독" style={{width:208}} disabled />
              </span>
            </MovieInfo>
          )}
          <Form.Item name={"content"} label="내용">
            <Input.TextArea className="contentForm" />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              등록하기
            </Button>
          </Form.Item>
        </Form>
      </Back>
    </div>
  );
};

export default Write;

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
