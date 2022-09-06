import { Link } from "react-router-dom";
import imgs from "../../assets/images/imgs";

import '../../assets/styles/css/pages/home.css'

function Home() {
  return (
    <main>
      <article className="home-info">
        <div className="general-info">
          <span className="description">
            Complex Analytics For Simpler Urban Life
          </span>
          
          <h1 className="title">
            urban complexity lab
          </h1>
          
          <h3 className="about">
            We promote potential of data science and complexity to broad audience and the students through teaching and public speaking. Our courses include Applied Data Science, Machine Learning, Network Analysis, Scientific Writing.
          </h3>
          
          <div className="links">
            <Link to='/' className="active">Publications</Link>
            <Link to='/'>Contacts</Link>
          </div>
        </div>
        <div className="info-image">
          <img src={imgs.city} alt="city"/>
        </div>
      </article>
    </main>
  );
}

export default Home;
