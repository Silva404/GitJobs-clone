import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import { useParams } from "react-router-dom";
import api from "../../Services/api";

// import { Container } from './styles';

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
    <div>
      {jobs.map((job, index) => {
        return <JobCard key={index} job={job} />;
      })}
    </div>
  );
};

export default Positions;
