const Images = import.meta.glob('../assets/tanks/turrets/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

export type Turrets = {
  value: string;
  image: string;
  armsize: string[];
};

const tank_turrets: Turrets[] = [
  {
    value: 'Fixed',
    image: Images['../assets/tanks/turrets/tank_light_fixed_superstructure.png'],
    armsize: ['Small', 'Medium'],
  },
  {
    value: 'Oneman',
    image: Images['../assets/tanks/turrets/tank_light_one_man_turret.png'],
    armsize: ['Small'],
  },
  {
    value: 'Twoman',
    image: Images['../assets/tanks/turrets/tank_light_two_man_turret.png'],
    armsize: ['Small'],
  },
  {
    value: 'Threeman',
    image: Images['../assets/tanks/turrets/tank_light_three_man_turret.png'],
    armsize: ['Small'],
  },
];

export default tank_turrets;
