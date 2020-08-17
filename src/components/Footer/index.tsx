import React from "react";

import { Link } from "react-router-dom";

import {
  FooterContent,
  FooterContainer,
  FooterLinks,
  GitHubLogo,
  Copyright,
} from "./styles";

export default function Footer() {
  return (
    <FooterContent>
      <FooterContainer>
        <FooterLinks>
          <Link to="https://github.com/blog">The GitHub Blog</Link>
          <Link to="https://github.com/contact">Contact</Link>
          <Link to="https://github.com/site/privacy">Privacy</Link>
          <Link to="https://github.com/site/terms">Terms</Link>
          <Link to="/api">API</Link>
        </FooterLinks>

        <Link to="https://github.com/">
          <GitHubLogo />
        </Link>

        <Copyright>© 2020 GitHub Inc. All rights reserved.</Copyright>
      </FooterContainer>
    </FooterContent>
  );
}
