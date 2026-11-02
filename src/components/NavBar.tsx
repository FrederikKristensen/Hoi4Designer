import type { tankOptions } from '../App';

interface NavBarProps {
  mainActive: string;
  setMainActive: React.Dispatch<React.SetStateAction<string>>;
  subActive: tankOptions;
  setSubActive: React.Dispatch<React.SetStateAction<tankOptions>>;
}

const NavBar = ({ mainActive, setMainActive, setSubActive }: NavBarProps) => {
  return (
    <div>
      <nav>
        <button onClick={() => setMainActive('Tank')}>Tank</button>
        <button>Plane</button>
        <button>Ship</button>
      </nav>

      <div>
        {mainActive === 'Tank' && (
          <>
            <button onClick={() => setSubActive('light_tank')}>Light</button>
            <button onClick={() => setSubActive('medium_tank')}>Medium</button>
            <button onClick={() => setSubActive('heavy_tank')}>Heavy</button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
