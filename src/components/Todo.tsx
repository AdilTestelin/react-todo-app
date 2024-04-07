import {Card, Flex, Input} from "@chakra-ui/react";
import TodoHeader from "./TodoHeader.tsx";
import TodoBody from "./TodoBody.tsx";
import React, {useEffect, useState} from "react";

function Todo() {

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            return JSON.parse(savedTodos);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTask = (task: string) => {
        setTodos([...todos, task]);
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask(event.currentTarget.value);
            event.currentTarget.value = '';
        }
    }

    const handleDeleteTask = (task: string) => {
        setTodos(todos.filter((todo: string) => todo !== task));
    }

    return (
        <Flex
            height="100vh"
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                direction={'column'}
                width={'75%'}
            >
                <Input
                    placeholder='Enter your task here'
                    size='lg'
                    mb={'3rem'}
                    onKeyDown={handleKeyDown}
                />

                <Card>
                    <TodoHeader/>
                    <TodoBody
                        tasks={todos}
                        onDeleteTask={handleDeleteTask}
                    />
                </Card>

            </Flex>
        </Flex>
    )
}

export default Todo