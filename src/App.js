
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Component/Review/Review';
import Manage from './Component/Manage/Manage';
import NotFound from './Component/NotFound/NotFound';
import ProductDetail from './Component/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
        <Route  path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/manage">
          <Manage></Manage>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetail></ProductDetail>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
