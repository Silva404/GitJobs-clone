import React, { useEffect } from "react";
import JobCard from "../../components/JobCard";
import { useParams } from "react-router-dom";
import api from "../../Services/api";

// import { Container } from './styles';

const Jobs: React.FC = () => {
  const { description, location } = useParams();

  useEffect(() => {
    api.get('/positions.json')
  }, [])

  return (
    <div>
      {[1, 2, 3].map((item, index) => {
        <JobCard
          key={index}
          company={"company"}
          location={"location"}
          id={"id"}
          title={"title"}
        />;
      })}
    </div>
  );
};

export default Jobs;
