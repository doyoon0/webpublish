//i 태그 (fontawesome) 사용했으니 가져와야한다.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function ToggleButton() {
    return(
        <button id="menu_toggle" className="header-toggle">
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
}