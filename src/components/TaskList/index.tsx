import { useState } from "react";

import { Container, Content, Header, IsEmpty, List, Section } from "./styles";

interface Task {
  id: number;
  title: string;
}

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [handleDelete, setHandleDelete] = useState(Boolean);

  const handleCreateNewTask = () => {
    if (newTaskTitle === "") return;
    else {
      setTasks((value) => [
        ...value,
        {
          id: Math.floor(Math.random() * Number(new Date())),
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
          <button
            type="submit"
            onClick={() => {
              handleCreateNewTask();
              setHandleDelete(false);
            }}
          >
            <img src="./icons/ic-add.png" alt="add" />
          </button>
        </Header>

        {tasks.length ? (
          <Content>
            <ul>
              {tasks.map((task) => (
                <List key={task.id} isDelete={handleDelete}>
                  <p>{task.title}</p>

                  <button
                    type="button"
                    data-testid="remove-task-button"
                    onClick={() => {
                      handleRemoveTask(task.id);
                      setHandleDelete(true);
                    }}
                  >
                    <img src="./icons/ic-delete.png" alt="delete" />
                  </button>
                </List>
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
