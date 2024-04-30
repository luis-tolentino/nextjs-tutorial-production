import { createTask } from "@/utils/actions";

const TaskForm = async () => {
  return (
    <form action={createTask}>
      <div className="w-full join">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type Here"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item ">
          create task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
