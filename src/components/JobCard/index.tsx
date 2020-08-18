import React from "react";
import { Container, TopSide, BottomSide, Detail } from "./styles";
import { Link } from "react-router-dom";

interface Props {
  job: {
    id?: string;
    url?: string;
    title?: string;
    company: string;
    full_time?: boolean;
    location: string;
    created_at?: string;
    type?: string;
  };
}

const JobCard: React.FC<Props> = ({ job }) => {

  return (
    <Container>
      <TopSide>
        <Link to={`/positions/${job.id}`}>{job.title}</Link>
        <Detail>
          <Link to={`/positions/${job.company}`}>{job.company}</Link>
          <p> - {job.type}</p>
        </Detail>
      </TopSide>

      <BottomSide>
        <p>{job.location}</p>
        <p>{job.created_at}</p>
      </BottomSide>
    </Container>
  );
};

export default JobCard;
