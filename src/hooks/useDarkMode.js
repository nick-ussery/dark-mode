import React,  {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = () =>{
    const [darkmodeToggle, setDarkmodeToggle] = useLocalStorage('darkmode', 'true')
    useEffect(()=>{
        if(darkmodeToggle == true){
            const bodyTag = document.querySelector('body')
            bodyTag.classList.add('dark-mode')
        }else{
            const bodyTag = document.querySelector('body')
            bodyTag.classList.remove('dark-mode')            
        }
    }, [darkmodeToggle])

    return [darkmodeToggle, setDarkmodeToggle]
}

export default useDarkMode