import { Routes, Route } from "react-router-dom";
import Allposts from "./components/posts/AllPost/AllPosts";
import Layout from "./Layout/Layout";
import Calendar from "./Screens/Calendar";
import Dashbord from "./Screens/Dashbord";
import Mails from "./Screens/Mails";
import Posts from "./Screens/Posts";
import NewPost from "./components/posts/NewPost/NewPost";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashbord />} />
        <Route path="/mails" element={<Mails />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/all" element={<Allposts />} />
        <Route path="/posts/add" element={<NewPost />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Layout>
  );
}

export default App;
