export default function Home(){
    return (
        <div id="home" className="home-container flex items-center justify-center mt-50">
            <div className="home-content flex flex-col gap-1 items-center justify-center text-center">
                <h1 className="heading"> Hi! I am <span className="sub-heading"> Reiad. </span></h1>
                <h2 className="text-3xl tracking-wider"> Aspiring Full Stack Developer | Tech Enthusiast </h2>
                <p className="content"> 
                Dedicated to building high-quality, innovative and functional web application solutions. 
                Passionate about creating a positive influence in the tech industry and continuously learning and improving my skills.
                </p>
                <div className="home-btns flex items-center justify-center gap-4 mt-4"> 
                    <a className="btn" href="#about" > Explore More</a>
                    <a className="btn-alternate" href="#contact" > Contact Me </a>
                </div>
            </div>
        </div>
    )
}