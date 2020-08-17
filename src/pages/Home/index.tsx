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

const Home: React.FC = () => {
  const { description, location } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api
      .get(`/positions.json`, {
        params: {
          description,
          location
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
    <div>
      {jobs.map((job, index) => {
        return <JobCard key={index} job={job} />;
      })}
    </div>
  );
};

export default Home;
