import React from 'react'
import UI from './assets/components/UI'


const App = () => {
  return (
    <section className='h-screen w-screen bg-black p-5 overflow-hidden flex items-center justify-center'>
    <div className='bg-gray-600 h-[90%] w-[45%]   rounded-t-2xl  relative'>
      <UI/>
    </div>
    </section>
  )
}

export default App
