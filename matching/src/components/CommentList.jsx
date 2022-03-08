import React, {useState} from "react";
import {Button,Input} from "antd";
import {useAppContext} from "store";
import Axios from "axios";
import useAxios from "axios-hooks";
import Comment from "./Comment";

const CommentList = ({post_id}) => {
    const {
        store: {jwtToken}
    } = useAppContext();
    
    console.log("포스트 아이디",post_id)

    const [commentContent, setCommentContent] = useState("");
    //const [commentList, setCommentList] = useState({});
    const headers = {Authorization: `JWT ${jwtToken}`};

    const [ {data:commentList, loading, error}, refetch ] = useAxios({
        url: `http://localhost:8000/movie/posts/${post_id}/comments/`,
        headers
    });


    console.log("코멘트리스트",commentList)

    const handleCommentSave = () => {
        Axios.post(
         `http://localhost:8000/movie/posts/${post_id}/comments/`,
         { message: commentContent},
         { headers }
        )
            .then((response) => {
                console.log("리스폰스",response);
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
           
           <Input.TextArea
            style={{marginBottom: ".5em", marginTop:".5em"}}
            value={commentContent}
            onChange={e => setCommentContent(e.target.value)}
            />

            <Button block
              type="primary"
              style={{marginBottom: "70px"}}
              disabled={commentContent.length === 0}
              onClick={handleCommentSave}>
                댓글쓰기
            </Button>
        </div>

    );
};

export default CommentList;