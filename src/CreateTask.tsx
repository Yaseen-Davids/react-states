import React, { useState, useCallback } from "react";
import { Task } from "./App";
import styled from "styled-components";

type CreateTaskProps = {
  tasks: Task[];
  setTasks(tasks: Task[]): void;
}

export const CreateTask: React.FC<CreateTaskProps> = ({ tasks, setTasks }) => {
  const [text, setText] = useState<string>("");

  const createTask = useCallback((event: any) => {
    event.preventDefault();
    setTasks([...tasks, { id: Math.floor(Math.random() * 1) + 99999, task: text, state: "To do" }]);
  }, [tasks, setTasks, text]);

  return (
    <FormContainer onSubmit={createTask}>
      <input placeholder="Task" type="text" onChange={e => setText(e.target.value)} />
      <button type="submit">Create</button>
    </FormContainer>
  )
};

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 300px 1fr;
`;