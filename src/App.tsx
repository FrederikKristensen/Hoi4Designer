import './App.css';
import Select from 'react-select';
import light_chassis from './data/light_chassis';
import engines from './data/tank_engines';

function App() {
  return (
    <>
      <div className="grid grid-rows-3 bg-gray-300 m-4 p-2 rounded-md">
        <div className="grid grid-cols-6">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div>
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
          <div>1</div>
          <div>2</div>
          <div className="Engines">
            <Select
              options={engines}
              formatOptionLabel={(a) => (
                <div className="Engine-option">
                  <img src={a.image} alt="" />
                </div>
              )}
            />
          </div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </>
  );
}

export default App;
