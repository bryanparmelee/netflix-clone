const year = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="w-full bg-zinc-900 mt-4 p-8 flex flex-col justify-center items-center text-xs">
            <span className="text-white">&copy; {year} <a className="hover:text-red-500 hover:underline" href="https://bryanparmelee.dev/" target="blank">Bryan Parmelee</a></span>
            <span className="text-red-500 italic text-center">This site is part of a developer portfolio and is in no way affiliated with Netflix.</span>
            <span className="text-red-500 italic text-center">Movie data courtesy of <a className="hover:text-white hover:underline" href="https://www.themoviedb.org/" target="blank">the Movie Datbase</a>.</span>
        </div>
    )
}

export default Footer;