import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  GitJobsLogo,
  SearchForm,
  LinksContainer,
  HeaderContent,
  Menu,
  GitLogo
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Menu>
        <HeaderContent>
          <GitLogo>
            <GitJobsLogo />
            <p>Jobs</p>
          </GitLogo>
          <LinksContainer>
            <Link to="/positions">All jobs</Link>
            <Link to="/faq">How it works</Link>
          </LinksContainer>
        </HeaderContent>

        <SearchForm>
          <label htmlFor="description">Job description</label>
          <input name="description" placeholder="Filter by description, benefits, companies, expertise" />
        </SearchForm>
      </Menu>
    </Container>
  );
};

export default Header;
