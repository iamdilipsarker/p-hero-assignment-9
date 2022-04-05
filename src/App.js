import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
