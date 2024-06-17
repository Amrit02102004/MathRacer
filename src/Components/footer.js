// Footer.js

import React from 'react';
import '../css/footer.css'; // Import CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Math Racer</p>
      <p>Made with <span role="img" aria-label="heart">💖</span> by Amrit Sundarka</p>
    </footer>
  );
}

export default Footer;
