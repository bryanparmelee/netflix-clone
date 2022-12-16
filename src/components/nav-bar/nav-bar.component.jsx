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
                    className='w-20 mr-8 cursor-pointer'
                />
                <div className='text-white text-xs font-bold flex items-center justify-evenly gap-4'>
                    <span>Home</span>
                    <span>TV Shows</span>
                    <span>Movies</span>
                    <span>New & Popular</span>
                    <span>My List</span>
                    <span>Browse by Language</span>
                </div>
            </div>
            <div className='text-white text-xs font-bold flex justify-evenly items-center gap-4'>
                <img 
                    alt='search'
                    src={search}
                    className='h-4'
                />
                <span>DVD</span>
                <img 
                    alt='notification'
                    src={notification}
                    className='h-4'
                />
                <img 
                    alt='user-icon'
                    src={userIcon}
                    className='h-4'
                />
            </div>
        </div>
    )
}

export default NavBar;