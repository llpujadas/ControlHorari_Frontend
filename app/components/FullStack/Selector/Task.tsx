import { useFetcher } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { Task } from "~/backend/models/Task";

export default function TaskSelector({
  selectedTask,
  setSelectedTask,
}: {
  selectedTask?: number;
  setSelectedTask?: React.Dispatch<React.SetStateAction<number>>;
}) {
  // HOOKS =================================================
  const fetcher = useFetcher<Task[]>();

  // STATES ================================================
  const [tasks, setTasks] = useState<Task[] | null>(null);

  // FUNCTIONS =============================================
  function handleChangeSelector(event: React.ChangeEvent<HTMLSelectElement>) {
    const taskId: number = Number(event.target.value);
    console.log(taskId);

    if (setSelectedTask) {
      setSelectedTask(taskId);
    }
  }

  // EFFECTS ===============================================
  useEffect(() => {
    fetcher.load("/resources/tasks");
  }, []);

  useEffect(() => {
    if (fetcher.data) {
      setTasks(fetcher.data);
    }
  }, [fetcher.data]);

  return (
    <select
      className="select select-bordered select-sm w-full"
      onChange={(event) => handleChangeSelector(event)}
    >
      <option disabled selected>
        Selecciona una opció
      </option>
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <option key={`${task.id}-${task.name}`} value={task.id}>
              {task.name}
            </option>
          );
        })}
    </select>
  );
}
