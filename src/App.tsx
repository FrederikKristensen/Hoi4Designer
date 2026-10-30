import './App.css';
import Select from 'react-select';
import light_chassis from './data/light_chassis';
import engines from './data/tank_engines';
import suspensions from './data/tank_suspensions';
import armor from './data/tank_armor';
import turrets from './data/tank_turrets';
import armanents from './data/tank_armanents';

function App() {
  return (
    <>
      <div className="grid grid-rows-3 bg-gray-300 m-6 p-2 rounded-md">
        <div className="grid grid-cols-6 gap-x-1 p-1">
          <div className="turret">
            <Select
              unstyled
              classNames={{
                control: () => 'bg-slate-300 border border-gray h-15 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              options={turrets}
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-15" alt="" />
                </div>
              )}
            />
          </div>
          <div className="Armanent">
            <Select
              unstyled
              classNames={{
                control: () => 'bg-slate-300 border border-gray h-15 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              options={armanents}
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-15" alt="" />
                </div>
              )}
            />
          </div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className="Chassis p-1">
          <Select
            unstyled
            classNames={{
              control: () => 'bg-slate-300 border border-gray h-15 p-1',
              menu: () => 'bg-slate-200 flex justify-center',
              option: () => 'p-4',
              input: () => 'caret-transparent',
            }}
            components={{
              DropdownIndicator: () => null,
            }}
            options={light_chassis}
            formatOptionLabel={(a) => (
              <div className="flex justify-center">
                <img src={a.image} className="max-h-15" alt="" />
              </div>
            )}
          />
        </div>
        <div className="grid grid-cols-5 gap-x-1 p-1">
          <div className="Suspension">
            <Select
              unstyled
              classNames={{
                control: () => 'bg-slate-300 border border-gray h-12 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              options={suspensions}
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-12" alt="" />
                </div>
              )}
            />
          </div>
          <div className="Armor">
            <Select
              unstyled
              classNames={{
                control: () => 'bg-slate-300 border border-gray h-12 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              options={armor}
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-12" alt="" />
                </div>
              )}
            />
          </div>
          <div className="Engine">
            <Select
              unstyled
              classNames={{
                control: () => 'bg-slate-300 border border-gray h-12 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              options={engines}
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-12" alt="" />
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
