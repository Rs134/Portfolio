export default function AboutCard({ image, title, content }){
    return (
        <div className="about-card bg-neutral-950 flex flex-col items-start justify-start gap-4 p-4 rounded-lg">
           <img src={image} alt={title} className="w-12 p-2 rounded-lg bg-blue-500" />
            <div className="card-title text-3xl font-bold tracking-wider">{title}</div>
            <div className="card-content">{content}</div>
        </div>
    )
}