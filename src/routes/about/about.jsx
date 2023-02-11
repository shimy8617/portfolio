import profile from "../../assets/profile.jpg";

import "./about.css";

export const About = () => {
  return (
    <div className="containerAbout">
      <div className="container text-center">
        {/*<img src={profile} className="profileImg rounded mx-auto d-block" alt="profile" />*/}
        <h2 className="display-3 fw-bolder">About Me</h2>
        <p className="lead">
          Hi, my name is Cristina and I'm from Buenos Aires, Argentina. I'm a
          frontend developer Jr, and I love React. I'm very passionate about
          technology and I would love to connect with people with same interest.
        </p>
      </div>
    </div>
  );
};
