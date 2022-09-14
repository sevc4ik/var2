import { Button } from 'antd'
import React from 'react'

type TProps = {
    children?: React.ReactNode,
    onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    disabled?: boolean,
    type: "primary" | "dashed" | 'text' | 'link' | 'default',
    block?: boolean
}

export const CustomButton:React.FC<TProps> = ({children, onClick, disabled, type, block}) => {
  return (
    <Button block={block} type={type} disabled={disabled} onClick={onClick}>{children}</Button>
  )
}
