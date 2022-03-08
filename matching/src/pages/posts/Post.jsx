import styled from "styled-components";
import { useNavigate } from "react-router";

const Box = styled.div`
width: 45%;
background-color: white;
margin-bottom: 70px;
display: flex;
align-items: flex-start;
justify-content: space-between;
font-weight: 300;
padding: 20px;
color: #adaeb9;
border-radius: 5px;
box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const AlignImgText = styled.div``;

const AlingTexts = styled.div`
    flex-direction: column;
`;


const Post = ({id,author,title,content,movie_title,movie_image,NumOfPeople,gather_date,movie_dircetor}) =>{


    return(
        <Box>
        <a href={`/posts/${id}`}>
        
        <AlignImgText>
        <img src={movie_image} alt={movie_title} title={movie_title}/>
        <AlingTexts>
        <h1>{title}</h1>
        <h3>{author.nickname}</h3>
        <h3>{NumOfPeople}</h3>
        <h3>{gather_date}</h3>
        <h3>{movie_title}({movie_dircetor})</h3>
        <h3>{content.length > 130? `${content.slice(0,130)}...`: content}</h3>
        </AlingTexts>
        </AlignImgText>
        </a>

        </Box>
        
    );
}

export default Post;