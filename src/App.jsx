import AboutMe from "./components/AboutMe.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import Experience from "./components/experience/Experience.jsx";

export default function App() {

  return (
    <>
        <div className="grid grid-col p-10 lg:p-0 lg:m-0 gap-10 justify-center items-center">
            <h1 className="text-4xl sm:text-6xl 2xl:text-8xl text-center p-5">Reece Carruthers</h1>
            <div className="drop-shadow-2xl shadow-white">
                <AboutMe />
            </div>
            <div className="drop-shadow-2xl shadow-white">
                <Experience />
            </div>
            <div className="m-10 text-center grid grid-cols-2 gap-10">
                <SocialLinks />
            </div>
        </div>
    </>
  )
}