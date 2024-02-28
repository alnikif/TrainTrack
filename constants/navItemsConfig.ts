export enum NavItemsPaths {
  heartRateChart = '/heart-rate-chart',
  stepsCounterChart = '/steps-counter-chart',
  caloriesChart = '/calories-counter-chart',
  trainingSessionChart = '/training-sessions',
}
export const navItemsConfig = [
  { label: 'Heart Rate', url: NavItemsPaths.heartRateChart },
  { label: 'Steps Counter', url: NavItemsPaths.stepsCounterChart },
  { label: 'Calories', url: NavItemsPaths.caloriesChart },
  { label: 'Training Session', url: NavItemsPaths.trainingSessionChart },
]
