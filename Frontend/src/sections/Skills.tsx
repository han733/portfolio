import { SectionHeading } from '../components/ui/SectionHeading';
import { SkillCard } from '../components/ui/SkillCard';
import { skillsData } from '../data';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="My Toolkit" title="Technical Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, idx) => (
            <SkillCard key={idx} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};