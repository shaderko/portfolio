import './Projects.css';
import {Project} from './Project';
import websites from './websites.json';

function Projects() {
    return (
        <div className='projects-container'>
            {Object.keys(websites).map(key => {
                return (<Project {...websites[key]}></Project>)
            })
            }
        </div>
    )
}

export default Projects;
