import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

export function Major({icons, title, subjects, style}){
    return(
        <>
            {/* icon={여기에} 문자열이 들어갈수 없고 F.A에서 호출하는거라 이런식으로 작성 */}
            { icons === "html" && <FontAwesomeIcon icon={faHtml5} className={style} /> }
            { icons === "mobile" && <FontAwesomeIcon icon={faMobile} className={style} /> }
            { icons === "server" && <FontAwesomeIcon icon={faServer} className={style} /> }
            <p>{title}</p>
            <p>{subjects}</p>
        </>
    );
}

export function Majors({majors}) {
    return(
        <ul className="majors">
            { majors && majors.map(major => 
                <li className="major">
                            <Major icons={major.icons}
                                    title={major.title}
                                    subjects={major.subjects}
                                    style={major.style} />
                </li>
            )}
        </ul>
    );
}