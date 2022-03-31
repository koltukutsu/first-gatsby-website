import * as React from "react";
import { Link } from "gatsby";
import { heading } from "../components/layout.module.css";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <title>About Me</title>
        <h1 className={heading}>About Me</h1>
        <Link to="/">Back to Home</Link>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </main>
    </Layout>
  );
};
export default AboutPage;
