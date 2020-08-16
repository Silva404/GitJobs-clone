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
} from "./styles";

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    navigate(`/positions/` + search.toLowerCase().trim())
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

        <SearchForm onSubmit={handleSubmit}>
          <label htmlFor="description">Job description</label>
          <input
            name="description"
            placeholder="Filter by description, benefits, companies, expertise"
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
          />
          <button type="submit">Enviar</button>
        </SearchForm>
      </Menu>
    </Container>
  );
};

export default Header;
