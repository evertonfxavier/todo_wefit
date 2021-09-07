import { useState } from "react";

import { Task } from "../TaskList";

import { Container } from "./styles";

interface ListItemProps extends Task {
  handleRemoveTask: (id: number) => void;
}

export const ListItem: React.FC<ListItemProps> = (task) => {
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <Container key={task.id} isDeleted={isDeleted}>
      <p>{task.title}</p>

      <button
        type="button"
        data-testid="remove-task-button"
        onClick={() => {
          task.handleRemoveTask(task.id);
          setIsDeleted(true);
        }}
      >
        <img src="./icons/ic-delete.png" alt="delete" />
      </button>
    </Container>
  );
};

export default ListItem;
