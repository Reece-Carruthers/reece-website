import AboutMe from "./components/AboutMe.jsx";
import Experience from "./components/experience/Experience.jsx";
import Banner from "./components/Banner.jsx";
import TechStack from "./components/TechStack.jsx";

export default function App() {

    const sections = [
        {id: 1, componentToDisplay: <AboutMe/>},
        {id: 2, componentToDisplay: <Experience/>},
    ]

    const underConstruction = true

    return (
        <>
            <Banner/>
            {underConstruction ? (
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-24 sm:py-3 relative flex flex-col justify-center">
                        <h2 className="text-2xl"> This website is still under construction, check back later...</h2>
                        <p  className="text-xl">In the meanwhile you can view my CV through the button above :)</p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <ul role="list" className="divide-y divide-gray-200">
                            {sections.map((section) => (
                                <li key={section.id} className="py-4">
                                    {section.componentToDisplay}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-3 text-lg font-bold leading-6 text-gray-900">Tech Stack</span>
                        </div>
                    </div>
                    <TechStack/>
                </>
            )}
        </>
    )
}