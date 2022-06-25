import { FunctionComponent } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Event } from './pages/Event';
import { Subscribe } from './pages/Subscribe';

export const Router: FunctionComponent = () => {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Subscribe />}/>
            <Route path="/event" element={<Event />}/>
            <Route path="/event/lesson/:slug" element={<Event />}/>
         </Routes>
      </BrowserRouter>
   );
};