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
  InputBlock,
} from "./styles";
import api from "../../Services/api";
import JobCard from "../JobCard";

const Header: React.FC = () => {
  // const [search, setSearch] = useState("");

  const [description, setdescription] = useState("");
  // const [location, setLocation] = useState("");
  // const [type, setType] = useState("");

  const navigate = useNavigate();
  const [allJobs, setAllJobs] = useState([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // await api
    //   .get("positions.json", {
    //     params: {
    //       description,
    //       // location,
    //       // type,
    //     },
    //   })
    //   .then((res) => setAllJobs(res.data))
    //   .catch((err) => {
    //     console.error(err);
    //   });

    navigate(`/positions`);
  }

  // ?description=` + description.toLowerCase().trim()

  return (
    <Container>
      <Menu>
        <HeaderContent>
          <Link to={"/"}>
            <GitLogo>
              <GitJobsLogo />
              <p>Jobs</p>
            </GitLogo>
          </Link>
          <LinksContainer>
            <Link to="/positions">All jobs</Link>
            <Link to="/faq">How it works</Link>
          </LinksContainer>
        </HeaderContent>

        <SearchForm>
          <form method="post" onSubmit={handleSubmit}>
            <InputBlock>
              <label htmlFor="description">Job description</label>
              <input
                name="description"
                placeholder="Filter by description, benefits, companies, expertise"
                value={description}
                onChange={(e) => setdescription(e.currentTarget.value)}
              />
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Job description</label>
              <input
                name="description"
                placeholder="Filter by description, benefits, companies, expertise"
                value={description}
                onChange={(e) => setdescription(e.currentTarget.value)}
              />
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Job description</label>
              <input
                name="description"
                placeholder="Filter by description, benefits, companies, expertise"
                value={description}
                onChange={(e) => setdescription(e.currentTarget.value)}
              />
            </InputBlock>
            <button type="submit">Buscar</button>
          </form>
        </SearchForm>
      </Menu>
      <div>
        {allJobs.map((job, index) => {
          return <JobCard key={index} job={job} />;
        })}
      </div>
    </Container>
  );
};

export default Header;
