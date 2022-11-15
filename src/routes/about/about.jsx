import { useState, useEffect } from "react";

import profile from "../../assets/profile.jpg";

import "./about.css";

const TypeWriter = ({ content = "", speed = 1000 }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, []);

  useEffect(() => {
    setDisplayedContent(
      (displayedContent) => displayedContent + content[index]
    );
  }, [index]);

  return <pre className="type-writer">{displayedContent}</pre>;
};

const sample_content = `Hi, my name is Cristina and I am from Buenos Aires, Argentina. I'm a
    frontend developer Jr, and I love React. I'm very passionate and
    self-learner of programming.`;

export const About = () => {
  return (
    <div className="container">
      <img src={profile} alt="profile" />
      <h2>About Me</h2>
      <TypeWriter content={sample_content} speed={100} />
    </div>
  );
};
