import { WeekDay } from './weekDays'

export const trainingOne = [
  {
    title: 'Bench Press',
    series: [
      { reps: 10, weight: 40 },
      { reps: 10, weight: 60 },
      { reps: 10, weight: 80 },
      { reps: 8, weight: 100 },
      { reps: 5, weight: 120 },
      { reps: 5, weight: 140 },
      { reps: 5, weight: 155 },
      { reps: 5, weight: 150 },
    ],
  },
  {
    title: 'Dumbbells press',
    series: [
      { reps: 10, weight: 88 },
      { reps: 8, weight: 104 },
      { reps: 8, weight: 104 },
      { reps: 8, weight: 104 },
    ],
  },
  {
    title: 'Dips',
    series: [
      { reps: 8, weight: 32 },
      { reps: 8, weight: 32 },
      { reps: 8, weight: 32 },
      { reps: 8, weight: 32 },
    ],
  },
  {
    title: 'Bench press 45',
    series: [
      { reps: 10, weight: 90 },
      { reps: 10, weight: 90 },
      { reps: 10, weight: 90 },
      { reps: 10, weight: 90 },
    ],
  },
  {
    title: 'Pec Fly',
    series: [
      { reps: 10, weight: 56 },
      { reps: 10, weight: 56 },
      { reps: 10, weight: 56 },
      { reps: 10, weight: 56 },
    ],
  },
]

export const trainingTwo = [
  {
    title: 'Squads',
    series: [
      { reps: 10, weight: 40 },
      { reps: 10, weight: 60 },
      { reps: 10, weight: 80 },
      { reps: 8, weight: 100 },
      { reps: 5, weight: 120 },
      { reps: 5, weight: 140 },
      { reps: 5, weight: 150 },
      { reps: 5, weight: 150 },
    ],
  },
  {
    title: 'Lunges',
    series: [
      { reps: 16, weight: 50 },
      { reps: 16, weight: 50 },
      { reps: 16, weight: 50 },
      { reps: 16, weight: 50 },
    ],
  },
  {
    title: 'Leg flexion ',
    series: [
      { reps: 12, weight: 56 },
      { reps: 12, weight: 56 },
      { reps: 12, weight: 56 },
      { reps: 12, weight: 56 },
    ],
  },
  {
    title: 'Lower legs',
    series: [
      { reps: 20, weight: 90 },
      { reps: 20, weight: 90 },
      { reps: 20, weight: 90 },
      { reps: 20, weight: 90 },
    ],
  },
  {
    title: 'Bringing',
    series: [
      { reps: 15, weight: 80 },
      { reps: 15, weight: 80 },
      { reps: 15, weight: 80 },
      { reps: 15, weight: 80 },
    ],
  },
]

export const trainingThree = [
  {
    title: 'Military Press',
    series: [
      { reps: 10, weight: 20 },
      { reps: 10, weight: 40 },
      { reps: 8, weight: 60 },
      { reps: 8, weight: 70 },
      { reps: 6, weight: 80 },
      { reps: 5, weight: 90 },
      { reps: 8, weight: 70 },
    ],
  },
  {
    title: 'Scars',
    series: [
      { reps: 15, weight: 90 },
      { reps: 12, weight: 100 },
      { reps: 10, weight: 120 },
      { reps: 10, weight: 120 },
      { reps: 10, weight: 120 },
      { reps: 10, weight: 120 },
      { reps: 10, weight: 120 },
    ],
  },
  {
    title: 'Side dumbbells lifting',
    series: [
      { reps: 12, weight: 20 },
      { reps: 12, weight: 25 },
      { reps: 12, weight: 25 },
      { reps: 12, weight: 25 },
    ],
  },
  {
    title: 'Chin-up',
    series: [
      { reps: 10, weight: 32 },
      { reps: 10, weight: 40 },
      { reps: 10, weight: 40 },
      { reps: 10, weight: 40 },
    ],
  },
  {
    title: 'Dumbbells press',
    series: [
      { reps: 10, weight: 48 },
      { reps: 10, weight: 48 },
      { reps: 10, weight: 48 },
      { reps: 10, weight: 48 },
    ],
  },
  {
    title: 'Frontal dumbbells lifting',
    series: [
      { reps: 12, weight: 20 },
      { reps: 12, weight: 24 },
      { reps: 12, weight: 24 },
      { reps: 12, weight: 24 },
    ],
  },
  {
    title: 'Rear shoulders',
    series: [
      { reps: 12, weight: 40 },
      { reps: 12, weight: 40 },
      { reps: 12, weight: 40 },
      { reps: 12, weight: 40 },
    ],
  },
  {
    title: 'Lateral shoulders',
    series: [
      { reps: 12, weight: 28 },
      { reps: 12, weight: 32 },
      { reps: 12, weight: 36 },
      { reps: 12, weight: 36 },
    ],
  },
]

export const trainingMap = {
  [WeekDay.Sunday]: trainingOne,
  [WeekDay.Monday]: trainingTwo,
  [WeekDay.Tuesday]: trainingThree,
  [WeekDay.Wednesday]: trainingOne,
  [WeekDay.Thursday]: trainingTwo,
  [WeekDay.Friday]: trainingThree,
  [WeekDay.Saturday]: trainingOne,
}
