import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  GitJobsLogo,
  SearchForm,
  LinksContainer,
  HeaderContent,
  Menu,
  GitLogo,
  InputBlock
} from "./styles";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate(`/positions?description=` + search.toLowerCase().trim());
  }

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
          <form method="post" onSubmit={handleSubmit}>
            <InputBlock >
              <label htmlFor="description">Job description</label>
              <input
                name="description"
                placeholder="Filter by description, benefits, companies, expertise"
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
              />
              <button type="submit">Enviar</button>
            </InputBlock >
          </form>
        </SearchForm>
      </Menu>
    </Container>
  );
};

export default Header;
