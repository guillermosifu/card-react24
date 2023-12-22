import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://www.linkedin.com/in/carlos-guillermo-sifuentes-montoya-a20304194"
        className="footer__link-icon-container"
      >
        <img
          width={50}
          src="https://i.postimg.cc/J7BLFtdc/linkedin.png"
          alt="LinkedIn"
          className="footer__link-icon"
        />
      </a>
      {/* Add similar code for other social media links */}
    </footer>
  );
};

export default Footer;
