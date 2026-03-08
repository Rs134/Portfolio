export default function Home(){
    return (
        <div className="home-container flex align-center justify-between gap-4 m-25">
            <div className="home-1 flex flex-col gap-3 align-center justify-start text-left w-3/4">
                <h1 className="text-6xl font-bold tracking-wider"> Hi! I am <span className="home-name"> Reiad. </span></h1>
                <h2 className="text-3xl tracking-wider"> Aspiring Full Stack Developer, Tech Enthusiast </h2>
                <p className="content text-xl tracking-wider w-3/5 text-gray-400 "> 
                Dedicated to building high-quality, innovative and functional web application solutions. 
                Passionate about creating a positive influence in the tech industry and continuously learning and improving my skills.
                </p>
                <div className="home-btns flex gap-4 mt-4"> 
                    <button className="btn"> Explore More</button>
                    <button className="btn-alternate"> Contact Me </button>
                </div>
            </div>
            <div className="home-2">
                <h1> Test </h1>

            </div>
        </div>
    )
}