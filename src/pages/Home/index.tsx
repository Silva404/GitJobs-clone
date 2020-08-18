import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import { useParams, Link } from "react-router-dom";
import api from "../../Services/api";

import {
  JobsContainer,
  Title,
  MorePositions,
  Footer,
  ArrowRight,
  HotLinks,
  RightSide,
  LeftSide,
  FeaturedCompany,
  Main
} from "./styles";

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
      <Main>
        <LeftSide>
          <div>
            {jobs.map((job, index) => {
              return <JobCard key={index} job={job} />;
            })}
          </div>

          <MorePositions>
            <Link to="/positions">
              <strong>
                More Awesome Jobs
                <ArrowRight />
              </strong>
            </Link>
          </MorePositions>
          <Footer>
            <h2 className="title">Hot Searchs</h2>
            <HotLinks>
              <Link to={"/positions?description=PHP"}>PHP</Link>·
              <Link to={"/positions?description=Rails"}>Rails</Link>·
              <Link to={"/positions?description=Python"}>Python</Link>·
              <Link to={"/positions?description=JavaScript"}>JavaScript</Link>·
              <Link to={"/positions?description=Scala"}>Scala</Link>·
              <Link to={"/positions?description=Android"}>Android</Link>·
              <Link to={"/positions?description=iOS"}>iOS</Link>·
              <Link to={"/positions?description=Linux"}>Linux</Link>·
              <Link to={"/positions?description=Erlang"}>Erlang</Link>·
              <Link to={"/positions?location=San+Francisco"}>
                San Francisco
              </Link>
              ·
              <Link to={"/positions?location=New+York+City"}>
                New York City
              </Link>
              ·<Link to={"/positions?location=Austin+TX"}>Austin, TX</Link>·
              <Link to={"/positions?location=London"}>London</Link>·
              <Link to={"/positions?location=Europe"}>Europe</Link>
            </HotLinks>
          </Footer>
        </LeftSide>

        <RightSide>
          <FeaturedCompany>
            <p>Featured Company</p>
            {/* <Link to={"ea"}>{jobs?.company}</Link> */}
            {/* <Link to={"ea"}>
            <img src={job.company_logo} alt={jobs[0]?.company} />
          </Link> */}
          </FeaturedCompany>
        </RightSide>
        
      </Main>
    </JobsContainer>
  );
};

export default Home;
