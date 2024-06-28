"use client"
import React from 'react'
import useScreenSize from './hooks/useScreenSize'


const ResponsiveComponent = ({children}) => {
    const size=useScreenSize();
  return (
    <div>
        {
            children({size})
        }
    </div>
  )

}

export default ResponsiveComponent