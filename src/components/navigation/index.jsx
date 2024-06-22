'use client'
import { BtnList } from '@/app/data'
import React from 'react'
import NavBtn from './NavBtn';

const Navigation = () => {
    const angleIncrement = 360/BtnList?.length;

  return (
    <div className='fixed h-screen w-full flex items-center justify-center'>
        <div className='flex items-center justify-center relative hover:pause animate-spin-slow group'>
        {BtnList.map((btn,index) => {
            const angleRad = (index * angleIncrement*Math.PI)/180;
            const radius = 'calc(20vw - 1rem)'
            const x=`calc(${radius}*${Math.cos(angleRad)})`
            const y=`calc(${radius}*${Math.sin(angleRad)})`
            console.log(angleRad, radius, x, y, index);
            return <NavBtn key={btn.label} x={x} y={y} {...btn} />
        })}
    </div>
    </div>
  )
}

export default Navigation