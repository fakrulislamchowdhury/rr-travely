import './App.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Services from './Pages/Services/Services';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import AddTour from './Pages/AddTour/AddTour';
import MyTour from './Pages/MyTour/MyTour';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/addService'>
              <AddTour></AddTour>
            </Route>
            <Route path='/myTour'>
              <MyTour></MyTour>
            </Route>
            <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
