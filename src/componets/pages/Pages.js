import { Routes, Route } from "react-router-dom";
import Home from './Home';
import NotFoundPage from './NotFoundPage';
import Team from "./Team";
import Publications from "./Publications/Publications";
import Collaborations from "./Сollaborations";
import ContactUs from "./ContactUs";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="team" element={<Team />} />
      <Route path="collaborations" element={<Collaborations />} />
      <Route path="publications" element={<Publications />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Pages;
