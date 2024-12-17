import {useMemo} from 'react'
import {Title, Subtitle} from '../components'
import * as D from '../data'

export default function RadioInputTest() {
  const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), [])
  const radioInputs = useMemo(() =>
    jobTitles.map((value, index) => (
      <label key={index} className="flex justify-start cursor-pointer label">
        <input
          type="radio"
          name="jobs"
          className="mr-4 radio radio-primary"
          defaultValue={value}
        />
      </label>
    ))
  )

  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">CopyMe</h2>
      <div className="mt-4"></div>
    </section>
  )
}
