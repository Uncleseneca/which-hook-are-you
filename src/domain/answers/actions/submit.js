export const submit = () => (dispatch, getstate) => {
  const { answers } = getstate()
  const reduced = Object.values(answers)
    .map(answer => answer.points)
    .reduce((acc, current) => {
      const entries = Object.entries(current)
      entries.forEach(([key, value]) => {
        acc[key] = (acc[key] || 0) + value
      })

      return acc
    }, {})

  const sorted = Object.entries(reduced).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA
    }
  )

  const max = sorted[0][0]

  window.location.href = `/result/${max}`
}
