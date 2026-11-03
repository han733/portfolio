import { SectionHeading } from '../components/ui/SectionHeading';
import { ExperienceTimelineItem } from '../components/ui/ExperienceTimelineItem';
import { experienceData } from '../data';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading subtitle="My Journey" title="Experience & Education" />

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          {experienceData.map((exp, index) => (
            <ExperienceTimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};