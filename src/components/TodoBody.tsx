import {Button, CardBody, Flex, Stack, StackDivider, Text} from "@chakra-ui/react";
import React from "react";

type TodoBodyProps = {
    tasks: string[],
    onDeleteTask: (task: string) => void
}

const TodoBody: React.FC<TodoBodyProps> = ({tasks, onDeleteTask}) => {
    return (
        <CardBody>
            <Stack divider={<StackDivider/>} spacing='4'>
                {
                    tasks.map((task, index) => (
                            <Flex
                                key={index}
                                justifyContent='space-between'
                            >
                                <Text pt='2' fontSize='sm'>
                                    {task}
                                </Text>
                                <Button
                                    colorScheme='red'
                                    onClick={() => onDeleteTask(task)}
                                >
                                    Remove task
                                </Button>
                            </Flex>
                        )
                    )
                }
            </Stack>
        </CardBody>
    )
}

export default TodoBody