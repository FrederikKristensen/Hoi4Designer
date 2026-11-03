import './App.css';
import Select from 'react-select';
import light_tank from './data/light_chassis';
import engines from './data/tank_engines';
import suspensions from './data/tank_suspensions';
import armor from './data/tank_armor';
import turrets, { type Turrets } from './data/tank_turrets';
import armanents, { type Armanent } from './data/tank_armanents';
import { useState } from 'react';
import NavBar from './components/NavBar';
import medium_tank from './data/medium_chassis';
import heavy_tank from './data/heavy_chassis';
import specials from './data/tank_specials';

export type tankOptions = 'light_tank' | 'medium_tank' | 'heavy_tank';

function App() {
  // Current selected options
  const [selectedTurret, setSelectedturret] = useState<Turrets | null>(null);

  // Stores if we click Tank, Plane or Ship
  const [mainActive, setMainActive] = useState<string>('Tank');
  // Stores the subsection of the selected main
  const [subActive, setSubActive] = useState<tankOptions>('light_tank');

  const chassiOptions = { light_tank, medium_tank, heavy_tank };

  return (
    <>
      <NavBar
        mainActive={mainActive}
        setMainActive={setMainActive}
        subActive={subActive}
        setSubActive={setSubActive}
      />
      <div className="grid grid-rows-auto bg-gray-300 m-6 p-2 rounded-md">
        <div className="grid grid-cols-6 gap-x-1 p-1">
          <div className="turret">
            <Select<Turrets>
              unstyled
              classNames={{
                control: () => 'bg-mist-700/70 border border-gray h-15 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              placeholder=""
              options={turrets}
              onChange={(option) => {
                setSelectedturret(option);
              }}
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-15" alt="" />
                </div>
              )}
            />
          </div>
          <div className="Armanent">
            <Select<Armanent>
              unstyled
              classNames={{
                control: () => 'bg-mist-700/70 border border-gray h-15 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                input: () => 'caret-transparent',
                option: (state) => (state.isDisabled ? 'border border-red-600 p-4' : 'p-4'),
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              placeholder=""
              options={armanents}
              isOptionDisabled={(option) =>
                !option.size.some((size) => selectedTurret?.armsize.includes(size))
              }
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-15" alt="" />
                </div>
              )}
            />
          </div>
          <div className="Special 1">
            <Select
              unstyled
              classNames={{
                control: () => 'bg-mist-700/70 border border-gray h-15 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              options={specials}
              placeholder=""
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-15" alt="" />
                </div>
              )}
            />
          </div>
          <div className="Special 2">
            <Select
              unstyled
              classNames={{
                control: () => 'bg-mist-700/70 border border-gray h-15 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              options={specials}
              placeholder=""
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-15" alt="" />
                </div>
              )}
            />
          </div>
          <div className="Special 3">
            <Select
              unstyled
              classNames={{
                control: () => 'bg-mist-700/70 border border-gray h-15 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              options={specials}
              placeholder=""
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-15" alt="" />
                </div>
              )}
            />
          </div>
          <div className="Special 4">
            <Select
              unstyled
              classNames={{
                control: () => 'bg-mist-700/70 border border-gray h-15 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              options={specials}
              placeholder=""
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-15" alt="" />
                </div>
              )}
            />
          </div>
        </div>
        <div className="Chassis p-1 m-0">
          <Select
            unstyled
            classNames={{
              control: () => 'bg-mist-700/70 border border-gray h-18 p-1',
              menu: () => 'bg-slate-200 flex justify-center',
              option: () => 'p-4',
              input: () => 'caret-transparent',
            }}
            components={{
              DropdownIndicator: () => null,
            }}
            placeholder=""
            options={chassiOptions[subActive] ?? []}
            formatOptionLabel={(a) => (
              <div className="flex justify-center">
                <img src={a.image} className="max-h-18" alt="" />
              </div>
            )}
          />
        </div>
        <div className="grid grid-cols-5 gap-x-1 p-1">
          <div className="Suspension">
            <Select
              unstyled
              classNames={{
                control: () => 'bg-mist-700/70 border border-gray h-15 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              options={suspensions}
              placeholder=""
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-15" alt="" />
                </div>
              )}
            />
          </div>
          <div className="Armor">
            <Select
              unstyled
              classNames={{
                control: () => 'bg-mist-700/70 border border-gray h-15 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              options={armor}
              placeholder=""
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-15" alt="" />
                </div>
              )}
            />
          </div>
          <div className="Engine">
            <Select
              unstyled
              classNames={{
                control: () => 'bg-mist-700/70 border border-gray h-15 p-1',
                menu: () => 'bg-slate-200 flex justify-center',
                option: () => 'p-4',
                input: () => 'caret-transparent',
              }}
              components={{
                DropdownIndicator: () => null,
              }}
              options={engines}
              placeholder=""
              formatOptionLabel={(a) => (
                <div className="flex justify-center">
                  <img src={a.image} className="max-h-15" alt="" />
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
