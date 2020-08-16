import React from "react";
import { Container, TopSide, BottomSide } from "./styles";
import { Link } from "react-router-dom";

interface Props {
  job: {
    id?: string;
    url?: string;
    title?: string;
    company: string;
    full_time?: boolean;
    location: string;
    created_at?: string;
  };
}

const JobCard: React.FC<Props> = ({ job }) => {
  return (
    <Container>
      <TopSide>
        <Link to={`/positions/${job.id}`}>{job.title}</Link>
        <Link to={`/positions/${job.company}`}>{job.company}</Link>
      </TopSide>

      <BottomSide>
        <Link to={`/positions/${job.location}`}>{job.location}</Link>
      </BottomSide>
    </Container>
  );
};

export default JobCard;

// <div className="card-job-info">
//   <div className="title-position">
//     {/* <Link
//       to={{
//         pathname: `/positions/${job.id}.json`,
//         state: { job },
//       }}
//     >
//       test
//     </Link> */}
//     <p>
//       <strong>{job.title}</strong>
//     </p>
//     <span>
//       {job.company} - <strong>{job.type}</strong>
//     </span>
//   </div>
//   {/* <input type="hidden" name="id" value={job.id} /> */}
//   <div className="location">
//     <p>
//       {job.location}
//       <br /> {job.created_at} day ago
//     </p>
//   </div>
// </div>
