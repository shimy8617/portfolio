import profile from "../../assets/profile.jpg";

import "./about.css";

export const About = () => {
        
        
    return(
        <div className="container">
            <img src={profile} alt="profile" />
            <h2 className="aboutTitle">About Me</h2>
            <div className="css-typing">
                <p>Hi, my name is Cristina and I'm from Buenos Aires, </p>
                <p>Argentina. I'm a frontend developer Jr, and </p>
                <p>I love React. I'm very passionate about </p> 
                <p>technology and I would love to connect with </p>
                <p>people with same interest.</p>
            </div>
        </div>
    )
}