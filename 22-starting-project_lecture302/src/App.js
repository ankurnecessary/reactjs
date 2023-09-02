import {
  createBrowserRouter
  , createRoutesFromElements
  , RouterProvider
  , Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import Root from './pages/Root';

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/'
    , element: <Root />
    , children: [
      { path: '/', element: <HomePage /> }
      , { path: '/products', element: <ProductsPage /> }
    ]
  }

])

// const router = createBrowserRouter(routerDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
