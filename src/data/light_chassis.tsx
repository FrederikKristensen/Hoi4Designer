const Images = import.meta.glob('../assets/tanks/light/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const light_chassis = [
  {
    value: 'Inter war light',
    image: Images['../assets/tanks/light/inter_war_light_tank_chassis.png'],
  },
  {
    value: 'Basic light',
    image: Images['../assets/tanks/light/basic_light_tank_chassis.png'],
  },
  {
    value: 'Improved light',
    image: Images['../assets/tanks/light/improved_light_tank_chassis.png'],
  },
  {
    value: 'Advanced light',
    image: Images['../assets/tanks/light/advanced_light_tank_chassis.png'],
  },
];

export default light_chassis;
