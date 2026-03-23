import AboutCard from "./AboutCard"
export default function About(){
    return (
        <div className="about-container flex align-center justify-between gap-4 mt-80 mx-10">
            <div className="about-1 flex align-center justify-center flex-col gap-8 text-center w-3/5">
                <h1 className="heading">Creating A Positive <span className="sub-heading">Impact</span></h1>
                <p className="content about-content text-center">
                I’m driven by challenges and the process of solving complex problems through technology. As an aspiring full-stack developer, I 
                enjoy turning ideas into real-world applications that combine thoughtful design with strong technical foundations. 
                Building across both the front-end and back-end allows me to create solutions that are not only functional, 
                but intuitive and meaningful for users. 
                </p>
            </div>

            <div className="about-2 flex align-center justify-center flex-col gap-9 text-start w-3/5">
                <AboutCard image="src/assets/ux.png" title="UI/UX" content="I focus on designing interfaces that are simple, intuitive, and engaging for users. By combining thoughtful design principles with modern front-end technologies, I strive to create experiences that are both visually appealing and easy to use." />
                <AboutCard image="src/assets/code.png" title="Web Development" content="I focus on building clean, efficient, and scalable web applications that deliver both performance and functionality. By leveraging modern technologies and best practices, I aim to create seamless digital experiences that are reliable, maintainable, and user-focused." />
                <AboutCard image="src/assets/responsive-design.png" title="Accessibility & Responsiveness" content="I prioritize creating layouts that adapt smoothly across all devices and screen sizes. By using responsive design techniques and flexible frameworks, I ensure that every user enjoys a consistent and optimized experience, whether on desktop, tablet, or mobile." />
            </div>


        </div>
    )
}