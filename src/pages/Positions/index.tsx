import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import { useParams, Link } from "react-router-dom";
import api from "../../Services/api";

import {
  Container,
  AboutContainer,
  AsideLeft,
  AsideRight,
  Company,
  EmailUpdates,
  PositionContainer,
  ArrowLeft,
  Title,
  Apply,
} from "./styles";

interface PositionsApi {
  company?: string;
  location?: string;
  id?: string;
  title?: string;
}

const Positions: React.FC = () => {
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
  }, [description, location]);

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
            <Company>
              {/* <Link to={"ea"}>{job?.company}</Link>
              <Link to={"ea"}>
                <img src={job?.company_logo} alt={job?.company} />
              </Link> */}
            </Company>

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

export default Positions;
