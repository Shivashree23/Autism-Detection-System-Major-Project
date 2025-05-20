import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { SelectedPage } from '@/Components/Shared/Types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@/Hooks/useMediaQuery';
import Links from './Links';
import Button from '../UI/Button';

type Props = {
  flexBetween: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ flexBetween, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 900px)');

  return (
    <nav>
      {isAboveMediumScreens ? (
        <div className={`${flexBetween} lg:gap-28 gap-20`}>
          <div className={`${flexBetween} gap-16`}>
            <Links
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <Link to="/login">
            <Button>Log In</Button>
          </Link>
        </div>
      ) : (
        <>
          <button onClick={() => setIsMenuToggled((prev) => !prev)}>
            <Bars3Icon className="h-8 w-8" />
          </button>

          {/* MOBILE MENU MODAL */}
          {isMenuToggled && (
            <div className="fixed right-0 top-0 z-40 h-80 rounded-es-3xl w-[175px] md:w-[300px] bg-secondary drop-shadow-2xl">
              <div className="flex justify-end p-5 md:pr-16 sm:pt-10">
                <button onClick={() => setIsMenuToggled(false)}>
                  <XMarkIcon className="h-10 w-10" />
                </button>
              </div>

              <div className="ml-[20%] flex flex-col items-start gap-5 text-2xl">
                <Links
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link to="/login">
                  <Button>Log In</Button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default NavBar;