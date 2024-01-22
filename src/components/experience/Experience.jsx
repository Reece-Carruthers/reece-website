import HMRCExperience from "./experienceType/HMRCExperience.jsx";
import UniversityExperience from "./experienceType/UniversityExperience.jsx";

export default function Experience() {
    return (
        <div className="flex flex-col rounded-xl border p-2 lg:p-5">
            <h2 className="text-xl lg:text-2xl 2xl:text-4xl m-2">Experience</h2>
            <HMRCExperience />
            <UniversityExperience />
        </div>
    )
}