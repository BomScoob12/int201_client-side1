//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (nameOfPlannet, ageInSec) => {
  const earth = {
    orbital_period: 1.0,
    earthDay: 365.25,
    earthSec: 31557600,
  }
  const plannet = {
    mercury: { orbital_period: 0.2408467 },
    venus: { orbital_period: 0.61519726 },
    earth: { orbital_period: 1.0 },
    mars: { orbital_period: 1.8808158 },
    jupiter: { orbital_period: 11.862615 },
    saturn: { orbital_period: 29.447498 },
    uranus: { orbital_period: 84.016846 },
    neptune: { orbital_period: 164.79132 },
  }
  const earthYear = ageInSec / earth.earthSec


  if (plannet?.[nameOfPlannet] ?? false) {
    const ageOnPlannet = (earthYear / plannet?.[nameOfPlannet].orbital_period).toFixed(2)
    return Number(ageOnPlannet)
  }
  else console.error('Error type of plannet')
}
