export function Job({ img, msg, name, period, style }) {
    return (
        <>
            <img src={img} alt={msg} />
            <div>
                <p className="job-name">{name}</p>
                <p className="job-period">{period}</p>
            </div>
        </>
    );
}

export function Jobs({jobs}) {
    return (
        <ul className="jobs">
            {jobs && jobs.map(jobs =>
                <li className="job">
                    <Job img={jobs.img}
                        msg={jobs.msg}
                        name={jobs.name}
                        period={jobs.period}
                    />
                </li>
            )}
        </ul>
    );
}