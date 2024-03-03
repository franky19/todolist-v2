import { useEffect, useState } from 'react';
import { AddTodo, DeleteTodo, GetTodo, UpdateTodo } from '../redux/api/api.todo';
import logo from '../assets/delete-icon.png';
import ITodos from '../interface/Itodos';
import AddNewTodo from './AddNewTodo';
import GetTodoList from './GetTodo';

   interface TodoItem {
        id: string;
        // text: string;
        // completed: boolean;
        title: string,
        description: null | string,
        // "onDate": "2024-01-16T11:15:25.000Z",
        isCompleted: boolean
      }

   const TodoApp = () => {
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
       <div>
         <nav
		className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out" style={{backgroundColor:'#e7f6df'}}
        >
             <div className="flex justify-between p-4" >
                    <div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-black dark:text-white">
                            todo apps
                    </div>
            </div>
        </nav>
        <AddNewTodo />

        <div className='mt-5'>
            <GetTodoList/>
        </div>
       </div>
       
     );
   };

   export default TodoApp;