import Image from "next/image";

export default function ProjectCard() {
    return (
        <div className="bg-black text-white flex flex-row justify-between items-center">
            <div className="">
                <h1>Project Name</h1>
                <p>Describe your project</p>
                {/* TECH STACK IMAGES */}
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {/* IMAGE */}
            <div>
                <Image src={"/img/projects/portfolio.webp"} alt="Img" width={720} height={480}/>
            </div>
        </div>
    )
}