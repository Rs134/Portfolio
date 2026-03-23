export default function ExperienceCard({ company, position, duration, description}) {
    return (
        <div className="experience-card">
            <h3 className="card-title">{company}</h3>
            <p className="card-position expr-content">{position}</p>
            <p className="card-duration expr-content">{duration}</p>
            <p className="expr-descr">{description}</p>
        </div>
    );
}