import 'regenerator-runtime/runtime';
import axios from 'axios';


const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getTodoItems=async() => 
{
    try {
        const response = await axios.get(`${BASE_URL}/todos?_limit=5`);

        const todoItems=response.data;
        console.log("the list",todoItems);
        return todoItems;
    }
    catch(errors)
    {
        console.log(errors);
    }
};


const createtoDoElement = item =>
{
    const todoelementitem=document.createElement('li');
    todoelementitem.appendChild(document.createTextNode(item.title));
    return todoelementitem;
}

const updateTODolist = todoItems => 
{
    const todolist = document.querySelector('ul');
    if(Array.isArray(todoItems) && todoItems.length > 0)
    {
        todolist.map(todoitem=> {
            todolist.appendChild(createtoDoElement(todoitem))
        });
    }
    else if(todoItems)
    {
        todolist.appendChild(createtoDoElement(todoItems));
    }
}

const main = async() => 
{
    updateTODolist(await getTodoItems());
};
main();