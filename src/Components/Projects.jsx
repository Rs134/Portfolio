function Projects(){
    return (
        <div id="Projects">
            <h1 className="heading"> Projects </h1>
            <div className="project-container">
                <div className="project-box">
                    <img src="/media/projrpr.png"/>
                    <p className="project-caption"> 
                        Developed a full stack party rental web application 
                        with a sleek and professional interface. Implemented a diverse
                        portfolio of multimedia content and Nodemailer-enabled interactive forms.
                        </p>
                    <a href="https://reazpartyrentals.onrender.com/" target="_blank">
                        <button className="btn proj-btn">Explore Now</button>
                    </a>
                </div>
                <div className="project-box">
                    <img src="/media/projcarhub.jpg"/>
                    <p className="project-caption"> 
                        Engineered a functional CRUD web app for car enthusiasts and 
                        other persons of interest to share, view and create posts. Users are also 
                        entitled to comment, upvote, edit, delete and sort through their home feed.
                        </p>
                    <a href="https://carhub0.netlify.app/" target="_blank">
                        <button className="btn proj-btn">Explore Now</button>
                    </a>
                </div>
                <div className="project-box">
                    <img src="/media/projdata.jpg"/>
                    <p className="project-caption"> 
                        Designed a recipe data dashboard that depicts data fetched using 
                        API calls. Added data summary statistics, filtering and graph visualizations based 
                        on data.
                    </p>
                    <a href="https://recipedashboard.netlify.app/" target="_blank">
                        <button className="btn proj-btn">Explore Now</button>
                    </a>
                </div>
                <div className="project-box">
                    <img src="/media/aftershock.png"/>
                    <p className="project-caption"> 
                        Deployed a full stack web application featuring an AI powered chatbot that 
                        assists car accident survivors mental health recovergy and well-being. 
                          
                    </p>
                    <a href="https://aftershock.onrender.com/" target="_blank">
                        <button className="btn proj-btn">Explore Now</button>
                    </a>
                </div>
                

            </div>
            <div className="additional-projects-container">
                    <a href="https://github.com/Rs134" target="_blank">
                        <button className="additional-projects btn"> View More </button>
                    </a>
                </div>
        </div>
    )

}

export default Projects;