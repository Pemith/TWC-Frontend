import {Link} from 'react-router-dom';
import "../CSS/home.css";

const JobList = ({jobs}) => {
    return ( 
        <div className="site-list">
            {jobs.map(job =>(
                <div className='jblock' key={job._id}>
                    <Link>
                        <h2>{job.role}</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default JobList;
