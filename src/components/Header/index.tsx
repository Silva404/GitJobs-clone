import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../Context/index";

import {
  Container,
  GitJobsLogo,
  SearchForm,
  LinksContainer,
  HeaderContent,
  Menu,
  GitLogo,
  InputBlock,
  CheckBox,
  JobsContainer,
} from "./styles";

import api from "../../Services/api";
import JobCard from "../JobCard";
import Positions from "../../pages/Positions";

const Header: React.FC = () => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();
  const [allJobs, setAllJobs] = useState([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await api
      .get("positions.json", {
        params: {
          description,
          location,
          type,
        },
      })
      .then((res) => setAllJobs(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

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
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Location</label>
              <input
                name="description"
                placeholder="Filter by description, benefits, companies, expertise"
                value={location}
                onChange={(e) => setLocation(e.currentTarget.value)}
              />
            </InputBlock>
            <CheckBox>
              <label htmlFor="full_time">Full time</label>
              <input
                type="checkbox"
                name="full_time"
                value={type}
                onChange={(e) => setType(e.currentTarget.value)}
              />
            </CheckBox>
            <button type="submit">Buscar</button>
          </form>
        </SearchForm>
      </Menu>

      <JobsContainer>
        <div>
          {allJobs.map((job, index) => {
            return <JobCard key={index} job={job} />;
          })}
        </div>  

        {/* <div className="more-positions">
          <Link to="/positions">
            <strong>
              More Awesome Jobs
              <span className="material-icons">arrow_right_alt</span>
            </strong>
          </Link>
        </div>
        <footer>
          <h2 className="title">Hot Searchs</h2>
          <ul>
            PHP · Rails · Python · JavaScript · Scala · Android · iOS · Linux ·
            Erlang San Francisco · New York City · Austin, TX · London · Europe
          </ul>
        </footer> */}
      </JobsContainer>
    </Container>
  );
};

export default Header;
