import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import api from "../../Services/api";

import {
  Container,
  AboutContainer,
  AsideLeft,
  AsideRight,
  Company,
  HowToApply,
  PositionContainer
} from "./styles";

interface Data {
  id: string;
  url: string;
  title: string;
  company: string;
  full_time: boolean;
  location: string;
  created_at: string;
  description: any;
  how_to_apply: string;
  error: string;
}

const JobPosition: React.FC = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Data>();

  useEffect(() => {
    api
      .get(`/positions/${id}.json`, {
        params: {
          id,
        },
      })
      .then((res) => {
        const results: any = res.data;

        setJob(results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(job);

  if (job?.error) {
    return <h1>{job.error}</h1>;
  }

  return (
    <Container>
      <h1>See all positions </h1>
      <PositionContainer>
        <p>
          {job?.full_time} / {job?.location}
        </p>
        <h1>{job?.title}</h1>
        <AboutContainer>
          <AsideLeft>
            <p>{job?.description}</p>
          </AsideLeft>
          <AsideRight>
            <Company>
              {job?.company}
              <img src={job?.url} alt={job?.company} />
              {/* <Link to={job?.url}>{job?.url}</Link> */}
            </Company>

            <HowToApply>
              <h3>How to apply</h3>
              <p>Please email your resume to</p>
              {/* <Link to={job?.url}>{job?.url}</Link> */}
            </HowToApply>
          </AsideRight>
        </AboutContainer>
      </PositionContainer>
    </Container>
  );
};

export default JobPosition;
