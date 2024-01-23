import {EnvelopeIcon} from "@heroicons/react/16/solid/index.js";
import reece from "../assets/reece.png";
import linkedin from "../assets/LinkedinLogo.png";
import github from "../assets/GithubLogo.png";
import cv from "../assets/cv-icon.png";
import cvPDF from "../assets/Reece-Carruthers-CV.pdf";

const profile = {
    name: 'Reece Carruthers',
    email: 'reece@reececarruthers.co.uk',
    backgroundImage:
        'https://images.unsplash.com/photo-1507103418911-45d03b291916?q=80&w=2692&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Graduate Software Engineer',
    location: 'Newcastle upon Tyne',
}
export default function Banner() {
    return (
        <div className="mb-10">
            <div>
                <img className="h-32 w-full object-cover lg:h-48" src={profile.backgroundImage} alt=""/>
            </div>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                        <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={reece} alt=""/>
                    </div>
                    <div
                        className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                            <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                            <h2 className="truncate text-xl text-gray-800">{profile.title}</h2>
                        </div>
                        <div
                            className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                                <span>Contact Me</span>
                            </button>
                            <a
                                href="https://www.linkedin.com/in/reece-carruthers-a85841224/"
                                type="button"
                                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                <img src={linkedin} className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" alt=""
                                     aria-hidden="true"/>
                                <span>Linkedin</span>
                            </a>
                            <a
                                href={"https://github.com/Reece-Carruthers"}
                                type="button"
                                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                <img src={github} className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"
                                     alt=""/>
                                <span>Github</span>
                            </a>
                            <a
                                href={cvPDF}
                                type="button"
                                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                <img src={cv} className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"
                                     alt=""/>
                                <span>CV</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                    <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
                    <h2 className="truncate text-xl text-gray-800">{profile.title}</h2>
                </div>
            </div>
        </div>
    )
}