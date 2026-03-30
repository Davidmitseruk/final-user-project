import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import CreateUserPage from "./pages/CreateUserPage";

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> | {' '}
      <Link to="/create">Create</Link>
    </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/create" element={<CreateUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
