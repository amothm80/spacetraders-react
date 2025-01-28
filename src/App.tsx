import './App.css'
import * as stapi from './index.ts'
// import {AgentsApi} from './index.js'
function App() {
  const s = new stapi.AgentsApi()
  console.log(s.getAgents({limit: 20, page: 2}))
  // const s = new AgentsApi()
  
  // console.log(s.getAgents({limit: 20, page: 2}))
  return (
    <>
hello world
    </>
  )
}

export default App
