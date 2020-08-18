import React, { useEffect, useState, useContext } from "react";
import JobCard from "../../components/JobCard";
import { useParams, Link } from "react-router-dom";
import api from "../../Services/api";
import Context from '../../Context/index'

import {
  Container,
  AboutContainer,
  AsideLeft,
  AsideRight,
  Subscribe,
  EmailUpdates,
  PositionContainer,
  ArrowLeft,
  Title,
  TwitterLogo
} from "./styles";

const Results: React.FC = () => {
  const { description, location } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api
      .get(`/positions.json`, {
        params: {
          description,
          location,
          markdown: true,
        },
      })
      .then((res) => {
        const results = res.data;

        setJobs(results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Container>
      <Link to={"/positions"} className="allPositions">
        <ArrowLeft />
        See all job positions
      </Link>
      <PositionContainer>
        <Title>
          <h1>Showing {jobs.length} of AllJobs </h1>
        </Title>
        <AboutContainer>
          <AsideLeft>
            {jobs.map((job, index) => {
              return <JobCard key={index} job={job} />;
            })}
          </AsideLeft>
          <AsideRight>
            <Subscribe>
              <TwitterLogo/>
              <Link to="https://twitter.com/GitHubJobs">Follow GitHub Jobs on Twitter</Link>              
            </Subscribe>

            <EmailUpdates>
              <h3>Subscribe to email updates</h3>
              <p>
                Subscribe and we’ll send you a summary once a week if new jobs
                are posted to this list.
              </p>
              <button>Subscribe to updates</button>
            </EmailUpdates>
          </AsideRight>
        </AboutContainer>
      </PositionContainer>
    </Container>
  );
};

export default Results;
