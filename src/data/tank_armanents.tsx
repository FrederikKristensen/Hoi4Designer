const Images = import.meta.glob('../assets/tanks/armanents/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const tank_armanents = [
  {
    value: '1',
    image: Images['../assets/tanks/armanents/tank_heavy_machine_gun.png'],
  },
  {
    value: '2',
    image: Images['../assets/tanks/armanents/tank_auto_cannon.png'],
  },
  {
    value: '3',
    image: Images['../assets/tanks/armanents/tank_auto_cannon_2.png'],
  },
  {
    value: '4',
    image: Images['../assets/tanks/armanents/tank_small_cannon.png'],
  },
  {
    value: '5',
    image: Images['../assets/tanks/armanents/tank_small_cannon_2.png'],
  },
  {
    value: '6',
    image: Images['../assets/tanks/armanents/tank_close_support_gun.png'],
  },
  {
    value: '7',
    image: Images['../assets/tanks/armanents/tank_high_velocity_cannon.png'],
  },
  {
    value: '8',
    image: Images['../assets/tanks/armanents/tank_flamethrower.png'],
  },
  {
    value: '9',
    image: Images['../assets/tanks/armanents/tank_flamethrower_2.png'],
  },
];

export default tank_armanents;
