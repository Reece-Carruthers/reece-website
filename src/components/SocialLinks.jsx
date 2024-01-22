import github from "../assets/GithubLogo.png";
import linkedin from "../assets/LinkedinLogo.png";
import cvPDF from "../assets/Reece-Carruthers-CV.pdf";
import cvIcon from "../assets/cv-icon.png";

export default function SocialLinks() {
    const buttonClass = "flex justify-center items-center m-5"
    return (
        <>
            <button className={buttonClass}>
                <a rel="noreferrer" href={cvPDF} target="_blank">
                    <img className="hover:drop-shadow-2xl" src={cvIcon} width={250} height={250}
                         alt={"Image of a CV icon"}></img>
                </a>
            </button>
            <button className={buttonClass}>
                <a href={"https://github.com/Reece-Carruthers"}>
                    <img className="hover:drop-shadow-2xl" src={github} width={250} height={250}
                         alt={"Image of the Github logo"}></img>
                </a>
            </button>
            <button className={buttonClass}>
                <a href={"https://uk.linkedin.com/in/reece-carruthers-a85841224"}>
                    <img className="hover:drop-shadow-2xl" src={linkedin} width={250} height={250}
                         alt={"Image of the Linkedin logo"}></img>
                </a>
            </button>
        </>
    )
}