import './App.css'
import * as stapi from './index.ts'
function App() {
  const s = new stapi.AgentsApi()
  console.log(s.getAgents({limit: 20, page: 2}))
  return (
    <>
hello world
    </>
  )
}

export default App
