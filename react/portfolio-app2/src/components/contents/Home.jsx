import { AvatarImage } from "../base/AvatarImage.jsx"

export function Home({data}) {
    return (
        <section id="home" >
            <AvatarImage img="/images/favicon.ico"
                msg="home-avatar"
                style="home-avatar" />

            <h2 class="home-title">
                Hello <br />
                    I'm <strong class="home-title strong">{data.title}</strong>, {data.name}
            </h2>
            <p class="home-description">{data.description}</p>
            <a class="home-contact" href="#">contact me</a>
        </section>
    );
}