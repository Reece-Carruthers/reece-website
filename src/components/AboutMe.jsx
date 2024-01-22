export default function AboutMe() {

    const paragraphStyle = "text-sm lg:text-base 2xl:text-xl ml-2 mr-2 m-2 text-justify text-wrap"
    return (
        <div className="flex flex-col rounded-xl border p-2 lg:p-5 lg:w-2/3 mx-auto justify-center items-center">
            <h2 className="text-xl lg:text-2xl 2xl:text-4xl m-2">About me</h2>
            <p className={paragraphStyle}>I am currently in my final year of University, studying Computer Science at Northumbria University, while I am working part-time as a Scala software engineer at HM Revenue & Customs.</p>
            <p className={paragraphStyle}> I would describe myself as a person with a strong work ethic who takes pride in their work and has strong critical thinking skills, which helps me to solve problems. I would also consider myself to be a happy and approachable individual who is easy-going, but serious when the time calls for it.</p>
            <p className={paragraphStyle}>I have a particular interest in Java, Scala and React</p>
        </div>
    )
}