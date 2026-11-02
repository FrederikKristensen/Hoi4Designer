const Images = import.meta.glob('../assets/tanks/medium/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const medium_chassis = [
  {
    value: 'Inter war medium',
    image: Images['../assets/tanks/medium/inter_war_medium_tank_chassis.png'],
  },
  {
    value: 'Basic medium',
    image: Images['../assets/tanks/medium/basic_medium_tank_chassis.png'],
  },
  {
    value: 'Improved medium',
    image: Images['../assets/tanks/medium/improved_medium_tank_chassis.png'],
  },
  {
    value: 'Advanced medium',
    image: Images['../assets/tanks/medium/advanced_medium_tank_chassis.png'],
  },
];

export default medium_chassis;
