import React from "react";

import { Container, AboutContainer, AsideLeft, AsideRight, Company, HowToApply } from "./styles";
import { Link } from "react-router-dom";

interface Data {
  id: string;
  url: string;
  title: string;
  company: string;
  full_time: boolean;
  location: string;
  created_at: string;
  description: string;
  how_to_apply: string;
}

const PositionCard: React.FC<Data> = (Job) => {
  return (
    <Container>
      <p>
        {Job.full_time} / {Job.location}
      </p>
      <h1>{Job.title}</h1>
      <AboutContainer>
        <AsideLeft>
          <p>{Job.description}</p>
        </AsideLeft>
        <AsideRight>
          <Company>
            {Job.company}
            <img src={Job.url} alt={Job.company} />
            <Link to={Job.url}>{Job.url}</Link>
          </Company>

          <HowToApply>
            <h3>How to apply</h3>
            <p>Please email your resume to</p>
            <Link to={Job.url}>{Job.url}</Link>
          </HowToApply>
        </AsideRight>
      </AboutContainer>

      <Link to={`/positions/${"job.company"}`}>{"job.company"}</Link>
    </Container>
  );
};

export default PositionCard;
