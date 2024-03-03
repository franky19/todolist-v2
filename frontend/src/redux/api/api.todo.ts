import ITodos from "../../interface/Itodos"
import { API } from "./api.middleware"

export const GetTodo = async () => {
    return await API({
        url : '/todos' ,
        method : 'GET',
    }).then( res => res.data )
}

export const AddTodo = async (title:string,status:string) => {
    return await API({
        url : '/todos' ,
        method : 'POST',
        data:{title,status}
    }).then( res => res.data )
}

export const DeleteTodo = async (id:string) => {
    return await API({
        url : '/todos/'+ id,
        method : 'DELETE',
    }).then( res => res.data )
}

export const UpdateTodo = async (id:string,data:ITodos) => {
    return await API({
        url : '/todos/'+ id,
        method : 'PUT',
        data
    }).then( res => res.data )
}