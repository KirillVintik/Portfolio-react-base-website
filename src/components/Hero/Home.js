import React from "react";
import "./Home.css";
import hero from "../../pic/hero.png";
import skill1 from "../../pic/skill1.png";
import skill2 from "../../pic/skill2.png";
import skill3 from "../../pic/skill3.png";

import TypeWriter  from "react-typewriter";

const Home = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I'm <span>Kiryl Vintsik</span>
            </h1>
            <h2>
              a
              <span>
              <TypeWriter typing={1} > Frontend Developer </TypeWriter>
              </span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five cent
            </p>
            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>Find Me</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a href="https://www.facebook.com/kirill.vintik">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a href="https://www.instagram.com/realkill_vintik/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a href="https://www.linkedin.com/in/kiryl-vintsik-75a1721b9">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </button>
                </div>
              </div>

              <div className="col_1">
                <h4>Best Skill On</h4>
                <button className="btn_shadow">
                  <img src={skill1} alt="JavaScript" />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} alt="React" />
                </button>
                <button className="btn_shadow">
                  <img src={skill3} alt="Redux" />
                </button>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="right_img">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
