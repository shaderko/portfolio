import './Project.css';

export const Project = ({name, _, link, image}) => (
    <div className='project-container'>
        <a className='project-wrap-link' href={link}>
            <span className='lower-description'>
                <h1 className='title'>{name}</h1>
            </span>
            <img src={image} className="project-image" alt="..." />
        </a>
    </div>
)
