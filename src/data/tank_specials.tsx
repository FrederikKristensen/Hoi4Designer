const Images = import.meta.glob('../assets/tanks/specials/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

const tank_specials = [
  // Secondary turrets max L=1 M=2 H=4
  {
    value: 'Heavy machine gun',
    image: Images['../assets/tanks/specials/tank_secondary_turret_hmg.png'],
  },
  {
    value: 'Small cannon',
    image: Images['../assets/tanks/specials/tank_secondary_turret_small_cannon.png'],
  },
  // Radios max 1
  {
    value: 'Basic radio',
    image: Images['../assets/tanks/specials/tank_module_radio_1.png'],
  },
  {
    value: 'Improved radio',
    image: Images['../assets/tanks/specials/tank_module_radio_2.png'],
  },
  {
    value: 'Advanced radio',
    image: Images['../assets/tanks/specials/tank_module_radio_3.png'],
  },
  // Addons
  {
    value: 'Additional machineguns',
    image: Images['../assets/tanks/specials/tank_additional_machine_guns.png'],
  },
  {
    value: 'Extra ammunition storage',
    image: Images['../assets/tanks/specials/tank_extra_ammo_storage.png'],
  },
  {
    value: 'Fuel drum',
    image: Images['../assets/tanks/specials/tank_fuel_drum.png'],
  },
  {
    value: 'Smoke launchers',
    image: Images['../assets/tanks/specials/tank_smoke_launcher.png'],
  },
  // Special addons Max 1 of each
  {
    value: 'Amphibious drive',
    image: Images['../assets/tanks/specials/tank_amphibious_drive.png'],
  },
  {
    value: 'Armor skirts',
    image: Images['../assets/tanks/specials/tank_add_on_armor.png'],
  },
  {
    value: 'Auto loader',
    image: Images['../assets/tanks/specials/tank_autoloader.png'],
  },
  {
    value: 'Dozer blade',
    image: Images['../assets/tanks/specials/tank_dozer_blade.png'],
  },
  {
    value: 'Easy maintenance',
    image: Images['../assets/tanks/specials/tank_easy_maintenance_access.png'],
  },
  {
    value: 'Squeeze-bore Adaptor',
    image: Images['../assets/tanks/specials/tank_squeezebore_adaptor.png'],
  },
  {
    value: 'Sloped armor',
    image: Images['../assets/tanks/specials/tank_sloped_armor.png'],
  },
  {
    value: 'Stabilizer',
    image: Images['../assets/tanks/specials/tank_stabilizer.png'],
  },
  {
    value: 'Wet ammunition storage',
    image: Images['../assets/tanks/specials/tank_wet_ammo_storage.png'],
  },
];

export default tank_specials;
