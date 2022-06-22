import { FunctionComponent } from 'react';
import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { LessonComponentProps } from '../@types/componentes';

export const Lesson: FunctionComponent<LessonComponentProps> = ({
   availableAt,
   slug,
   title,
   type
}) => {
   const isLessonAvailable = isPast(availableAt);
   const dateFormat = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR });

   return(
      <a href="#">
         <span className="text-gray-300">
            {dateFormat.replace(dateFormat[0], dateFormat[0].toUpperCase())}
         </span>

         <div className="rounded border border-gray-500 p-4 mt-2">
            <header className="flex justify-between items-center">
               {
                  isLessonAvailable ? (
                     <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                        <CheckCircle size={20} /> 
                        Conteúdo Liberado
                     </span>
                  ) : (
                     <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                        <Lock size={20} /> 
                        Em breve
                     </span>
                  )
               }
               <span className="text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold">
                  { type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
               </span>
            </header>

            <strong className="text-gray-200 mt-5 block">
               {title}
            </strong>
         </div>
      </a>
   );
};