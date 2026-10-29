const Images = import.meta.glob('../assets/tanks/suspension/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const tank_suspension = [
  {
    value: '1',
    image: Images['../assets/tanks/suspension/tank_bogie_suspension.png'],
  },
  {
    value: '2',
    image: Images['../assets/tanks/suspension/tank_christie_suspension.png'],
  },
  {
    value: '3',
    image: Images['../assets/tanks/suspension/tank_interleaved_roadwheels.png'],
  },
  {
    value: '4',
    image: Images['../assets/tanks/suspension/tank_torsion_bar.png'],
  },
  {
    value: '5',
    image: Images['../assets/tanks/suspension/tank_half_track_suspension.png'],
  },
  {
    value: '6',
    image: Images['../assets/tanks/suspension/tank_wheeled_suspension.png'],
  },
];

export default tank_suspension;
