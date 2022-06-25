import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { Logo } from '../components/Logo';
import { CREATE_SUBSCRIBER_MUTATION } from '../mutation';

export const Subscribe: FunctionComponent = () => {
   const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);
   const navigate = useNavigate();

   const [formState, setFormState] = useState({ name: '', email: '' });

   const inputs = [
      { 
         type: 'text', 
         name: 'name', 
         placeholder: 'Seu nome completo', 
         value: formState.name,
         onChange: (event: ChangeEvent<HTMLInputElement>) => {
            setFormState({ ...formState, name: event.target.value });
         },
         required: true,
      },
      { 
         type: 'email', 
         name: 'email', 
         placeholder: 'Digite o seu e-mail', 
         value: formState.email,
         onChange: (event: ChangeEvent<HTMLInputElement>) => {
            setFormState({ ...formState, email: event.target.value });
         },
         required: true,
      }
   ];

   const handleSubscribe = async (event: FormEvent) => {
      event.preventDefault();

      const { name, email } = formState;
      
      if(name.trim().length > 0 && email.trim().length > 0) {
         try {
            await createSubscriber({
               variables: { name, email }
            });

            navigate('/event');
         } catch(err) {
            console.error('Error in mutation');
         }
         
      } else {
         alert('Por favor preencha todos os dados');
      }
   };

   return(
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
         <div className="max-w-[1100px] flex justify-between items-center mt-20 mx-auto w-full">
            <div className="max-w-[640px]">
               <Logo />

               <h1 className="mt-8 text-[2.5rem] leading-tight ">
                  Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
               </h1>

               <p className="mt-4 text-gray-200 leading-relaxed">
                  Em apenas uma semana você vai dominar na prática uma das tecnologias mais 
                  utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
               </p>
            </div>

            <div className="p-8 bg-gray-700 border border-gray-500 rounded">
               <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

               <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                  {
                     inputs.map((input, index) => (
                        <input 
                           className="bg-gray-900 rounded px-5 h-14" 
                           {...input} 
                           key={String(index)}
                        />
                     ))
                  }
                  <button 
                     type="submit" 
                     className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                     disabled={loading}
                  >
                     Garantir minha vaga
                  </button>
               </form>
            </div>
         </div>
         <img 
            src="/src/assets/code-mockup.png" 
            alt="Print Visual Studio Code" 
            className="mt-10"
         />
      </div>
   );
};