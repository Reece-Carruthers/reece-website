import Accordion from "../Accordion.jsx";

export default function ExperienceType({title, description, accordionItems}) {

    return (
        <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-6 ml-2 mr-2">{description}</p>
            <Accordion items={accordionItems} />
        </div>
    )
}