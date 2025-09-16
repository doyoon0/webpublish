export function Job({ img, msg, name, period }) {
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

export function Jobs() {
    const jobs = [
        {
            "img": "/images/jobs/google.png",
            "msg": "google",
            "name": "Google as Junior Software Engineer",
            "period": "2019 Oct - Until now"
        },
        {
            "img": "/images/jobs/samsung.png",
            "msg": "samsung",
            "name": "Samsung as Junior Software Engineer",
            "period": "2010 Oct - 2019 Oct"
        }
    ]

    return (
        <ul className="jobs">
            {jobs && jobs.map(jobs =>
                <li className="job">
                    <Job img={jobs.img}
                        msg={jobs.msq}
                        name={jobs.name}
                        period={jobs.period}
                    />
                </li>
            )}
        </ul>
    );
}