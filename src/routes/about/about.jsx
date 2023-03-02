import "./about.css";

export const About = () => {
  return (
    <div className="containerAbout">
      <div className="container text-center">
        {/*<img src={profile} className="rounded mx-auto d-block" alt="profile" />*/}
        <h2>About Me</h2>
        <p className="lead">
          Hi, my name is Cristina and I'm from Buenos Aires, Argentina. I'm a
          frontend developer Jr, and I love React. I'm very passionate about
          technology and I would love to connect with people with same interest.
          <br />
          Programming Languages and Skills <b>HTML</b> + <b>CSS</b> +
          <b> JavaScript</b> + <b>NodeJS</b> + <b>React</b> + <b>Github</b> +{" "}
          <b>Firebase</b>
        </p>
      </div>
    </div>
  );
};
