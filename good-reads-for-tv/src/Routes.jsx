//To add a route copy one of the lines below and change the Import to Function name in the new page you created under ./pages/XYZ and change the from to point to the correct page
//You will also need to copy a line in the Routes function { path: .....} and replace the path and the element tag <XYZ to your import Function name
import About from "./pages/about"
import Contact from './pages/contact';
import Error404 from './pages/Error404';
import Dashboard from './pages/dashboard';
import TVshows from './pages/tvshows';

import {useRoutes} from 'react-router-dom'

export const Routes = () => {
    const element = useRoutes([
        { path: "/", element:<Dashboard className="flex-grow"/>},
        { path: "/about", element:<About className="flex-grow"/>},
        { path: "/contact", element:<Contact className="flex-grow"/>},
        { path: "/tvshows", element:<TVshows className="flex-grow"/>},
        //* path signifies any mismatched routes and takes them to 404
        { path: "*", element:<Error404 className="flex-grow"/>}
    ])
    return element
    //Old code for routes inside App.js using as a reference for now
    // <Router>
    //     <Route exact path='/' element={<Dashboard className="flex-grow"/>}></Route>
    //     <Route exact path='/about' element={<About className="flex-grow"/>}></Route>
    //     <Route exact path='/contact' element={<Contact className="flex-grow"/>}></Route>
    //     <Route exact path='/404' element={<Error404 className="flex-grow"/>}></Route>
    // </Router>
    // )
}