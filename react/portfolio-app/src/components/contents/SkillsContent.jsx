import { Article, SkillsTitle, CodingSkills } from './Article.jsx';
import { List } from '../base/List.jsx';

export function SkillsContent({skills}) {
    const { coding, tools, etc } = skills;
    return (
        <div className="skills">
            <Article style="skills-coding">
                <SkillsTitle title="Coding Skills" />
                <CodingSkills coding={coding}/>
            </Article>

            <Article style="skills-tools">
                <SkillsTitle title="Tools" />
                <List titles={tools} />
            </Article>

            <Article style="skills-etc">
                <SkillsTitle title="Etc" />
                <List titles={etc} />
            </Article>
        </div>
    );
}