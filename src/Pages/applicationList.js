import {Link} from 'react-router-dom';
import "../CSS/home.css";

const ApplicationList = ({applicants}) => {
    return ( 
        <div className="site-list">
            {applicants.map(applicant =>(
                <div className='jblock' key={applicant._id}>
                    <Link>
                        <h2>{applicant.fullName}</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default ApplicationList;