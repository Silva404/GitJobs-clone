import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import { Link, useParams } from "react-router-dom";
import api from "../../Services/api";
import PositionCard from "../../components/PositionCard";

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
      <p>{job?.title}</p>
      <p>{job?.company}</p>
      <div>
      {job?.description}
      </div>
      <p>{job?.full_time}</p>
      <p>{job?.location}</p>
      <p>{job?.id}</p>
      <p>{job?.created_at}</p>
      <p>{job?.how_to_apply}</p>
      {/* <PositionCard job={job}/> */}
    </Container>
  );
};

export default JobPosition;
