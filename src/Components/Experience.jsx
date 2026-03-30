import EducationCard from './EducationCard';
import ExperienceCard from './ExperienceCard';

export default function Experience(){
    return(

            <div className="journey-container mt-80" id="experience">
                <h1 className="heading text-center">My <span className="sub-heading">Journey</span></h1>
                <div className="outer-container flex items-center justify-center mt-10 flex-row mx-auto">
                    <div className="education-container">
                        <EducationCard school="Queens College" degree="Bachelor of Arts In" field="Computer Science" year="Expected Grad Date: June 2026" description="Studying core computer science concepts including data structures, algorithms, software engineering, and web development."/>
                        <EducationCard school="CodePath" field="Intermediate Web Development Course" year="April 2025" description="Built and deployed full-stack web applications, deepening skills in React, APIs, and modern development workflows."/>
                        <EducationCard school="CodePath" field="Intro to Web Development Course" year="December 2024" description="Learned the fundamentals of HTML, CSS, and JavaScript, building responsive and interactive web pages from scratch."/>
                    </div>

                    <div className="experience-container">
                        <ExperienceCard company="Black to Business" position="Web Developer Intern" duration="July 2025 - August 2025" description="Designed and developed web solutions to support a platform empowering Black entrepreneurs, collaborating with a team to deliver polished, user-friendly features"/>
                        <ExperienceCard company="Party Rentals" position="Associate" duration="March 2020 - Present (Seasonal)" description="Assisted with event setup, inventory management, and customer coordination, developing strong communication and organizational skills in a fast-paced environment."/>
                    </div>
                </div>
            </div>
    )
}