import "./App.css";
const Home = () => {
  return (
    <div className="body">
      <div>
        <h2>Welcome to FineMinds Marketing Solutions</h2>
        <p>
          This website template has been designed by Free Website Templates for
          you, for free. You can replace all this text with your own text.
        </p>
        <img src="images/tree.jpg" alt="" />
        <div>
          <h3>
            <span>What We Do</span>
          </h3>
          <p>
            This website template has been designed by Free Website Templates
            for you, for free. You can replace all this text with your own text.
            You can remove any link to our website from this website template,
            you're free to use this website template without linking back to us.
          </p>
          <ul>
            <li id="link1">
              <a href="services.html">
                <span>Design</span>
              </a>
            </li>
            <li id="link2">
              <a href="services.html">
                <span>Seo</span>
              </a>
            </li>
            <li id="link3">
              <a href="services.html">
                <span>Copywriting</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>
            <span>Latest Projects</span>
          </h3>
          <ul>
            <li>
              <a href="services.html">
                <img src="images/template1.jpg" alt="" />
              </a>
              <span>Project: Web Design</span>
              <span>Client: Frosty Sweets</span>
              <a href="services.html">Read Details</a>
            </li>
            <li>
              <a href="services.html">
                <img src="images/template2.jpg" alt="" />
              </a>
              <span>Project: Corporate Identity</span>
              <span>Client: Puppy Love</span>
              <a href="services.html">Read Details</a>
            </li>
            <li>
              <a href="services.html">
                <img src="images/template3.jpg" alt="" />
              </a>
              <span>Project: Advertising Campaign</span>
              <span>Client: Baby School</span>
              <a href="services.html">Read Details</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
