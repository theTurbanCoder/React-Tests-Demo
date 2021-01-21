import logo from './logo.svg'
import './App.css'
import { Router } from '@reach/router'
import TableDemo from './TableDemo'
function App() {
 return (
  <Router>
   <TableDemo path='/tableDemo' />
  </Router>
 )
}

export default App
