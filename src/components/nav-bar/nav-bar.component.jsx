import logo from '../../assets/netflix-logo-png-2584.png';
import notification from '../../assets/notification-24.png';
import search from '../../assets/search-30.png';
import userIcon from '../../assets/user-24.png';

const NavBar = () => {
    return (
        <div className='w-full h-10 absolute top-0 flex items-center justify-between px-8 z-20 bg-black/50'>
            <div className='flex justify-evenly'>
                <img 
                    alt='logo'
                    src={logo}
                    className='w-16 md:w-20 mr-8 cursor-pointer'
                />
                <div className='text-white text-[0.5rem] md:text-xs font-bold flex items-center justify-evenly gap-4 whitespace-nowrap'>
                    <span className='cursor-pointer'>Home</span>
                    <span className='cursor-pointer'>TV Shows</span>
                    <span className='cursor-pointer'>Movies</span>
                    <span className='cursor-pointer'>New & Popular</span>
                    <span className='cursor-pointer'>My List</span>
                    <span className='cursor-pointer'>Browse by Language</span>
                </div>
            </div>
            <div className='text-white text-xs font-bold flex justify-evenly items-center gap-4'>
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
                <img 
                    alt='user-icon'
                    src={userIcon}
                    className='h-4 cursor-pointer'
                />
            </div>
        </div>
    )
}

export default NavBar;