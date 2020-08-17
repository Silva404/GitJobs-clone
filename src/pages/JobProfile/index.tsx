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
  PositionContainer,
  ArrowLeft,
  Title,
  Apply
} from "./styles";

interface Data {
  id: string;
  url: string;
  title: string;
  company: string;
  type: string;
  location: string;
  created_at: string;
  description: any;
  how_to_apply: string;
  error: string;
  company_logo: string;
  company_url: string;
}

const JobProfile: React.FC = () => {
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

  return (
    <Container>
      <Link to={"/positions"} className="allPositions">
        <ArrowLeft />
        See all positions
      </Link>
      <PositionContainer>
        <Title>
          <p>
            {job?.type} / {job?.location} / {job?.type}
          </p>
          <h1>{job?.title}</h1>
        </Title>
        <AboutContainer>
          <AsideLeft>
            <p>{job?.description}</p>
          </AsideLeft>
          <AsideRight>
            <Company>
              <Link to={"ea"}>{job?.company}</Link>
              <Link to={"ea"}>
                <img src={job?.company_logo} alt={job?.company} />
              </Link>

              {/* <Link to={job?.company_url}>{job?.company_url}</Link> */}
            </Company>

            <HowToApply>
              <h3>How to apply</h3>
              <Apply>
                {job?.how_to_apply}
              </Apply>
              {/* <Link to={job?.url}>{job?.url}</Link> */}
            </HowToApply>
          </AsideRight>
        </AboutContainer>
      </PositionContainer>
    </Container>
  );
};

export default JobProfile;