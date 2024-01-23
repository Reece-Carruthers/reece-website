import ExperienceType from "./ExperienceType.jsx";

export default function Experience() {

    const hmrcExperience = {
        description: "I have worked at HM Revenue & Customs since the 5th of September 2022 until present",
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
        ]
    }

    const universityExperience = {
        description: "During my degree at Northumbria University, I have had the opportunity to develop my personal and professional skills",
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
        ]
    }


    return (

        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-gray-900 text-xl font-bold">Relevant Experience</h3>
            </div>
            <div className="px-4 py-5 sm:p-6 text-justify">
                <ExperienceType description={hmrcExperience.description} skills={hmrcExperience.skills}/>
                <ExperienceType description={universityExperience.description} skills={universityExperience.skills}/>
            </div>
        </div>
    )
}