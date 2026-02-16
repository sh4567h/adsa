import React from 'react'
import Home from '../Home/Home'
import { Outlet } from 'react-router-dom'
import Nav from '../navbar/Nav'
import Footer from '../footer/Footer'

export default function Layout() {

 

  return (
    <>
    <Nav/>
   
   <Outlet/>
    <Footer/>
    </>
  )
}
