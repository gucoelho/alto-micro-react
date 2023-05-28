/* eslint-disable @next/next/no-img-element */
type HeroImageProps = {
    imageUrl: string
    title: string
    subtitle: string
}

const HeroImage = ({ imageUrl, title, subtitle }: HeroImageProps) => {
    return <div className="relative w-full h-full overflow-hidden">
        <img className="w-full h-full object-cover"
            src={imageUrl}
            alt="Hero Image" />
        <div className="absolute right-0 bottom-0 z-1 p-10 mr-10 flex flex-col text-left">
            <h3 className="p-0 m-0 text-white font-bold text-5xl">{title}</h3>
            <h5 className="p-0 m-0 text-white text-3xl">{subtitle}</h5>
        </div>
    </div>
}

export default HeroImage