import type {ChangeEvent, DragEvent} from 'react'
import {useState, useRef, useCallback, useMemo} from 'react'
import {useToggle} from '../hooks'
import {Title, Div} from '../components'

export default function CopyMe() {
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">CopyMe</h2>
      <div className="mt-4"></div>
    </section>
  )
}
