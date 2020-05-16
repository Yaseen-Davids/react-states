import React, { useState, useEffect, useMemo } from "react";
import { CreateTask } from "./CreateTask";
import { TodoList } from "./TodoList";

export type Task = {
  id: number;
  task: string;
  state: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [id, setId] = useState<number>(1);
  const [superheroImage, setSuperheroImage] = useState("");
  const [isLoading, setIsLoading] = useState({ loading: false, loaded: false });

  useEffect(() => {
    setIsLoading({ loading: true, loaded: false });
    fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
      .then(res => res.json())
      .then((res: any) => {
        setSuperheroImage(res.images.md);
      })
      .finally(() => {
        setIsLoading({ loading: false, loaded: true });
      });
  }, [id]);

  const tasksCount = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  return (
    <div>
      <div>
        Task: {tasksCount}
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <TodoList tasks={tasks} setTasks={setTasks} />
      </div>
      <div>
        {isLoading.loading || !isLoading.loaded ? (
          <div>
            <p> Loading</p>
          </div>
        ) : (
            <div>
              <input type="number" value={id} onChange={e => setId(parseInt(e.target.value))} />
              <img src={superheroImage} />
            </div>
          )}
      </div>
    </div>
  )
}

export default App;