import Backend from "../svgs/Backend";
import Frontend from "../svgs/Frontend";
import Other from "../svgs/Other";
import React from 'react';
import react from '../../../public/stack/react.png';
import javascript from '../../../public/stack/javascript.png';
import redux from '../../../public/stack/redux.png';
import next from '../../../public/stack/next.png';
import tailwind from '../../../public/stack/tailwind.png';
import css from '../../../public/stack/css.png';
import html from '../../../public/stack/html.png';
import express from '../../../public/stack/express.png';
import node from '../../../public/stack/node.png';
import firebase from '../../../public/stack/firebase.png';
import postgresql from '../../../public/stack/postgresql.png';
import sequelize from '../../../public/stack/sequelize.png';
import sql from '../../../public/stack/sql.png';
import vercel from '../../../public/stack/vercel.png';
import scrum from '../../../public/stack/scrum.png';
import git from '../../../public/stack/git.png';
import github from '../../../public/stack/github.png';
import restapi from '../../../public/stack/restapi.png';
import jest from '../../../public/stack/jest.png';
import dotnet from '../../../public/stack/dotnet.png';
import csharp from '../../../public/stack/csharp.png';


export const stackData = [
    { 
        id: 1, 
        title: 'Front-End', 
        svg: <Frontend/>,
        stack: ['React', 'JavaScript', 'Redux', 'Next.js', 'Tailwind', 'CSS', 'HTML'],
        icon: [react, javascript, redux, next, tailwind, css, html]
    },
    { 
        id: 2, 
        title: 'Back-End', 
        svg: <Backend/>,
        stack: ['C#', '.NET', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'SQL', 'Firebase'],
        icon: [csharp, dotnet, node, express, sequelize, postgresql, sql, firebase]
    },
    { 
        id: 3, 
        title: 'Herramientas', 
        svg: <Other/>,
        stack: ['SCRUM', 'GIT', 'GitHub','Jest', 'REST\u00A0API'],
        icon: [scrum, git, github, jest, restapi]
    },
    
  ];