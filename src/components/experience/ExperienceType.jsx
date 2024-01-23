export default function ExperienceType({description, skills}) {

    return (
        <div>
            <p className="mt-6 ml-2 mr-2">{description}</p>
            <div className="mt-2 grid grid-cols-1">
                <h4 className="m-2 text-center text-lg">Skills Gained</h4>
                <ul className="grid md:grid-cols-2 list-disc justify-center w-3/4 mx-auto">
                    {skills.map((skill, index) => (
                        <li className="mt-2" key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}