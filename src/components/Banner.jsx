import React from "react";
import Bannerimage from '../assets/PHOTO.jpg';
import Bc from "../assets/WEB.jpg";

const Banner = () => {
    return (
        <div className="main-container flex items-center" style={{ 
            backgroundImage: `url(${Bc})`,
            backgroundSize:"cover",
        }}>
            {/* first dabba */}
            <div className=" w-full flex justify-center">
                {/* text */}
                <div className="w-2/3 space-y-1 ms-10">
                    <h3 className="text-2xl font-bold">Hi, I am</h3>
                    <h1 className="text-4xl font-bold">Hrishikesh Sonawane</h1>
                    <h2 className="text-2xl">I am a Developer</h2>
                    <p>As a passionate and dedicated full-stack developer fresher, I aim to leverage my technical skills in Java, Spring Boot, React.js, MongoDB, and MySQL to contribute effectively to a dynamic team. Seeking opportunities to gain practical experience and expertise while continually expanding knowledge in full-stack development</p>
                    <br/>
                    <a className="px-3 py-1 bg-orange-600 rounded-full shadow-lg" href="/contact">Contact</a>  <p><strong>Email:</strong> sonawanerushi777@gmail.com</p>  <p><strong>Mob:</strong> 9359668495</p>
                </div>
            </div>
            {/* second dabba */}
            <div className="border w-full flex justify-center">
                {/* for image */}
                <img className="rounded-full shadow-lg" src={Bannerimage} alt="" style={{ width: "300px" }} />
            </div>
        </div>
    );
}

export default Banner;
