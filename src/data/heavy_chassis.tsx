const Images = import.meta.glob('../assets/tanks/heavy/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const heavy_chassis = [
  {
    value: 'Inter war heavy',
    image: Images['../assets/tanks/heavy/inter_war_heavy_tank_chassis.png'],
  },
  {
    value: 'Basic heavy',
    image: Images['../assets/tanks/heavy/basic_heavy_tank_chassis.png'],
  },
  {
    value: 'Improved heavy',
    image: Images['../assets/tanks/heavy/improved_heavy_tank_chassis.png'],
  },
  {
    value: 'Advanced heavy',
    image: Images['../assets/tanks/heavy/advanced_heavy_tank_chassis.png'],
  },
];

export default heavy_chassis;
