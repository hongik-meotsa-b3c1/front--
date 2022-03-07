import React, {useState} from "react";
import {Commnet, Tooltip,Input} from "antd";
import moment from "moment";
import {useAppContext} from "store";
import Axios from "axios";
import useAxios from "axios-hooks";
import Comment from "./Comment";

const CommentList = ({post}) => {
    const {
        store: {jwtToken}
    } = useAppContext();

    const [commentContent, setCommentContent] = useState("");

    const headers = {Authorization: `JWT ${jwtToken}`};

    const [ {data: commentList, loading, error}, refetch ] = useAxios({
        url: `http://localhost:8000/api/posts/${post.id}/comments/`,
        headers
    });

    const handleCommentSave = () => {
        Axios.post(
         `http://localhost:8000/api/posts/${post.id}/comments/`,
         { message: commentContent},
         { headers }
        )
            .then((response) => {
                console.log(response);
                setCommentContent("");
                refetch();

            })
            .catch((error) => {
                console.log(error);

            });
    }

    return(
        <div>

            {commentList && commentList.map(comment=>(
                <Comment key={comment.id} comment={comment} />
            ))}
           

            <Button block
              type="primary"
              disabled={commentContent.length === 0}
              onClick={handleCommentSave}>
                댓글쓰기
            </Button>
        </div>

    );
};

export default CommentList;