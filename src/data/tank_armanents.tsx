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
  // Small armanents
  {
    value: 'Heavy machine gun',
    image: Images['../assets/tanks/armanents/tank_heavy_machine_gun.png'],
    size: ['Small'],
  },
  {
    value: 'Automatic cannon',
    image: Images['../assets/tanks/armanents/tank_auto_cannon.png'],
    size: ['Small'],
  },
  {
    value: 'Improved automatic cannon',
    image: Images['../assets/tanks/armanents/tank_auto_cannon_2.png'],
    size: ['Small'],
  },
  {
    value: 'Small cannon',
    image: Images['../assets/tanks/armanents/tank_small_cannon.png'],
    size: ['Small'],
  },
  {
    value: 'Improved small cannon',
    image: Images['../assets/tanks/armanents/tank_small_cannon_2.png'],
    size: ['Small'],
  },
  {
    value: 'Close support',
    image: Images['../assets/tanks/armanents/tank_close_support_gun.png'],
    size: ['Small'],
  },
  {
    value: 'Basic high-velocity cannon',
    image: Images['../assets/tanks/armanents/tank_high_velocity_cannon.png'],
    size: ['Small'],
  },
  {
    value: 'Flamethrower',
    image: Images['../assets/tanks/armanents/tank_flamethrower.png'],
    size: ['Small'],
  },
  {
    value: 'Advanced flamethrower',
    image: Images['../assets/tanks/armanents/tank_flamethrower_2.png'],
    size: ['Small'],
  },
  // Medium armanents
  {
    value: 'Medium cannon',
    image: Images['../assets/tanks/armanents/tank_medium_cannon.png'],
    size: ['Medium'],
  },
  {
    value: 'Improved medium cannon',
    image: Images['../assets/tanks/armanents/tank_medium_cannon_2.png'],
    size: ['Medium'],
  },
  {
    value: 'Medium howitzer',
    image: Images['../assets/tanks/armanents/tank_medium_howitzer.png'],
    size: ['Medium'],
  },
  {
    value: 'Improved medium howitzer',
    image: Images['../assets/tanks/armanents/tank_medium_howitzer_2.png'],
    size: ['Medium'],
  },
  {
    value: 'Improved high-velocity cannon',
    image: Images['../assets/tanks/armanents/tank_high_velocity_cannon_2.png'],
    size: ['Medium'],
  },
  // Heavy armanents
  {
    value: 'Advanced high-velocity cannon',
    image: Images['../assets/tanks/armanents/tank_high_velocity_cannon_3.png'],
    size: ['Heavy'],
  },
  {
    value: 'Basic heavy cannon',
    image: Images['../assets/tanks/armanents/tank_heavy_cannon.png'],
    size: ['Heavy'],
  },
  {
    value: 'Improved heavy cannon',
    image: Images['../assets/tanks/armanents/tank_heavy_cannon_2.png'],
    size: ['Heavy'],
  },
  {
    value: 'Advanced heavy cannon',
    image: Images['../assets/tanks/armanents/tank_heavy_cannon_3.png'],
    size: ['Heavy'],
  },
  {
    value: 'Heavy howitzer',
    image: Images['../assets/tanks/armanents/tank_heavy_howitzer.png'],
    size: ['Heavy'],
  },
];

export default tank_armanents;
