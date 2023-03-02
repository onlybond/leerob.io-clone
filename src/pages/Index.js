import pfp from "./images/avatar.avif";
import twitter from "./images/twitter.png";
import github from "./images/github.png";
import trend from "./images/trend.png";
import follow_up from "./images/right-up.png";
import { Link } from "react-router-dom";
function Index() {
  return (
    <div className="page-container">
      <h1 className="heading m-10">Lee Robinson</h1>
      <p>
        Hey, I'm Lee. I'm the{" "}
        <strong>VP of Developer Experience at Vercel</strong> <br />
        where my team helps developers build a faster web.
      </p>
      <div className="stats-wrapper">
        <div>
          <img className="pfp" src={pfp} alt=''></img>
        </div>
        <div className="stats">
          <a href="https://twitter.com/leeerob" rel="noreferrer" target="_blank">
            <span>
              <img src={twitter} className="stats-img" alt=""></img> 6,885
              tweets all time
            </span>
          </a>
          <a href="https://github.com/leerob" target="_blank" rel="noreferrer">
            <span>
              <img src={github} className="stats-img" alt=""></img> 5,286 stars
              on this repo
            </span>
          </a>
          <Link to="/blog">
            <span>
              <img src={trend} className="stats-img" alt=""></img> 1,610,815
              blog views all time
            </span>
          </Link>
        </div>
      </div>
      <p className="desc">
        I'm a Next.js contributor and help lead our open-source communities. I'm
        passionate about frontend development and have created courses on React,
        Next.js, and web development. I'm an advisor and investor in early stage
        startups.
      </p>
      <div className="footer">
      <a href="https://twitter.com/leeerob" rel="noreferrer" target='_blank'><img src={follow_up} alt=''/> follow me on twitter</a>
      <a href="https://leerob.substack.com" rel="noreferrer" target='_blank'><img src={follow_up} alt=''/> get email updates</a>
      </div>
    </div>
  );
}
export default Index;
