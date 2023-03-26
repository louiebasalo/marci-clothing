import {Routes,Route} from 'react-router-dom'

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'



const Shop = () => {
  return <h1>I am a shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>  {/*this will render at the outlet level */}
        <Route path='shop' element={<Shop />}/>
      </Route>
    </Routes>
      
  )
}

export default App;
