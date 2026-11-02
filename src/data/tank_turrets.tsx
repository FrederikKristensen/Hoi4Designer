const Images = import.meta.glob('../assets/tanks/turrets/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

export type Turrets = {
  value: string;
  image: string;
  armsize: string[];
  chassis: string[];
};

const tank_turrets: Turrets[] = [
  // Light turrets
  {
    value: 'Light fixed',
    image: Images['../assets/tanks/turrets/tank_light_fixed_superstructure.png'],
    armsize: ['Small', 'Medium'],
    chassis: ['Light', 'Medium', 'Heavy'],
  },
  {
    value: 'Light oneman',
    image: Images['../assets/tanks/turrets/tank_light_one_man_turret.png'],
    armsize: ['Small'],
    chassis: ['Light', 'Medium', 'Heavy'],
  },
  {
    value: 'Light twoman',
    image: Images['../assets/tanks/turrets/tank_light_two_man_turret.png'],
    armsize: ['Small'],
    chassis: ['Light', 'Medium', 'Heavy'],
  },
  {
    value: 'Light threeman',
    image: Images['../assets/tanks/turrets/tank_light_three_man_turret.png'],
    armsize: ['Small'],
    chassis: ['Light', 'Medium', 'Heavy'],
  },
  // Medium turrets
  {
    value: 'Medium fixed',
    image: Images['../assets/tanks/turrets/tank_medium_fixed_superstructure.png'],
    armsize: ['Small', 'Medium', 'Heavy'],
    chassis: ['Medium', 'Heavy'],
  },
  {
    value: 'Medium oneman',
    image: Images['../assets/tanks/turrets/tank_medium_one_man_turret.png'],
    armsize: ['Small', 'Medium'],
    chassis: ['Medium', 'Heavy'],
  },
  {
    value: 'Medium twoman',
    image: Images['../assets/tanks/turrets/tank_medium_two_man_turret.png'],
    armsize: ['Small', 'Medium'],
    chassis: ['Medium', 'Heavy'],
  },
  {
    value: 'Medium threeman',
    image: Images['../assets/tanks/turrets/tank_medium_three_man_turret.png'],
    armsize: ['Small', 'Medium'],
    chassis: ['Medium', 'Heavy'],
  },
  // Heavy turrets
  {
    value: 'Heavy fixed',
    image: Images['../assets/tanks/turrets/tank_heavy_fixed_superstructure.png'],
    armsize: ['Heavy'],
    chassis: ['Heavy'],
  },
  {
    value: 'Heavy twoman',
    image: Images['../assets/tanks/turrets/tank_heavy_two_man_turret.png'],
    armsize: ['Heavy'],
    chassis: ['Heavy'],
  },
  {
    value: 'Heavy threeman',
    image: Images['../assets/tanks/turrets/tank_heavy_three_man_turret.png'],
    armsize: ['Heavy'],
    chassis: ['Heavy'],
  },
];

export default tank_turrets;
