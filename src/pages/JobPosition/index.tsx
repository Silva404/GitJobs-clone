import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import { Link, useParams } from "react-router-dom";
import api from "../../Services/api";
import PositionCard from "../../components/PositionCard";
import ReactMarkdown from 'react-markdown'

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

const JobPosition: React.FC = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Data>();

  useEffect(() => {
    api
      .get(`/positions/${id}.json`)
      .then((res) => {
        const results: any = res.data;

        setJob(results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(job);

  return (
    <Container>
      <h1>See all positions </h1>
      <p>{job?.title}</p>
      <p>{job?.company}</p>
      <ReactMarkdown>

      {job?.description}
      </ReactMarkdown>
      <p>{job?.full_time}</p>
      <p>{job?.location}</p>
      <p>{job?.id}</p>
      <p>{job?.created_at}</p>
      <p>{job?.how_to_apply}</p>
      {/* <PositionCard /> */}
    </Container>
  );
};

export default JobPosition;
