import React from 'react'

type Props = {
  children: React.ReactNode
}

const Htext = ({ children }: Props) => {
  return <h1 className="basis-3/5 font-montserrat font-bold text-3xl">{children}</h1>
}

export default Htext
