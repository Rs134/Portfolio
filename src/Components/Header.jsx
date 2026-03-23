export default function Header(){
    return (
        <div className="header-container bg-neutral-950 flex flex-row justify-evenly items-center p-6 gap-6">
            <div> 
                <h1 className="logo text-6xl font-black tracking-wider"> RS. </h1>
            </div>
            <div> 
                <nav className="flex flex-row items-center justify-center tracking-wider gap-10"> 
                    <a href="#" className="nav-links text-2xl font-bold "> Home </a>
                    <a href="#" className="nav-links text-2xl font-bold "> About  </a>
                    <a href="#" className="nav-links text-2xl font-bold "> Experiences </a>
                    <a href="#" className="nav-links text-2xl font-bold "> Works </a>
                    <a href="#" className="nav-links text-2xl font-bold "> Contact </a>
                </nav>
            </div>
            <div> 
                <button className="btn"> Stay In Touch </button>
            </div>
        </div>
    )
}