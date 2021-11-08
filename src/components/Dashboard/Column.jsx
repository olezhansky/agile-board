import { Card } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { Draggable } from "react-beautiful-dnd";
import Task from "./Task";

function getItemStyle(draggableStyle) {
  return {
    padding: 8,
    marginBottom: 8,
    ...draggableStyle,
  };
}

const Column = ({ section }) => {
  return (
    <div>
      {section?.tasks?.map((task, index) => (
        <Draggable draggableId={task.id} key={task.id} index={index}>
          {(provided) => {
            return (
              <Card
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(provided.draggableProps.style)}
              >
                <Task task={task} />
              </Card>
            )
          }}
        </Draggable>
      ))}
    </div>
  );
};

export default observer(Column)
