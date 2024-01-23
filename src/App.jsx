import AboutMe from "./components/AboutMe.jsx";
import Experience from "./components/experience/Experience.jsx";
import Banner from "./components/Banner.jsx";
import TechStack from "./components/TechStack.jsx";

export default function App() {

    const sections = [
        {id: 1, componentToDisplay: <AboutMe/>},
        {id: 2, componentToDisplay: <Experience/>},
    ]

    return (
        <>
            <Banner/>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ul role="list" className="divide-y divide-gray-200">
                    {sections.map((section) => (
                        <li key={section.id} className="py-4">
                            {section.componentToDisplay}
                        </li>
                    ))}
                </ul>
            </div>
            <TechStack />
        </>
    )
}