import WorksPanel from "./WorksPanel"
import As_thumbnail from "../assets/As_thumbnail.jpg"
export default function Works(){
    return(
        <div className="works-outline mt-80">
            <h1 className="heading text-center">Solutions In <span className="sub-heading">Action</span></h1>
            <div className="works-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <WorksPanel img={As_thumbnail} altname="AfterShock Thumbnail" name="AfterShock" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="https://aftershock.onrender.com/" />
                <WorksPanel img={As_thumbnail} altname="AfterShock Thumbnail" name="AfterShock" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="https://aftershock.onrender.com/" />
                <WorksPanel img={As_thumbnail} altname="AfterShock Thumbnail" name="AfterShock" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="https://aftershock.onrender.com/" />
                <WorksPanel img={As_thumbnail} altname="AfterShock Thumbnail" name="AfterShock" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="https://aftershock.onrender.com/" />
                <WorksPanel img={As_thumbnail} altname="AfterShock Thumbnail" name="AfterShock" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="https://aftershock.onrender.com/" />
                <WorksPanel img={As_thumbnail} altname="AfterShock Thumbnail" name="AfterShock" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." link="https://aftershock.onrender.com/" />

            </div>
        </div>
    )
}