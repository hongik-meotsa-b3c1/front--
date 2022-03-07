import React from "react";
import {Comment as AntdComment, Tooltip } from "antd";
import moment from "moment";

const Comment = ({comment}) => {
    const {
        author: { username, nickname},
        message,
        created_at
    } = comment;

    return(
        <AntdComment
        author={nickname}
        content={<p>{message}</p>}
        datetime={
            <Tooltip title={moment().format(created_at)}>
            <span>{moment(created_at).fromNow()}</span>
            </Tooltip>
        }
        />
    )
}

export default Comment;