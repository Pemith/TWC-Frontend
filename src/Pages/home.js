import "../CSS/home.css";
import {Link} from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home">
            <h1>ABC Careers</h1>
            <pre>{`Our company is tech comany which is mainly providing SaaS and PaaS for the clients. Mainly we are dealing with 
            the clients all over the world. We have a great culture in our company. There are no bosses in here, 
            We are simply teamed as startup group, where each person is accountable for different 
            part in a project.`}
            </pre>
            <h2>Explore the job roles</h2>
        </div>
     );
}
 
export default Home;