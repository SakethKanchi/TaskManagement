"use client";
import React, { use } from 'react'
import { useGlobalState } from '../context/globalProvider'
import Tasks from '../components/Tasks/Tasks'
function page() {
    const { completedTasks } = useGlobalState();
    return (
        <Tasks title='Completed tasks' tasks={completedTasks} />
    )
}

export default page