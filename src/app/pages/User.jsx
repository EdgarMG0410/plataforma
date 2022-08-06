import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import "../../index.scss"
export const User = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className='Content'>
        <h1>Perfil de usuario</h1>
    </div>
    </>
  )
}
