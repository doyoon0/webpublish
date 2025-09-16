import { Title, Description } from "../base/Title.jsx"
import { Majors } from "./Majors.jsx";
import { Jobs } from "./Jobs.jsx";

export function About() {
    return(
        <section id="about" class="section container">
            <Title title={"About Me"}/>
            <Description />
            <Majors />
            <Jobs />
        </section>
    );
}