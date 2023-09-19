import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

//takes array of path 
//children will go inside the outlet provided in the body
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[{
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    },  
  ]
  }
])

//components will change according to the routing wrapped by RouterProvider 


function App() {
    return( 
      <Provider store={store}>
      <div>
      
      <Head />
      <RouterProvider router={appRouter}/>
      

      </div>
      </Provider>
      );
}

export default App;
