import profile from "../../assets/profile.jpg";

import "./about.css";

export const About = () => {
  return (
    <div className="container text-center">
      <img src={profile} alt="profile" />
      <h2 className="aboutTitle">About Me</h2>
      <div className="css-typing">
        <p>
          Hi, my name is Cristina and I'm from Buenos Aires, Argentina. I'm a
          frontend developer Jr, and I love React. I'm very passionate about
          technology and I would love to connect with people with same interest.
        </p>
      </div>
    </div>
  );
};
