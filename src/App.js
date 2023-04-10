import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ImagePage from './pages/ImagePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/nft/:id" element={<ImagePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
