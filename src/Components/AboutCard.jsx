export default function AboutCard({ icon, title, content }){
    return (
        <div className="about-card bg-neutral-950 flex flex-col items-start justify-start gap-4 p-4 rounded-lg">
            <div className="icon">{icon}</div>
            <div className="card-title text-3xl font-bold tracking-wider">{title}</div>
            <div className="card-content">{content}</div>
        </div>
    )
}