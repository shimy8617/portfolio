import profile from "../../assets/profile.jpg";

import "./about.css";

export const About = () => {
        
        
    return(
        <div className="container">
            <img src={profile} alt="profile" />
            <h2>About Me</h2>
            <div className="css-typing">
                <p>Hi, my name is Cristina and </p>
                <p>I'm from Buenos Aires, Argentina.</p>
                <p>I'm a frontend developer Jr, </p> 
                <p>and I love React.</p>
                <p>I'm very passionate about technology and I would </p>
                <p>love to connect with people with same interest.</p>
            </div>
            </div>
    )
}