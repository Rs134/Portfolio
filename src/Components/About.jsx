import AboutCard from "./AboutCard"
export default function About(){
    return (
        <div className="about-container flex align-center justify-between gap-4 mt-60 mx-20">
            <div className="about-1 flex align-center justify-start flex-col gap-4 text-start w-3/5">
                <h1 className="heading"> Creating A Positive <span className="sub-heading"> Impact </span> </h1>
                <p className="content about-content">
                I’m driven by challenges and the process of solving complex problems through technology. As an aspiring full-stack developer, I 
                enjoy turning ideas into real-world applications that combine thoughtful design with strong technical foundations. 
                Building across both the front-end and back-end allows me to create solutions that are not only functional, 
                but intuitive and meaningful for users. 
                </p>
            </div>

            <div className="about-2 flex align-center justify-center flex-col gap-4 text-start w-4/5">
                <AboutCard icon="🎓" title="Web Development" content="Your content here" />
                <AboutCard icon="💻" title="UI/UX" content="I focus on designing interfaces that are simple, intuitive, and engaging for users. By combining thoughtful design principles with modern front-end technologies, I strive to create experiences that are both visually appealing and easy to use." />
                <AboutCard icon="🚀" title="Project Management" content="Your content here" />
            </div>


        </div>
    )
}