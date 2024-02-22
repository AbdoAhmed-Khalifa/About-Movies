import React, { useState } from 'react';

let tasks = [
    {
        id: 1,
        data: "tasks",
        completed: false
    },
    {
        id: 2,
        data: "tasks 2",
        completed: false
    }
]

function ToDo() {
    const [allTasks, addTask] = useState(tasks)

    const [task, setTask] = useState({
        id: ramdomId(),
        data: "",
        completed: false
    })

    function pushTask() {
        addTask([...allTasks, task])
        setTask({
            id: ramdomId(),
            data: "",
            completed: false
        })
    }
    function ramdomId() {
        return Date.now()
    }

    function complete(id) {
        const newTask = allTasks.map(task => {
            if (task.id == id) {
                console.log(task);
                // setTask({
                //     ...task,
                //     completed: true
                // })
                task.completed = !task.completed
                return task

            } else {

                return task
            }
        })
        addTask(newTask)

        // const [task] = allTasks.filter(task => task.id === id)
        // const newTask = { ...task, completed: !task.completed }
        // addTask([...allTasks.filter(task => task.id !== id), newTask])

    }
    function deleted(id) {
        addTask(allTasks.filter(task => task.id !== id))
    }

    return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <div className="flex mt-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"
                            name='todo' type='text' value={task.data} onChange={(e) => setTask({ ...task, data: e.target.value })}
                        />
                        <button className=" bg-teal-700 text-white flex-no-shrink p-2 rounded-lg border-2 hover:border-teal-700  hover:text-teal-700 hover:bg-white"
                            onClick={pushTask}
                        >Add</button>
                    </div>
                </div>
                <div>
                    {allTasks.map(task =>
                        <div key={task.id}>
                            <div className={`${task.completed && "opacity-70"} flex mb-4 items-center border-2 rounded-md border-gray px-2 py-1`}>
                                <p className={` ${task.completed && "line-through"}  w-full text-grey-darkest `}>{task.data}</p>
                                <button className="  bg-teal-700 text-white flex-no-shrink p-2 ml-4 mr-2  rounded-lg border-2 hover:text-teal-700 hover:border-teal-700  hover:bg-white text-green border-green hover:bg-green"
                                    onClick={() => complete(task.id)}
                                >Done</button>
                                <button className="    bg-red-800 text-white flex-no-shrink p-2 ml-2  rounded-lg text-re border-2 hover:border-red-800 hover:text-red-800 hover:bg-white"

                                    onClick={() => deleted(task.id)}
                                >Remove
                                </button>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default ToDo;

// export function Task({ data }) {

//     return (
//         <div>
//             <div className="flex mb-4 items-center border-2 rounded-md border-gray px-2 py-1">
//                 <p className="w-full text-grey-darkest">{data}</p>
//                 <button className="  bg-teal-700 text-white flex-no-shrink p-2 ml-4 mr-2  rounded-lg border-2 hover:text-teal-700 hover:border-teal-700  hover:bg-white text-green border-green hover:bg-green"
//                     onClick={complete}
//                 >Done</button>
//                 <button className="   bg-red-800 text-white flex-no-shrink p-2 ml-2  rounded-lg text-re border-2 hover:border-red-800 hover:text-red-800 hover:bg-white">Remove</button>
//             </div>
//         </div>
//     )
// }