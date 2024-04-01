import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black my-2 py-4">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex items-center mb-2 md:mb-0">
          <span className="mr-4 font-bold text-4xl">Medium</span>
        </div>
        <div className="text-center mb-2 md:mb-0 font-semibold">
          <span>Every idea needs a Medium</span>
        </div>
        <div className="flex items-center">
          <a href="/about" className="mr-4">
            About
          </a>
          <a href="/terms" className="mr-4">
            Terms
          </a>
          <a href="/privacy" className="mr-4">
            Privacy
          </a>
          <a href="/help" className="mr-4">
            Help
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
