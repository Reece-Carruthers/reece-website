export default function UniversityExperience() {
    const skills = ["Java",
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

    return (
        <>
            <p className="mt-6 ml-2 mr-2 text-sm lg:text-base 2xl:text-2xl">During my degree at Northumbria University, I have had the opportunity to develop my personal and professional skills</p>
            <div className="mt-2 grid grid-cols-1">
                <h3 className="text-lg lg:text-xl 2xl:text-2xl m-2 text-center">Skills Gained</h3>
                <ul className="grid md:grid-cols-2 list-disc justify-center w-3/4 mx-auto text-sm lg:text-base 2xl:text-xl">
                    {skills.map((skill, index) => (
                        <li className="mt-2" key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}