import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import { useParams } from "react-router-dom";
import api from "../../Services/api";

import { JobsContainer, Title } from './styles';

const Home: React.FC = () => {
  const { description, location } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api
      .get(`/positions.json`, {
        params: {
          description,
          location,
        },
      })
      .then((res) => {
        const results = res.data;

        setJobs(results.sort(() => 0.5 - Math.random()).slice(0, 2));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <JobsContainer>
      <Title>
        <h2>Featured Jobs</h2>
      </Title>
      <div>
        {jobs.map((job, index) => {
          return <JobCard key={index} job={job} />;
        })}
      </div>
    </JobsContainer>
  );
};

export default Home;
