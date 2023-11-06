import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";
import Post from '../pages/Post';
import Header from '../pages/Header';
import Detail from '../pages/Detail';
import PostList from '../pages/PostList';

function Router() {
  return (
    <BRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/post' element={<Post />} />
        <Route path='/detail/:postId' element={<Detail />} />
        <Route path='/postList' element={<PostList />} />
      </Routes>
    </BRouter>
  );
}

export default Router;