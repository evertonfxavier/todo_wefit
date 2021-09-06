import { useState } from "react";

import { Container, Content, Header, IsEmpty, Section } from "./styles";

interface Task {
  id: number;
  title: string;
}

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleCreateNewTask = () => {
    const idRadom = Number(new Date());

    if (newTaskTitle === "") return;
    else {
      setTasks((value) => [
        ...value,
        {
          id: idRadom,
          title: newTaskTitle,
        },
      ]);
    }

    setNewTaskTitle("");
  };

  const handleRemoveTask = (id: number) => {
    const removeItem = [...tasks].filter((task) => task.id !== id);

    setTasks(removeItem);
  };

  return (
    <Section>
      <Container>
        <Header>
          <input
            type="text"
            placeholder="Digite"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" onClick={handleCreateNewTask}>
            <img src="./icons/ic-add.png" alt="add" />
          </button>
        </Header>

        {tasks.length ? (
          <Content>
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <p>{task.title}</p>

                  <button
                    type="button"
                    data-testid="remove-task-button"
                    onClick={() => handleRemoveTask(task.id)}
                  >
                    <img src="./icons/ic-delete.png" alt="delete" />
                  </button>
                </li>
              ))}
            </ul>
          </Content>
        ) : (
          <IsEmpty>
            <span>Nenhum item cadastrado</span>
          </IsEmpty>
        )}
      </Container>
    </Section>
  );
};
