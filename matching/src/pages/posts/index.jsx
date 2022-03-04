import { Route,Routes } from "react-router";
import Write from "./Write";
import PostDetail from "./PostDetail";



const PostsRoute = () => {
    return(
        <Routes>
            <Route path='write/' element={<Write/>}/>
            <Route path='/:id' element={<PostDetail/>}/>
        </Routes>
    );
}

export default PostsRoute;