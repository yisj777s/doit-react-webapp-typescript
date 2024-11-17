import {Input} from '../../theme/daisyui'

export default function Size() {
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center">Size</h2>
      <div className="flex mt-4 justify-evenly">
        <div>
          <label className="label">input-lg</label>
          <Input className="input-primary input-lg" />
        </div>
        <div>
          <label className="label">input-md</label>
          <Input className="input-primary input-md" />
        </div>
        <div>
          <label className="label">input-sm</label>
          <Input className="input-primary input-sm" />
        </div>
        <div>
          <label className="label">input-xs</label>
          <Input className="input-primary input-xs" />
        </div>
      </div>
    </section>
  )
}
