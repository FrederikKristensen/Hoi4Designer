interface TicksProps {
  engineTicks: number;
  setEngineTicks: React.Dispatch<React.SetStateAction<number>>;
  armorTicks: number;
  setArmorTicks: React.Dispatch<React.SetStateAction<number>>;
}

const Ticks = ({ engineTicks, setEngineTicks, armorTicks, setArmorTicks }: TicksProps) => {
  return (
    <>
      <div>
        <div>Engine</div>
        <div>
          <button
            onClick={() => {
              setEngineTicks((e) => e - 1);
            }}
          >
            -
          </button>
          <p>{engineTicks}</p>
          <button
            onClick={() => {
              setEngineTicks((e) => e + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <div>Armor</div>
        <div>
          <button
            onClick={() => {
              setEngineTicks((a) => a - 1);
            }}
          >
            -
          </button>
          <p>{armorTicks}</p>
          <button
            onClick={() => {
              setArmorTicks((a) => a + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Ticks;
