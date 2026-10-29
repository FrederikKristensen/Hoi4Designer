import './App.css';
import Select from 'react-select';
import light_chassis from './data/light_chassis';
import engines from './data/tank_engines';
import suspension from './data/tank_suspension';
import armor from './data/tank_armor';
import turret from './data/tank_turret';

function App() {
  return (
    <>
      <div className="grid grid-rows-3 bg-gray-300 m-4 p-2 rounded-md">
        <div className="grid grid-cols-6">
          <div className="turret">
            <Select
              options={turret}
              formatOptionLabel={(a) => (
                <div className="Turret-option">
                  <img src={a.image} alt="" />
                </div>
              )}
            />
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className="Chassi">
          <Select
            options={light_chassis}
            formatOptionLabel={(a) => (
              <div className="Chassi-option">
                <img src={a.image} alt="" />
              </div>
            )}
          />
        </div>
        <div className="grid grid-cols-5">
          <div className="Suspension">
            <Select
              options={suspension}
              formatOptionLabel={(a) => (
                <div className="Suspension-option">
                  <img src={a.image} alt="" />
                </div>
              )}
            />
          </div>
          <div className="Armor">
            <Select
              options={armor}
              formatOptionLabel={(a) => (
                <div className="Armor-option">
                  <img src={a.image} alt="" />
                </div>
              )}
            />
          </div>
          <div className="Engine">
            <Select
              options={engines}
              formatOptionLabel={(a) => (
                <div className="Engine-option">
                  <img src={a.image} alt="" />
                </div>
              )}
            />
          </div>
          <div className="Engine ticks">Engine 0</div>
          <div className="Armor ticks">Armor 0</div>
        </div>
      </div>
    </>
  );
}

export default App;
