export default function AboutMe() {

    const paragraphStyle = "text-sm lg:text-base 2xl:text-2xl ml-2 mr-2 m-2"
    return (
        <div className="flex flex-col rounded-xl border p-2 lg:p-5">
            <h2 className="text-xl lg:text-2xl 2xl:text-4xl m-2">About me</h2>
            <p className={paragraphStyle}>I am in my final year of university studying Computer Science BSc Hons at Northumbria University</p>
            <p className={paragraphStyle}>I am also working part-time as a Scala software engineer at HM Revenue & Customs</p>
            <p className={paragraphStyle}>I have a particular interest in Java, Scala and React</p>
        </div>
    )
}