const Images = import.meta.glob('../assets/tanks/armanents/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

export type Armanent = {
  value: string;
  image: string;
  size: string[];
};

const tank_armanents: Armanent[] = [
  {
    value: '1',
    image: Images['../assets/tanks/armanents/tank_heavy_machine_gun.png'],
    size: ['Medium'],
  },
  {
    value: '2',
    image: Images['../assets/tanks/armanents/tank_auto_cannon.png'],
    size: ['Small'],
  },
  {
    value: '3',
    image: Images['../assets/tanks/armanents/tank_auto_cannon_2.png'],
    size: ['Small'],
  },
  {
    value: '4',
    image: Images['../assets/tanks/armanents/tank_small_cannon.png'],
    size: ['Small'],
  },
  {
    value: '5',
    image: Images['../assets/tanks/armanents/tank_small_cannon_2.png'],
    size: ['Small'],
  },
  {
    value: '6',
    image: Images['../assets/tanks/armanents/tank_close_support_gun.png'],
    size: ['Small'],
  },
  {
    value: '7',
    image: Images['../assets/tanks/armanents/tank_flamethrower.png'],
    size: ['Small'],
  },
  {
    value: '8',
    image: Images['../assets/tanks/armanents/tank_flamethrower_2.png'],
    size: ['Small'],
  },
];

export default tank_armanents;
