export function Projects({project}) {
    return (
        <ul className="projects">
            {project && project.map(p =>
                <Project img={p.img}
                    alt={p.alt}
                    name={p.name}
                    detail={p.detail} />
            )}
        </ul>
    );
}

export function Project({img, alt, name, detail}) {
    return (
        <li className="project">
            <img className="project-img" src={img} alt={alt} />
            <div className="project-metadata">
                <h3 className="project-metadata-title">{name}</h3>
                <p>{detail}</p>
            </div>
        </li>
    );
}