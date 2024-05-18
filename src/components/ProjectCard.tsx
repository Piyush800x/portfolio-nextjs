import Image from "next/image"

export default function ProjectCard() {
    return (
        <div className="md:size-1/3 size-56 rounded-xl overflow-hidden shadow-lg bg-cyan-950 text-white md:mt-10 md:ml-20 md:mr-20">
            <Image
            src={'/img/card.jpg'}
            alt={'card'}
            width={500}
            height={500}
            className="w-full"
            />
            <div className="md:px-6 md:py-4 px-2 py-2">
                <div className="font-bold md:text-xl text-md md:mb-2">Card 1</div>
                <p className="text-gray-400 text-sm">
                    Description
                </p>
            </div>
      </div>
    )
}