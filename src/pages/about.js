import * as React from "react";
import { Link } from "gatsby";
import { heading } from "../components/layout.module.css";

const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1 className={heading}>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </main>
  );
};
export default AboutPage;
