import type { tankOptions } from '../App';

interface NavBarProps {
  mainActive: string;
  setMainActive: React.Dispatch<React.SetStateAction<string>>;
  subActive: tankOptions;
  setSubActive: React.Dispatch<React.SetStateAction<tankOptions>>;
}

const NavBar = ({ mainActive, setMainActive, setSubActive }: NavBarProps) => {
  return (
    <>
      <div className="p-6 bg-gray-600">
        <nav className="flex justify-center gap-4 mt-6">
          <button
            className="hover:text-emerald-700 border-2 rounded-full p-2 bg-gray-400"
            onClick={() => setMainActive('Tank')}
          >
            Tank
          </button>
          <button
            className="hover:text-emerald-700 border-2 rounded-full p-2 bg-gray-400"
            onClick={() => setMainActive('Plane')}
          >
            Plane
          </button>
          <button
            className="hover:text-emerald-700 border-2 rounded-full p-2 bg-gray-400"
            onClick={() => setMainActive('Ship')}
          >
            Ship
          </button>
        </nav>

        <div className="flex justify-center gap-4 mt-1">
          {mainActive === 'Tank' && (
            <>
              <button
                className="hover:text-emerald-700 bg-gray-400 border-2 rounded-full p-2"
                onClick={() => setSubActive('light_tank')}
              >
                Light
              </button>
              <button
                className="hover:text-emerald-700 bg-gray-400 border-2 rounded-full p-2"
                onClick={() => setSubActive('medium_tank')}
              >
                Medium
              </button>
              <button
                className="hover:text-emerald-700 bg-gray-400 border-2 rounded-full p-2"
                onClick={() => setSubActive('heavy_tank')}
              >
                Heavy
              </button>
            </>
          )}
          {mainActive === 'Plane' && (
            <>
              <button className="hover:text-emerald-700 bg-gray-400 border-2 rounded-full p-2">
                Small
              </button>
              <button className="hover:text-emerald-700 bg-gray-400 border-2 rounded-full p-2">
                Medium
              </button>
              <button className="hover:text-emerald-700 bg-gray-400 border-2 rounded-full p-2">
                Large
              </button>
            </>
          )}
          {mainActive === 'Ship' && (
            <div className="grid grid-cols-3 gap-1">
              <button className="hover:text-emerald-700 bg-gray-400 border-2 rounded-full p-2">
                Destroyer
              </button>
              <button className="hover:text-emerald-700 bg-gray-400 border-2 rounded-full p-2">
                Light cruiser
              </button>
              <button className="hover:text-emerald-700 bg-gray-400 border-2 rounded-full p-2">
                Heavy cruiser
              </button>
              <button className="hover:text-emerald-700 bg-gray-400 border-2 rounded-full p-2">
                Submarine
              </button>
              <button className="hover:text-emerald-700 bg-gray-400 border-2 rounded-full p-2">
                Battleship
              </button>
              <button className="hover:text-emerald-700 bg-gray-400 border-2 rounded-full p-2">
                Carrier
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
