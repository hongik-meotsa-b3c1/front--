import { Route,Routes } from "react-router";
import Write from "./write";
import PostDetail from "./PostDetail";
import PostList from './PostList';



const PostsRoute = () => {
    return(
        <Routes>
            <Route path='write/' element={<Write/>}/>
            <Route path='/:id' element={<PostDetail/>}/>
            <Route path='/list' element={<PostList/>}/>
        </Routes>
    );
}

export default PostsRoute;