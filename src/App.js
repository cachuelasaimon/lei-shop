import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Cart, Home } from 'pages'

// Font
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
