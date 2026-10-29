const Images = import.meta.glob('../assets/tanks/armor/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const tank_armor = [
  {
    value: '1',
    image: Images['../assets/tanks/armor/tank_riveted_armor.png'],
  },
  {
    value: '2',
    image: Images['../assets/tanks/armor/tank_cast_armor.png'],
  },
  {
    value: '3',
    image: Images['../assets/tanks/armor/tank_welded_armor.png'],
  },
];

export default tank_armor;
