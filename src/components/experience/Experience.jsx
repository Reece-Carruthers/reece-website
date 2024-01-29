import ExperienceType from "./ExperienceType.jsx";

export default function Experience() {

    const hmrcAccordionItems = {
        skills: [
            "Time Management",
            "Working under pressure",
            "Communication",
            "Collaboration",
            "Problem Solving",
            "Critical Thinking",
            "Scala",
            "Test Driven Development",
            "Restful APIs",
            "Unit Testing",
            "HTML",
            "CSS",
            "Accessibility WCAG",
            "Scrum",
            "MongoDB",
            "Requirements Analysis"
        ],
        generalAccordion: [
            {
                accordionTitle: "Main Duties",
                accordionText: "I worked on the New Computerised Transit System Phase 5 <To Be Completed>",
            }
        ]
    }

    const universityAccordionItems = {
        skills: [
            "React",
            "C",
            "PHP",
            "Python",
            "SQLite",
            "HTML",
            "CSS",
            "Tailwind",
            "Design Patterns",
            "User Research",
            "Communication",
            "Backend",
            "Frontend",
            "Restful APIs",
            "Problem Solving"
        ],
        generalAccordion: [
            {
                accordionTitle: "Main Duties",
                accordionText: "<To Be Completed>",
            }
        ]
    }

    const hmrcExperience = {
        title: "HM Revenue and Customs (Sept 2022 - Present)",
        description: "I have been working at HM Revenue and Customs for the past two years as a Scala software engineer",
        accordionItems: hmrcAccordionItems
    }

    const universityExperience = {
        title: "Northumbria University (Sept 2018 - Present)",
        description: "During my degree at Northumbria University, I have had the opportunity to develop my personal and professional skills",
        accordionItems: universityAccordionItems
    }

    const experiences = [hmrcExperience, universityExperience]


    return (

        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-gray-900 text-xl font-bold">Relevant Experience</h3>
            </div>
            <div className=" mb-5 md:mb-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ul role="list" className="space-y-3">
                        {experiences.map((experience, index) => (
                            <li key={index} className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6 mb-8">
                                <ExperienceType title={experience.title} description={experience.description} accordionItems={experience.accordionItems} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}