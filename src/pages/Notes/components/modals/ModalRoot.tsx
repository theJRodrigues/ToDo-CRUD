import React, { ReactNode } from 'react'

interface ModalRootProps{
    children: ReactNode
}

const ModalRoot = ({children}: ModalRootProps) => {
  return (
    <div className='absolute top-0 left-0 w-full h-dvh bg-modal backdrop-blur flex items-center justify-center filter'>{children}</div>
  )
}

export default ModalRoot