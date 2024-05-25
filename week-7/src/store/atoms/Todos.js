
import { atom, selector } from "recoil";

export const todos = atom({
    key: "todos",
    default: []
});
export const currTodo=atom({
    key: "currTodo",
    default:""
})
export const filterQuery=atom({
    key:"filterQuery",
    default:""
})
export const filteredTodo=selector({
    key:"filteredTodo",
    get:({get})=>{
        const list=get(todos)
        const filter=get(filterQuery)
         const resultList=list.filter((todo)=>{
            return todo.includes(filter)
        })

        return resultList
    }
}

)

// todos, filter