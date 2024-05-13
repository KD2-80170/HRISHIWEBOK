import React from "react";
import { useState } from "react";

const Header = () => {
  const [brandName, setBrandname] = useState("Hrishikesh Dagadu Sonawane");

  const [menulinks, setMenulinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Contact",
      link: "/contact",
      id: 5,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Hire me",
    link: "/hire-me",
  });

  // Your contact details
  const contactDetails = {
    github: "http://github.com/KD2-80170",
    linkedin: "https://www.linkedin.com/in/hrishikesh-sonawane-27a794182",
    mobile: "9359668495",
    email: "sonawanerushi777@gmail.com",
  };

  return (
    <>
      <div className="h-20  main flex justify-between px-16 bg-blue-100">
        <div>
          {/*brand logo*/}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>
        <div className="space-x-6">
          {/* Menu links */}
          {menulinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-orange-600"
            >
              {link.title}
            </a>
          ))}
          {/* GitHub and LinkedIn links */}
          <a
            href={contactDetails.github}
            className="hover:text-orange-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={contactDetails.linkedin}
            className="hover:text-orange-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div>
          {/* Button */}
          <br></br>
          <a
            href={actionButton.link}
            className="px-4 py-2 bg-orange-500 shadow rounded-full  text-2xl"
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
