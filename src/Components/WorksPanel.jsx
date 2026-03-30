export default function WorksPanel({img, altname, name, content, link}){
    return (
        <div className="works-panel flex flex-col align-center justify-center gap-4 rounded-lg p-10 text-center"> 
            <img src={img} alt={altname} className="rounded-lg bg-blue-500 w-full aspect-[3/2] object-cover"/>
            <div className="project-title card-title">{name}</div>
            <div className="project-content card-content">{content}</div>
            <a href={link} target="_blank" rel="noreferrer" className="btn self-center">View Project</a>
        </div>
    )
}