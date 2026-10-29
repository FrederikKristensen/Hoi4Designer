const Images = import.meta.glob('../assets/tanks/suspensions/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const tank_suspensions = [
  {
    value: '1',
    image: Images['../assets/tanks/suspensions/tank_bogie_suspension.png'],
  },
  {
    value: '2',
    image: Images['../assets/tanks/suspensions/tank_christie_suspension.png'],
  },
  {
    value: '3',
    image: Images['../assets/tanks/suspensions/tank_interleaved_roadwheels.png'],
  },
  {
    value: '4',
    image: Images['../assets/tanks/suspensions/tank_torsion_bar.png'],
  },
  {
    value: '5',
    image: Images['../assets/tanks/suspensions/tank_half_track_suspension.png'],
  },
  {
    value: '6',
    image: Images['../assets/tanks/suspensions/tank_wheeled_suspension.png'],
  },
];

export default tank_suspensions;
