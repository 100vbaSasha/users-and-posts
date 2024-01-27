import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import './index.css';

function App() {
  return (
    <div className="app">
      <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/:userId' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
