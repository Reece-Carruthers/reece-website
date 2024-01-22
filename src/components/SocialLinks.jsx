import github from "../assets/GithubLogo.png";
import linkedin from "../assets/LinkedinLogo.png";
export default function SocialLinks() {
    const buttonClass = "flex justify-center items-center"
    return (
        <>
            <button className={buttonClass}>
                <a href={"https://github.com/Reece-Carruthers"}>
                    <img className="hover:drop-shadow-2xl" src={github} width={250} height={250} alt={"Image of the Github Logo"}></img>
                    </a>
                </button>
            <button className={buttonClass}>
                <a href={"https://uk.linkedin.com/in/reece-carruthers-a85841224"}>
                    <img className="hover:drop-shadow-2xl" src={linkedin} width={250} height={250} alt={"Image of the Linkedin Logo"}></img>
                </a>
            </button>
        </>
)
}