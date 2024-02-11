import Link from 'next/link'
import React from 'react'

enum NavItemsPaths {
  heartRateChart = '/heart-rate-chart',
  stepsCounterChart = '/steps-counter-chart',
  caloriesChart = '/calories-chart',
}

export const NavItems = () => {
  return (
    <div className="flex justify-center gap-2">
      <Link href={NavItemsPaths.heartRateChart}>Heart Rate</Link>
      <Link href={NavItemsPaths.stepsCounterChart}>Steps Counter</Link>
      <Link href={NavItemsPaths.caloriesChart}>Calories</Link>
    </div>
  )
}

export default NavItems
