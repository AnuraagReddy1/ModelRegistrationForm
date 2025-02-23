import "./App.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="index.html" id="logo">
        <img src="src\assets\react.svg" alt="logo" />
      </a>
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li className="selected">
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="services.html">Services</a>
        </li>
        <li>
          <a href="portfolio.html">Portfolio</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
      <div className="connect">
        <a href="http://freewebsitetemplates.com/go/facebook/" id="facebook">
          facebook
        </a>
        <a href="http://freewebsitetemplates.com/go/twitter/" id="twitter">
          twitter
        </a>
        <a
          href="http://freewebsitetemplates.com/go/googleplus/"
          id="googleplus"
        >
          youtube
        </a>
      </div>
      <p>Copyright 2023</p>
      <p>Fineminds Marketing Solutions</p>
    </div>
  );
};

export default Sidebar;
