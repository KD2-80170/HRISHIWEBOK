import React from "react";
import { useState } from "react";
import mykilla from '../assets/Mykilla.jpg';
const About=()=>{
const[data,setData]=useState(
    {image:mykilla,
     title:"Java Developer & Mern Stack Developer",
     desc1:`Having completed the PG-DAC course at SunBeam Institute, I've gained a comprehensive understanding of software development. Through hands-on learning, I acquired proficiency in Java, C++, Spring Boot, React.js, MongoDB, and MySQL, equipping me with practical skills essential for a successful career in IT`,
     desc2:`During my PG-DAC tenure, I actively contributed to projects like the Online Library Management System, employing Java, Spring Boot, React.js, and MySQL to automate library operations. These projects exemplify my ability to effectively apply learned concepts to real-world applications`,
    actionButton:{
        title:"ReadMore...",
        link:'/readmore',

    },
     });

 return(<>
    <div  className="main-container bg-gray-200 border py-14">
      <h1 className="text-center pb-16 text-4xl underline font-bold">About Me</h1>
    

    <div className="flex w-full ">
        {/* image container*/ }
        <div className="w-full justify-center">
            <img  className= "w-fit" src={mykilla} alt="my image is" />
        </div>
        {/*  text container */}


     <div className="w-full border flex justify-center"> 
       <div className="space-y-5  w-2/3">
    <h1 className="text-4xl  font-semibold">{data.title}</h1>
     <p>{data.desc1}</p>
     <p>{data.desc2}</p>
     <button className="bg-orange-500 px-3 py-2 rounded-full shadow-lg">{data.actionButton.title}</button>
       </div>
      </div>
      </div>
      </div>
    </>

)


}

export default About;