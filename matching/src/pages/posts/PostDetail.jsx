import styled from "styled-components";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { Link } from "react-router-dom";

const Back = styled.div`
  background-color: gray;
  border: none;
  text-align: center;
  font-family: Jua;
  padding-right: 500px;
  display: flex;
  flex-direction: column;
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
    padding-left: 230px;
  }
`;

const MovieInfo = styled.span`
  margin-left: 265px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  margin-left: 286px;

  & .movieText {
    width: 200px;
    height: 25px;
    padding-left: 100px;
    padding-top: 30px;
  }

  .space {
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

const PostDetail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/movie/posts/${id}`)
      .then((res) => {
        setInfo(res.data);
        setIsloading(false);
        console.log(info);
      })
      .catch((error) => {
        console.log("에러 : ", error);
      });
  }, []);

  return (
    <div>
      {loading ? (
        " "
      ) : (
        <Back>
          <Form {...layout} name="nest-messages">
            <Form.Item name={"title"} label="제목">
              <Input
                defaultValue={info.title}
                style={{ color: "black" }}
                disabled
              />
            </Form.Item>
            <Gather>
              <Form.Item
                className="gatherForm"
                name={"NumOfPeople"}
                label="모집인원"
              >
                <InputNumber
                  defaultValue={info.NumOfPeople}
                  style={{ color: "black" }}
                  disabled
                />
              </Form.Item>
              <span>
                <label htmlFor="date">
                  모집날짜{" "}
                  <input
                    name="gather_date"
                    id="date"
                    value={info.gather_date.slice(0, 10)}
                    disabled
                    style={{ width: 158.141, height: 32 }}
                  />
                </label>
              </span>
            </Gather>

            <MovieInfo>
              <a href={info.movie_link}>
                <img
                  style={{ width: 150, height: 200 }}
                  src={info.movie_image}
                  disabled
                />
              </a>
              <span className="movieText">
                <input
                  value={info.movie_title
                    .replace(/<b>/gi, "")
                    .replace(/<\/b>/gi, "")}
                  style={{ width: 330 }}
                  disabled
                />
                <div className="space" />
                <input
                  value={info.movie_director.replace("|", "")}
                  style={{ width: 330 }}
                  disabled
                />
                <div className="space" />
                {/* <input
                //   value={info.movie_actor.replace("|", " , ").slice(0,info.movie_actor.replace("|", " , ").indexOf('|'))}
                  style={{ width: 330 }}
                  disabled
                /> */}
              </span>
            </MovieInfo>

            <Form.Item name={"content"} label="내용">
              <Input.TextArea
                className="contentForm"
                defaultValue={info.content}
                style={{ color: "black" }}
                disabled
              />
            </Form.Item>

            <Link to="/posts/list">
              <Button
                type="primary"
                htmlType="submit"
                style={{ float: "right" }}
              >
                글 목록
              </Button>
            </Link>
          </Form>
        </Back>
      )}
    </div>
  );
};

export default PostDetail;
