import { FunctionComponent } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Event } from './pages/Event';

export const Router: FunctionComponent = () => {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<h1>Home</h1>}/>
            <Route path="/event" element={<Event />}/>
            <Route path="/event/lesson/:slug" element={<Event />}/>
         </Routes>
      </BrowserRouter>
   );
};