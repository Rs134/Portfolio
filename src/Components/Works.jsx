import WorksPanel from "./WorksPanel"
import As_thumbnail from "../assets/As_thumbnail.jpg"
import carhub_thumbnail from "../assets/carhub_thumbnail.jpg"
import home_thumbnail from "../assets/home_thumbnail.png"
import prep_thumbnail from "../assets/prep_thumbnail.png"
import rpr_thumbnail from "../assets/rpr_thumbnail.jpg"
import dashboard_thumbnail from "../assets/dashboard_thumbnail.png"

export default function Works(){

    return(
        <div id="works" className="works-outline my-80">
            <h1 className="heading text-center">Solutions In <span className="sub-heading">Action</span></h1>
            <div className="works-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <WorksPanel img={As_thumbnail} altname="AfterShock Website Thumbnail" name="AfterShock" content="Dynamic application integrated with a chatbot to help individuals cope with post-accident distress and trauma" link="https://aftershock.onrender.com/" />
                <WorksPanel img={home_thumbnail} altname="HomeLens Website Thumbnail" name="HomeLens" content="Full-stack platform for users to explore past house listings and utilize AI-powered filtering to browse and access property information." link="https://homelens-ab3o.onrender.com/" />
                <WorksPanel img={rpr_thumbnail} altname="Reaz Party Rentals Website Thumbnail" name="Reaz Party Rentals" content="Web application for showcasing rental equipment and business offerings, including interactive forms for bookings." link="https://reazpartyrentals.onrender.com/" />
                <WorksPanel img={prep_thumbnail} altname="Prepster Website Thumbnail" name="Prepster" content="AI-driven educational platform that allows users to generate custom interview questions and receive AI-generated feedback on their responses." link="https://prepster-f8yi.onrender.com/" />
                <WorksPanel img={carhub_thumbnail} altname="CarHub Website Thumbnail" name="CarHub" content="CRUD app for passionate car enthusiasts to share posts and interact with others, supporting and celebrating car culture." link="https://carhub0.netlify.app/" />
                <WorksPanel img={dashboard_thumbnail} altname="Recipe_Dashboard Website Thumbnail" name="Recipe Dashboard" content="Recipe dashboard application that fetches data from an API and provides interactive visualizations, allowing users to filter and explore recipes based on various criteria." link="https://recipedashboard.netlify.app/" />

            </div>
        </div>
    )
}