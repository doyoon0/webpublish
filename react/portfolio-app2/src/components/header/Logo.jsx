import { AvatarImage } from "../base/AvatarImage.jsx";
export function Logo({img, name}) {
    return (
        <div className="header-logo">
            <AvatarImage img={img}
                msg="header-logo"
                style="header-logo-img"
            />
            <h1 className="header-logo-title">{name}</h1>
        </div>
    );
}