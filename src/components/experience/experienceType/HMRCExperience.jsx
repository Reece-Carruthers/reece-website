export default function HMRCExperience() {
    const skills = [
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

    return (
        <div className="mb-2">
            <p className="mt-6 ml-2 mr-2 text-sm lg:text-base 2xl:text-2xl">I have worked at HM Revenue & Customs since the 5th of September 2022 until present</p>
            <div className="mt-2 grid grid-cols-1">
                <h3 className="text-lg lg:text-xl 2xl:text-2xl m-2 text-center">Skills Gained</h3>
                <ul className="grid md:grid-cols-2 list-disc justify-center w-3/4 mx-auto text-sm lg:text-base 2xl:text-xl">
                    {skills.map((skill, index) => (
                        <li className="mt-2" key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}