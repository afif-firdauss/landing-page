import React from 'react'

export default function Button({ title, onClick, className, ...props }) {
  return (
    <button className={className} onClick={onClick} {...props}>{title}</button>
  )
}
