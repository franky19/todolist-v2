import { useEffect, useState } from 'react';
import { AddTodo, DeleteTodo, GetTodo, UpdateTodo } from '../redux/api/api.todo';
import logo from '../assets/delete-icon.png';
import ITodos from '../interface/Itodos';
import AddNewTodo from './AddNewTodo';

   interface TodoItem {
        id: string;
        // text: string;
        // completed: boolean;
        title: string,
        description: null | string,
        // "onDate": "2024-01-16T11:15:25.000Z",
        isCompleted: boolean
      }

   const GetTodoList = () => {
     const [todos, setTodos] = useState<TodoItem[]>([]);
     const [form,setForm]=useState<ITodos>({
        title:"",
        description:"",
        status:"New",
        isCompleted:false
    })
     const [newTodo, setNewTodo] = useState('');
     const [isLoading,setIsLoading] = useState(false);

    function getTodos() {
        GetTodo().then(res => {
            const data =  res.data
            console.log("data consent:",res.data)
            console.log(data)
            setTodos(data)
            // setTodos([...todos, data]);
          }).catch((e) => {
            console.log(e)
          }).finally(() => {
            setIsLoading(false);
          })
    }

    console.log(todos);

     const removeTodo = (id: string) => {
        function RemoveTodoByID() {
            DeleteTodo(id).then(res => {
                console.log(res)
                return getTodos();
                // window.location.reload();
            }).catch((e) => {
                console.log(e)
            }).finally(() => {
                setIsLoading(false);
            })
        }
        RemoveTodoByID();
    //    
     };

     const toggleComplete = (id: string) => {
        // async function RemoveTodoByID() {
        //     UpdateTodo(id,form).then(res => {
        //         console.log(res)
        //         window.location.reload();
        //     }).catch((e) => {
        //         console.log(e)
        //     }).finally(() => {
        //         setIsLoading(false);
        //     })
        // }
        // RemoveTodoByID();
       const updatedTodos = todos.map((todo) => {
         if (todo.id === id) {
           return { ...todo, isCompleted: !todo.isCompleted };
         }
         return todo;
       });
       setTodos(updatedTodos);
     };

    console.log(form)

     

     useEffect(() => {
        getTodos();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChangeForm = (
        e: React.FormEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.currentTarget;
        setForm({
            ...form,
            [name]: value,
        });
    };

     return (
        <div className='flex justify-end mt-5'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  flex-1 mr-5 ml-5">
                <div className='bg-red-500 p-3 text-white'>New todo </div>
                <div className='p-6'>
                    
                </div>
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-1 mr-5 ml-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
     );
   };

   export default GetTodoList;