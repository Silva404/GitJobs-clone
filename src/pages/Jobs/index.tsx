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

const Jobs: React.FC = () => {
  const { description, location } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api
      .get(`/positions.json`, {
        params: {
          description,
          location
        }
      })
      .then((res) => {        
        setJobs(res.data.sort(() => 0.5 - Math.random()).slice(0, 2));
        console.log(setJobs);        
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

export default Jobs;
