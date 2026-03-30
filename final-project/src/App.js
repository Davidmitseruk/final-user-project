import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import CreateUserPage from "./pages/CreateUserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/create" element={<CreateUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
