import logo from "../assets/main-logo.svg";

const Footer = () => {
  return (
    <div className="css-blxmni">
      <div className="css-dikkg9">
        <div className="css-1tefr08">
          <div className="flogo">
            <img src={logo} />
          </div>
          <div>
            <p>Join our</p>
            <p>Newsetter</p>
          </div>
          <div>
            <input /> <button>Subscribe</button>
          </div>
        </div>
        <hr className="bar" />
        <div
          className="css-1tefr08 f-btn"
          style={{ justifyContent: "flex-start" }}
        >
          <div style={{ width: "10%" }}>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesett ing
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </span>
          </div>
          <ul className="nav-menu footer-menu">
            <li>
              <a href={"/"}>News</a>
            </li>
            <li>
              <a href={"/project"}>Tournaments</a>
            </li>
            <li>
              <a href={"/about"}>Courses</a>
            </li>
            <li>
              <a href={"/contact"}>E-books</a>
            </li>
          </ul>
          <ul className="nav-menu footer-menu">
            <li>
              <a href={"/"}>Privacy policies</a>
            </li>
            <li>
              <a href={"/project"}>Terms & Conditions</a>
            </li>
            <li>
              <a href={"/about"}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
