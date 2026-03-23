export default function EducationCard({ school, degree, field, year, description }) {
    return (
        <div className="education-card">
            <h3 className="card-title">{school}</h3>
            <p className="card-degree expr-content">{degree} {field}</p>
            <p className="card-year expr-content">{year}</p>
            <p className="expr-descr">{description}</p>
        </div>
    );
}