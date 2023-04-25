import React from "react";
import styles from "./footer.module.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>&copy; 2017 Mustafa Ispahani</p>
        <p>
          <a href="mustafaispahani@gmail.com">
            <i className="fa fa-envelope fa-fw"></i>
          </a>
          <a href="https://github.com/Mustafa2503" target="_blank">
            <i className="fa fa-github fa-fw"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ispahani-m-mustafa"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://codepen.io/Mustafa-Ispahani25/" target="_blank">
            <i className="fa fa-codepen"></i>
          </a>

          <a
            href="https://www.freecodecamp.com/mustafa-ispahani25"
            target="_blank">
            (<i className="fa fa-fire fa-fw"></i>)
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
