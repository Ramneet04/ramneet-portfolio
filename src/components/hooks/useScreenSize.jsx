"use client"

import React, { useEffect, useState } from 'react'

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState();
    useEffect(()=>{
        function getScreenSize(){
            return window.innerWidth;
        }
        function handleScreenSize(){
            setScreenSize(getScreenSize());
        }
        handleScreenSize();
        window.addEventListener('resize',handleScreenSize);
        return ()=>window.removeEventListener('resize',handleScreenSize);
    },[])
    return screenSize;
}

export default useScreenSize;