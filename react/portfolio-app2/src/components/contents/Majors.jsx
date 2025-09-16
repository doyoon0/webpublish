import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

export function Major({ icons, title, subjects, style }) {
    return (
        <li className="major">
            {icons === "html" && <FontAwesomeIcon icon={faHtml5} className={style} />}
            {icons === "mobile" && <FontAwesomeIcon icon={faMobile} className={style} />}
            {icons === "server" && <FontAwesomeIcon icon={faServer} className={style} />}
            <p>{title}</p>
            <p>{subjects}</p>
        </li>
    );
}

export function Majors() {
    const majors = [
        {
            "icons": "html",
            "title": "Front-end",
            "subjects": "HTML, CSS, JavaScript, TypeScript, React, WebAPIs",
            "style": "fa-brands fa-html5 major-icon"
        },
        {
            "icons": "mobile",
            "title": "Mobile",
            "subjects": "Android Studio, React Native, iOS, Swift, Java, Kotlin",
            "style": "fa-solid fa-mobile major-icon"
        },
        {
            "icons": "server",
            "title": "Back-end",
            "subjects": "Java, JavaScript, Go, Kotlin, Spring, Spring Boot",
            "style": "fa-solid fa-server major-icon"
        }
    ];

    return (
        <ul class="majors">
            {
                majors && majors.map(major =>
                    <Major icons={major.icons}
                        title={major.title}
                        subjects={major.subjects}
                        style={major.style} />
                )
            }
        </ul>
    );
}