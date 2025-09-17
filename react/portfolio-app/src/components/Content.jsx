import { Home } from './contents/Home.jsx';
import { About } from './contents/About.jsx';
import { Skills } from './contents/Skills.jsx';
import { Work } from './contents/Work.jsx';
import { Testimonials } from './contents/Testimonials.jsx'
import { ArrowTop } from './contents/ArrowTop.jsx';

export function Content({data}) {
    //[다른 방법] : section wrap 으로 감싸서 { children } 줄 수도 있음.
    return(
        <>
            <Home data={data.home} />
            <About data={data.about}/>
            <Skills data={data.skills} />
            <Work data={data.work}/>
            <Testimonials testimonials={data.testimonials}/>
            <ArrowTop />
        </>
    );
}