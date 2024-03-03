import { useEffect, useState } from 'react';
import { AddTodo, DeleteTodo, GetTodo, UpdateTodo } from '../redux/api/api.todo';
import logo from '../assets/delete-icon.png';
import ITodos from '../interface/Itodos';

   interface TodoItem {
        id: string;
        // text: string;
        // completed: boolean;
        title: string,
        description: null | string,
        // "onDate": "2024-01-16T11:15:25.000Z",
        isCompleted: boolean
      }

   const AddNewTodo = () => {
     const [todos, setTodos] = useState<TodoItem[]>([]);
     const [form,setForm]=useState<ITodos>({
        title:"",
        description:"",
        status : "new",
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

     const addNewTodo = () => {
        function CreateNewTodo() {
            AddTodo(form.title,form.status).then(res => {
                console.log(res)
                // const data =  res.data
                // console.log("data consent:",res.data)
                // console.log(data)
                // setTodos(data)
                // setTodos([...todos, data]);
              }).catch((e) => {
                console.log(e)
              }).finally(() => {
                setIsLoading(false);
              })
        }
        CreateNewTodo();
        // return getTodos()
        // window.location.reload();
     };

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
        <div className="flex items-center justify-center mt-40">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <form className="max-w-sm mx-auto" onSubmit={addNewTodo }>
                <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Add New Todo</label>
                <div className="flex">
                    <input type="text"
                    value={form.title}
                    name="title"
                    onChange={onChangeForm} id="website-admin" className="rounded-none bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add new todo" style={{borderEndStartRadius:"0.5rem",borderStartStartRadius:"0.5rem"}}/>
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 hover:cursor-pointer" >
                       +
                    </span>
                </div>
                </form>
            </div>
        </div>
       </div>
       
     );
   };

   export default AddNewTodo;