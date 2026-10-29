const Images = import.meta.glob('../assets/tanks/engines/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const tank_engines = [
  {
    value: '1',
    image: Images['../assets/tanks/engines/tank_diesel_engine.png'],
  },
  {
    value: '2',
    image: Images['../assets/tanks/engines/tank_gas_turbine_engine.png'],
  },
  {
    value: '3',
    image: Images['../assets/tanks/engines/tank_gasoline_engine.png'],
  },
  {
    value: '4',
    image: Images['../assets/tanks/engines/tank_petrol_electric_engine.png'],
  },
];

export default tank_engines;
