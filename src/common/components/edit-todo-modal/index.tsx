"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditTodoForm, type EditTodoFormProps } from "./edit-todo-form";

export const EditTodoModal = ({
  children,
  ...props
}: React.PropsWithChildren<EditTodoFormProps>) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.isNew ? "Create New Task" : "Edit Task"}</DialogTitle>
          <DialogDescription>
            {props.isNew
              ? "Fill in the details below to create a new task"
              : "Make changes to the task details below"}
          </DialogDescription>
        </DialogHeader>

        <EditTodoForm {...props} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
