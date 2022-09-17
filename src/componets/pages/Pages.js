import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Contacts from './Contacts';
import NotFoundPage from './NotFoundPage';
import Team from "./Team";
import Publications from "./Publications/Publications";
import Collaborations from "./Сollaborations";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="team" element={<Team />} />
      <Route path="collaborations" element={<Collaborations />} />
      <Route path="publications" element={<Publications />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Pages;
