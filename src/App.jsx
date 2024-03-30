import { useState } from 'react'

import Todo from './Todo'
import Wheather from './Wheather'
function App() {

  return (
 <>
<div class="min-h-screen flex">
  <div class="flex-1 w-6/12 md:w-32 lg:w-48 "><Todo/></div>
  <div class="flex-1 w-6/12 md:w-32 lg:w-48"><Wheather/></div>
</div>
 
 </>
  )
}

export default App
