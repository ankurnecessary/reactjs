import {
  createBrowserRouter
  , RouterProvider
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetailsPage from './pages/ProductDetails';
import Root from './pages/Root';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/'
    , element: <Root />
    , errorElement: <Error />
    , children: [
      { index: true, element: <HomePage /> }
      , { path: 'products', element: <ProductsPage /> }
      , { path: 'products/:productId', element: <ProductDetailsPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
