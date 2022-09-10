import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import NotFoundPage from './NotFoundPage';
import Team from "./Team";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="team" element={<Team />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Pages;
