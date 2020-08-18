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

      <div className="more-positions">
          <Link to="/positions">
            <strong>
              More Awesome Jobs
              <span className="material-icons">arrow_right_alt</span>
            </strong>
          </Link>
        </div>
        <footer>
          <h2 className="title">Hot Searchs</h2>
          <ul>
            PHP · Rails · Python · JavaScript · Scala · Android · iOS · Linux ·
            Erlang San Francisco · New York City · Austin, TX · London · Europe
          </ul>
        </footer>
    </JobsContainer>
  );
};

export default Home;
