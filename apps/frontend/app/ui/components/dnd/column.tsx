import { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/react";
import { CollisionPriority } from "@dnd-kit/abstract";

type ColumnProps = {
  children: ReactNode;
  id: string;
  className: string;
};

export function Column({ children, id, className }: ColumnProps) {
  const { isDropTarget, ref } = useDroppable({
    id,
    type: "column",
    accept: "item",
    collisionPriority: CollisionPriority.Low,
  });
  const style = isDropTarget ? { background: "#00000030" } : undefined;
  const classValue = `Class ${className}`;

  return (
    <div className={classValue} ref={ref} style={style}>
      {children}
    </div>
  );
}
