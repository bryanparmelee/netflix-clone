import { useState
 } from 'react';
import logo from '../../assets/netflix-logo-png-2584.png';
import notification from '../../assets/notification-24.png';
import search from '../../assets/search-30.png';
import userIcon from '../../assets/user-24.png';
import down from '../../assets/down-16.png';

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const clickHandler = () => setClicked(!clicked);

    return (
        <div className='w-full h-10 absolute top-0 flex items-center justify-between px-8 z-20 bg-black/50'>
            <div className='flex justify-evenly items-center relative'>
                <img 
                    alt='logo'
                    src={logo}
                    className='w-16 md:w-20 mr-8 cursor-pointer'
                />
                <div className='hidden text-white text-[0.5rem] md:text-xs font-light sm:flex items-center justify-evenly gap-4 whitespace-nowrap'>
                    <span className='cursor-pointer'>Home</span>
                    <span className='cursor-pointer'>TV Shows</span>
                    <span className='cursor-pointer'>Movies</span>
                    <span className='cursor-pointer'>New & Popular</span>
                    <span className='cursor-pointer'>My List</span>
                    <span className='cursor-pointer'>Browse by Language</span>
                </div>
                <div className='sm:hidden text-white group/nav'>
                    <div
                        onClick={clickHandler} 
                        className='flex items-center gap-1 cursor-pointer'>
                        <span className=' text-xs'>Browse</span>
                        <img
                            alt='browse' 
                            src={down} 
                        />
                    </div>
                    {clicked && 
                        <div className='group-hover/nav:flex flex w-60 absolute top-10 -left-5      flex-col bg-zinc-900/90 border-t-2 items-center text-xs'>
                            <div className='p-4 cursor-pointer w-full hover:bg-zinc-700/90 text-center transition easy-in-out duration-200'>
                                <span className=''>Home</span>
                            </div>
                            <div className='p-4 cursor-pointer w-full hover:bg-zinc-700/90 text-center transition easy-in-out duration-200 delay-75'>
                                <span className='cursor-pointer'>TV Shows</span>
                            </div>
                            <div className='p-4 cursor-pointer w-full hover:bg-zinc-700/90 text-center transition easy-in-out duration-200 delay-75'>
                                <span className='cursor-pointer'>Movies</span>
                            </div>
                            <div className='p-4 cursor-pointer w-full hover:bg-zinc-700/90 text-center transition easy-in-out duration-200 delay-75'>
                                <span className='cursor-pointer'>New & Popular</span>
                            </div>
                            <div className='p-4 cursor-pointer w-full hover:bg-zinc-700/90 text-center transition easy-in-out duration-200 delay-75'>
                                <span className='cursor-pointer'>My List</span>
                            </div>
                            <div className='p-4 cursor-pointer w-full hover:bg-zinc-700/90 text-center transition easy-in-out duration-200 delay-75'>
                                <span className='cursor-pointer'>Browse by Language</span>
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
            <div className='text-white text-xs font-light flex justify-evenly items-center gap-4'>
                <img 
                    alt='search'
                    src={search}
                    className='h-4 cursor-pointer'
                />
                <span className='cursor-pointer hidden md:block'>DVD</span>
                <img 
                    alt='notification'
                    src={notification}
                    className='h-4 cursor-pointer'
                />
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img 
                        alt='user-icon'
                        src={userIcon}
                        className='h-5'
                    />
                    <img 
                        alt='user-more'
                        src={down}
                        className='h-2'
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar;