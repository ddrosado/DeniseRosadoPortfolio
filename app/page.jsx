'use client'
import Welcome from './components/welcome/Welcome'
import Projects from './components/projects/Projects'
import About from './components/aboutme/About'
import Opinions from './components/opinions/Opinions'
import Contact from './components/contact/Contact'


import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Technologies from './components/technologies/Technologies'


export default function Home() {
  return (
    <main>
        <div>
        <ReactFullpage
        navigation
        render={comp => (
          <ReactFullpage.Wrapper>
        <Welcome/>
        <About/>
        <Technologies/>
        <Projects/>
        {/* <Opinions/> */}
        <Contact/>
          </ReactFullpage.Wrapper>
       )}
       />
       </div>
    </main>
  )
}
