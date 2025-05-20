import Logo from '@/assets/Images/Logo.png';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import { SelectedPage } from '@/Components/Shared/Types';
import { useAuth } from '../../contexts/AuthContext'; // ✅ correct import

const Header = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const flexBetween = 'flex items-center justify-between';

  const { logout, user } = useAuth(); // ✅ Now this is valid — inside the component

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`${flexBetween} ${
        isTopOfPage ? '' : 'bg-[#84ceff]'
      } transition fixed top-0 z-30 w-full p-5 md:px-16`}
    >
      <img className="w-10 sm:w-20" src={Logo} alt="Logo" />
      <NavBar
        flexBetween={flexBetween}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {user && (
        <button onClick={logout} className="text-sm underline">
          Log Out
        </button>
      )}
    </div>
  );
};

export default Header;
