import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  GitJobsLogo,
  SearchForm,
  LinksContainer,
  HeaderContent,
  Menu
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Menu>
        <HeaderContent>
          <GitJobsLogo />
          <LinksContainer>
            <Link to="/positions">All jobs</Link>
            <Link to="/faq">How it works</Link>
          </LinksContainer>
        </HeaderContent>

        <SearchForm>
          <input />
        </SearchForm>
      </Menu>
    </Container>
  );
};

export default Header;
