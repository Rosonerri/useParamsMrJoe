import React from 'react';
import { RouterProvider } from "react-router-dom"
import {Router} from "./Router/MainRouter"

function App() {
  return (
    <div>
    <RouterProvider router={Router}/>
    </div>
  );
}

export default App;
