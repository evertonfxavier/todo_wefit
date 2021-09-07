import { useState } from "react";
import { Container, Content, Header, IsEmpty, Section } from "./styles";
import { ListItem } from "../ListItem";

export interface Task {
  id: number;
  title: string;
}

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

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
    setTimeout(() => {
      setTasks(removeItem);
    }, 600);
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
          <button type="submit" onClick={() => handleCreateNewTask()}>
            <img src="./icons/ic-add.png" alt="add" />
          </button>
        </Header>

        {tasks.length ? (
          <Content>
            <ul>
              {tasks.map((task) => (
                <ListItem
                  {...task}
                  key={task.id}
                  handleRemoveTask={handleRemoveTask}
                />
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