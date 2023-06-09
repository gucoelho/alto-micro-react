import { PropsWithChildren } from "react"
import HeroImage from "@components/molecules/HeroImage"

const Column = ({ children }: PropsWithChildren) =>
  <div className="h-full flex flex-col mr-5 last:mr-0" role="column">{children}</div>

const Home = () => {
  return <>
    <main className="flex h-full flex-col items-center justify-between py-6">
      <div className="h-96 w-full">
        <HeroImage
          imageUrl="https://distritodoesporte.com/wp-content/uploads/Rei-Pele.jpeg"
          title="Hero title"
          subtitle="Hero subtitle" />
      </div>
      <div className="grid md:grid-cols-2 h-full last:mr-0 sm:grid-cols-1 mt-3">
        <Column>
          <p className="grow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/eyeh8fuf1_g"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
          </iframe>
        </Column>
        <Column>
          <div className="flex justify-start mb-5">
            <img className="max-w-[200px] max-h-[200px] h-auto object-cover mr-2"
              src="https://picsum.photos/200/200"
              alt="Side image" />
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="h-1/2 flex justify-start">
            <img className="h-1/2 object-cover mr-2 w-full"
              src="https://picsum.photos/200/200"
              alt="Image one" />

            <img className="h-1/2 object-cover mr-2 w-full"
              src="https://picsum.photos/200/200"
              alt="Imaeg two" />

            <img className="h-1/2 object-cover mr-2 w-full"
              src="https://picsum.photos/200/200"
              alt="Image three" />
          </div>
        </Column>
      </div>
    </main>
  </>
}

export default Home