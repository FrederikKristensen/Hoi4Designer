interface TicksProps {
  engineTicks: number;
  setEngineTicks: React.Dispatch<React.SetStateAction<number>>;
  armorTicks: number;
  setArmorTicks: React.Dispatch<React.SetStateAction<number>>;
}

const Ticks = ({ engineTicks, setEngineTicks, armorTicks, setArmorTicks }: TicksProps) => {
  return (
    <>
      <div className="grid grid-cols-2 px-3 gap-2">
        <div className="grid grid-rows-2">
          <div className="flex justify-center text-gray-200">Engine</div>
          <div className="grid grid-cols-3 gap-1">
            <button
              className="border-2 rounded-full"
              onClick={() => {
                setEngineTicks((e) => e - 1);
              }}
            >
              -
            </button>
            <p className="flex justify-center text-gray-200">{engineTicks}</p>
            <button
              className="border-2 rounded-full"
              onClick={() => {
                setEngineTicks((e) => e + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="flex justify-center text-gray-200">Armor</div>
          <div className="grid grid-cols-3 gap-1">
            <button
              className="border-2 rounded-full"
              onClick={() => {
                setArmorTicks((a) => a - 1);
              }}
            >
              -
            </button>
            <p className="flex justify-center text-gray-200">{armorTicks}</p>
            <button
              className="border-2 rounded-full"
              onClick={() => {
                setArmorTicks((a) => a + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticks;
