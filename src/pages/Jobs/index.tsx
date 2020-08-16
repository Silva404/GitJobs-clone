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
  const { description = "java", location } = useParams();
  const [jobs, setJobs] = useState<PositionsApi>([]);

  useEffect(() => {
    api
      .get(`/positions.json?${description}`)
      .then((res) => {
        console.log(res.data);

        setJobs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (

  <h1>{jobs[0].company}</h1>
    // <div>
    //   {jobs.map((item) => {
    //     return <JobCard location={item.location} key={item.id} />;
    //   })}
    </div>
  );
};

export default Jobs;
