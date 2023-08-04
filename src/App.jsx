import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import img1 from './mov11.jpg'
import img2 from './mov14.jpg';
import img3 from './mov13.jpg';
import img4 from './mov12.jpg';
import img5 from './mov15.jpg'
import img6 from './mov16.jpg';
import img7 from './mov17.jpg';
import img8 from './mov18.jpg';
import img9 from './mov19.jpg';
import './movies'




function App() {
  const [isloggedin , setisloggedin] = useState(false);

  return (
    <>
      {isloggedin ? (
        <>
          <p className='text-5xl text-black font-bold '>TOP RATED MOVIES</p>
          <div className="container mx-auto px-24 gap-8 columns-3 scroll-container">
        <div className='box-border hover:box-content hover:bg-cyan-500 bg-slate-600 h-100 w-52 p-4 border-4'>
          <p className=' text-2xl text-black hover:text-slate-500 font-sans hover:font-serif font-bold'>Vikram</p>
          <img src={img1} className='h-35 w-20 ' alt=""  />
          <p className='text-2xl font-sans text-white'>2022</p>
          <p className='text-2xl font-sans text-white'>Lokesh</p>
          <p className='text-2xl font-sans hover:font-serif text-white'>Action Thriller</p>
          
        </div>
        <div className=' box-border hover:box-content hover:bg-cyan-500 bg-slate-600 h-100 w-52 p-4 border-4'>
        <p className='  text-2xl text-black hover:text-slate-500 font-sans hover:font-serif font-bold'>Harry Potter-1</p>
          <img src={img2} className='h-35 w-20 ' alt="" />
          <p className='text-2xl font-sans text-white'>1997</p>
          <p className='text-2xl font-sans text-white'>J.K.Rowling </p>
          <p className='text-2xl font-sans hover:font-serif text-white'>Fantasy</p>
        </div>
        <div className='box-border hover:box-content hover:bg-cyan-500 bg-slate-600 h-100 w-52 p-4 border-4'>
        <p className='text-2xl text-black hover:text-slate-500 font-sans hover:font-serif font-bold'>Raazi</p>
          <img src={img9} className='h-35 w-20 ' alt="" />
          <p className='text-2xl font-sans text-white'>2018</p>
          <p className='text-2xl font-sans text-white'>Meghna Gulzar</p>
          <p className='text-2xl font-sans hover:font-serif text-white'>thriller</p>
        </div>
        
        <div className='box-border hover:box-content hover:bg-cyan-500 bg-slate-600 h-100 w-52 p-4 border-4'>
        <p className='text-2xl text-black hover:text-slate-500 font-sans hover:font-serif font-bold'>Super 30</p>
          <img src={img5} className='h-35 w-20 ' alt="" />
          <p className='text-2xl font-sans text-white'>2019</p>
          <p className='text-2xl font-sans text-white'>Vikas Bahi</p>
          <p className='text-2xl font-sans hover:font-serif text-white '>Drama</p>
        </div>
        <div className='box-border hover:box-content hover:bg-cyan-500 bg-slate-600 h-100 w-52 p-4 border-4'>
        <p className='  text-2xl text-black hover:text-slate-500 font-sans hover:font-serif font-bold'>Vikkram Vedha</p>
          <img src={img4} className='h-35 w-20 ' alt="" />
          <p className='text-2xl font-sans text-white'>2017</p>
          <p className='text-2xl font-sans text-white'>Gayatri</p>
          <p className='text-2xl font-sans hover:font-serif text-white'>Crime</p>
        </div>
        <div className='box-border hover:box-content hover:bg-cyan-500 bg-slate-600 h-100 w-52 p-4 border-4'>
        <p className='text-2xl text-black hover:text-slate-500 font-sans hover:font-serif font-bold'>Shershaah</p>
          <img src={img7} className='h-35 w-20 ' alt="" />
          <p className='text-2xl font-sans text-white'>2021</p>
          <p className='text-2xl font-sans text-white'>Vishnuvardhan</p>
          <p className='text-2xl font-sans hover:font-serif text-white'>Action</p>
        </div>
        <div className='box-border hover:box-content hover:bg-cyan-500 bg-slate-600 h-100 w-52 p-4 border-4'>
        <p className='text-2xl text-black hover:text-slate-500 font-sans hover:font-serif font-bold'>Chhichhore</p>
          <img src={img6} className='h-35 w-20 ' alt="" />
          <p className='text-2xl font-sans text-white'>2019</p>
          <p className='text-2xl font-sans text-white'>Nitesh Tiwari</p>
          <p className='text-2xl font-sans hover:font-serif text-white'>Comedy/Romance</p>
        </div>
        <div className='box-border hover:box-content hover:bg-cyan-500 bg-slate-600 h-100 w-52 p-4 border-4'>
        <p className='text-2xl text-black hover:text-slate-500 font-sans hover:font-serif font-bold'>Atrangi Re</p>
          <img src={img8} className='h-35 w-20 ' alt="" />
          <p className='text-2xl font-sans text-white'>2021</p>
          <p className='text-2xl font-sans text-white'>Aanand L. Rai</p>
          <p className='text-2xl font-sans hover:font-serif text-white'>Drama</p>
        </div>
        <div className='box-border hover:box-content hover:bg-cyan-500 bg-slate-600 h-100 w-52 p-4 border-4'>
        <p className='  text-2xl text-black hover:text-slate-500 font-sans hover:font-serif font-bold'>Pirates of the Caribbean-1</p>
          <img src={img3} className='h-35 w-20 ' alt="" />
          <p className='text-2xl font-sans text-white'>2003</p>
          <p className='text-2xl font-sans text-white'>Gore Verbinski</p>
          <p className='text-2xl font-sans hover:font-serif text-white'>Adventure</p>
        </div>


      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white' onClick={handlelogout}>
        logout
        </button>

        </>
        
      ) : (
        
        <>
        <p className='text-5xl text-black font-bold '>MOVIE REVIEW</p>
        <p>Loggin to proceed further</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white' onClick={handlelogin}>
        login
        </button>
        
        </>

      )
    
    }

       
    </>
  )
  

  function handlelogin(){
    setisloggedin(true);
  }
  function handlelogout(){
    setisloggedin(false);
  }

  
  
}

export default App

/* 
<a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

         </div>
      <div className="flex flex-col bg-slate-200 divide-y  bg-cover container mx-auto px-4 ">
      <div className="basis-1/4 hover:basis-1/2 hover:bg-cyan-600 outline outline-offset-2 outline-cyan-500">01</div>
      <div className="basis-1/4 hover:basis-1/2 hover:bg-cyan-600 outline outline-offset-2 outline-cyan-600">02</div>
      <div className="basis-1/2 hover:basis-1/2 hover:bg-cyan-600 outline outline-offset-2 outline-cyan-500">03</div>
      <div className="basis-1/4 hover:basis-1/2 hover:bg-cyan-600 outline outline-offset-2 outline-cyan-600">04</div>
      <div className="basis-1/4 hover:basis-1/2 hover:bg-cyan-600 outline outline-offset-2 outline-cyan-500">05</div>
      <div className="basis-1/2 hover:basis-1/2 hover:bg-cyan-600 outline outline-offset-2 outline-cyan-600">06</div>
      </div>


      <h1>Vite + React</h1>
      <div className="card">
        <button className="bg-indigo-500 hover:bg-cyan-600"
        onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="bg-slate-200 text-2xl read-the-docs">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="bg-black read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


*/ 