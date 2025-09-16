import { AvatarImage} from "../base/Avatar.jsx"

export function Home({data}) {
    return (
        <section id="home">
            <AvatarImage img="/images/favicon.ico"
                         msg="home-avatar"
                         style="home-avatar" />
            <h2 className="home-title">
                Hello <br /> 
                I'm <strong className="home-title strong">{data.title}</strong>, {data.name}
            </h2>
            <p className="home-description">{data.description}</p>
            <a className="home-contact" href="#">contact me</a>
        </section>
    );
}