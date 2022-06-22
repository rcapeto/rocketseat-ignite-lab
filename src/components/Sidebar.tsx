import { useQuery } from '@apollo/client';
import { FunctionComponent } from 'react';

import { Lesson } from './Lesson';
import { GET_LESSONS_SIDEBAR } from '../queries/lessons_sidebar';
import { Lesson as LessonEntity } from '../@types/entities';

export interface GetLessionsSidebar {
   lessons: LessonEntity[];
};

export const Sidebar: FunctionComponent = () => {
   const { data } = useQuery<GetLessionsSidebar>(GET_LESSONS_SIDEBAR);

   return(
      <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
         <span className="font-bold text-2xl pb-6 mb-6 border-gray-500 block border-b">
            Cronograma de Aulas
         </span>

         <div className="flex flex-col gap-8">
            {
               data?.lessons.map(lession => (
                  <Lesson 
                     title={lession.title}
                     availableAt={new Date(lession.availableAt)} 
                     type={lession.lessonType} 
                     slug={lession.slug}
                     key={lession.id}
                  />
               ))
            }
         </div>
      </aside>
   );
};