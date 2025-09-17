import { Title, SubTitle, Description } from '../base/Title.jsx';
import { WorkCategories } from './WorkCategories.jsx';
import { Projects} from './Projects.jsx';

export function Work({data}) {
    return (
        <section id="work" className="section container">
            <Title title="My Work" />
            <SubTitle title="Projects" />
            <WorkCategories categories={data.categories}/>
            <Projects project={data.project}/>
        </section>
    );
}