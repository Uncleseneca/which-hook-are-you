import React, { useState } from 'react'
import { Title } from './components/title'
import { OptionsList } from './components/optionsList/OptionsList'

export const Select = ({ title, options }) => {
  const [active, setActive] = useState('')

  return (
    <section>
      <Title title={title} />
      <OptionsList active={active} setActive={setActive} options={options} />
    </section>
  )
}
