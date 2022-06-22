import { FunctionComponent } from 'react';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export const Event: FunctionComponent = () => {
   return(
      <div className="flex flex-col min-h-screen">
         <Header />

         <main className="flex flex-1">
            <Video />
            <Sidebar />
         </main>
      </div>
   );
};