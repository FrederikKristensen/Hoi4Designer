const Images = import.meta.glob('../assets/tanks/turrets/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const tank_turrets = [
  {
    value: '1',
    image: Images['../assets/tanks/turrets/tank_light_fixed_superstructure.png'],
  },
  {
    value: '2',
    image: Images['../assets/tanks/turrets/tank_light_one_man_turret.png'],
  },
  {
    value: '3',
    image: Images['../assets/tanks/turrets/tank_light_two_man_turret.png'],
  },
  {
    value: '4',
    image: Images['../assets/tanks/turrets/tank_light_three_man_turret.png'],
  },
];

export default tank_turrets;
