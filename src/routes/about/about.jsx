import profile from "../../assets/profile.jpg";

import "./about.css";

export const About = () => {
    return(
        <div className="container">
            <img src={profile} alt="profile" />
            <h2>About Me</h2>
            <p>Hi, my name is Cristina and I'm from Buenos Aires, Argentina. I'm a frontend developer Jr, and I love React. I'm very passionate and self-learner of programming.</p>
        </div>
    )
}