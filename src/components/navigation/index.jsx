'use client'
import { BtnList } from '@/app/data'
import React from 'react'
import NavBtn from './NavBtn';
import useScreenSize from '../hooks/useScreenSize';
import ResponsiveComponent from '../ResponsiveComponent';

const Navigation = () => {
    const angleIncrement = 360/BtnList?.length;
    const size = useScreenSize();
    const isLarge = size >=1024;
    const isMedium = size >=768;
  return (
    <div className='fixed w-full h-screen  flex items-center justify-center'>
      <ResponsiveComponent>
        {({size})=>{
          return size && size>=480 ?
          <div className='flex items-center justify-center relative hover:pause animate-spin-slow group'>
        {BtnList.map((btn,index) => {
            const angleRad = (index * angleIncrement*Math.PI)/180;
            const radius = isLarge ? 'calc(20vw - 1rem)' : isMedium? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)';
            const x=`calc(${radius}*${Math.cos(angleRad)})`
            const y=`calc(${radius}*${Math.sin(angleRad)})`
            console.log(angleRad, radius, x, y, index);
            return <NavBtn key={btn.label} x={x} y={y} {...btn} />
        })}
    </div> : 
    (
    <div >
    <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative  group xs:hidden">
    {BtnList.slice(0,BtnList.length/2).map((btn,index) => {
        const angleRad = (index * angleIncrement*Math.PI)/180;
        const radius = isLarge ? 'calc(20vw - 1rem)' : isMedium? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)';
        const x=`calc(${radius}*${Math.cos(angleRad)})`
        const y=`calc(${radius}*${Math.sin(angleRad)})`
        console.log(angleRad, radius, x, y, index);
        return <NavBtn key={btn.label} x={x} y={y} {...btn} />
    })}
    </div>
    <div className='w-full xs:w-max px-2.5 xs:py-0 space-y-4 flex flex-col xs:items-end justify-center relative group'>
    {BtnList.slice(BtnList.length/2,BtnList.length).map((btn,index) => {
        const angleRad = (index * angleIncrement*Math.PI)/180;
        const radius = isLarge ? 'calc(20vw - 1rem)' : isMedium? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)';
        const x=`calc(${radius}*${Math.cos(angleRad)})`
        const y=`calc(${radius}*${Math.sin(angleRad)})`
        console.log(angleRad, radius, x, y, index);
        return <NavBtn key={btn.label} x={x} y={y} {...btn} />
    })}
    </div>
   </div>
    )
        }}
      </ResponsiveComponent>
    </div>
  )
}

export default Navigation