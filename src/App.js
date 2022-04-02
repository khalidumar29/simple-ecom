import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/home" element={<Shop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
