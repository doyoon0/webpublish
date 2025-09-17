import { Title, SubTitle, Description } from '../base/Title.jsx';
import { AvatarImage } from '../base/Avatar.jsx';

export function Testimonials({testimonials}) {

    return (
        <section id="testimonial" className="section container">
            <Title title="Testimonial" />
            <SubTitle title="See what they say about me" />
            <ul className="testimonials">
                {testimonials && testimonials.map(t =>
                    <li className="testimonial">
                        <AvatarImage img={t.img} msg={t.alt} style="testimonial-img" />
                        <div className="testimonial-text">
                            <p>{t.description}</p>
                            <p><a href="#" className="testimonial-text-name">{t.name}</a> / {t.company}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
}