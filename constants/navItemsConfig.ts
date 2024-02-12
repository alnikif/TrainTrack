export enum NavItemsPaths {
  heartRateChart = '/heart-rate-chart',
  stepsCounterChart = '/steps-counter-chart',
  caloriesChart = '/calories-chart',
}
export const navItemsConfig = [
  { label: 'Heart Rate', url: NavItemsPaths.heartRateChart },
  { label: 'Steps Counter', url: NavItemsPaths.stepsCounterChart },
  { label: 'Calories', url: NavItemsPaths.caloriesChart },
]
