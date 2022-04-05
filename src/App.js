import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './Components/Header/Header';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/"></Route>
        <Route path="*" element='<NotFound/>'></Route>
      </Routes>
    </div>
  );
}

export default App;
