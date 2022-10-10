import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

import imgs from "../../assets/images/imgs"
import '../../assets/styles/css/pages/home.css'

function Home() {
  return (
    <main>
      <article className="home-info">
        <div className="cover">
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
            <Link to='publications' className="active">Publications</Link>
            <Link to='team'>Team members</Link>
          </div>
        </div>
        <div className="info-image">
          <LazyLoadImage 
            src={imgs.city}
            effect="blur"
            placeholderSrc={imgs.cityCompressed}
            alt="city"/>
        </div>
        </div>
      </article>

      <h3 className="home-question">What is <span>urban complexity lab</span>?</h3>

      <section className="home-blocks">
        <article className="home-block">
          <span>
            Urban Complexity Lab at NYU’s Center For Urban Science + Progress is unfolding complexity of urban systems for research, innovation and applications. We leverage big urban data and cutting edge machine learning and network analysis techniques to  make our cities more smart, efficient, sustainable, resilient – better places to live in.
          </span>
          <img src={imgs.smartCity} alt="home-img"/>
        </article>

        <article className="home-block">
          <span>
            Our <Link to='publications'>papers</Link> are published in top tier journals including Nature’s Scientific Reports, PNAS, Physical Review E, PLjournal.pone.0014248.g001OS ONE, Royal Society Open Science, International Journal Of GIS, Applied Geography, Environment And Planing B, EPJ Data Science and many others and push forward the frontier of the modern science.
          </span>
          <img src={imgs.papers} alt="home-img"/>
        </article>

        <article className="home-block">
          <span>
            We promote potential of data science and complexity to broad audience and the students through teaching and public speaking. The courses we teach cover applied aspects of Data Science, Machine Learning and Network Analysis.
          </span>
          <img src={imgs.study} alt="home-img"/>
        </article>

        <article className="home-block">
          <span>
            Our <Link to='team'>team</Link> brings together faculty, researchers and students – goal-oriented, bright and enthusiastic personalities inspired by smart cities and the promise of data science.
          </span>
          <img src={imgs.team} alt="home-img"/>
        </article>
      
        <article className="home-block">
          <span>
            Our <Link to='collaborations'>projects</Link> on urban mobility, transportation, public safety, urban impact assessments as well as fundamental research in network science, big data and complexity are supported by industrial partners and foundations and help innovating the cities we live in. Our supporters include US Department Of Energy, US Department Of Transportation, National Geospatial Intelligence Agency, Lockheed Martin, Future Cities Catapult, Arcadis.
          </span>
          <img src={imgs.support} alt="home-img"/>
        </article>
      </section>
    </main>
  );
}

export default Home;
