// import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import TaskFormCustom from "@/components/TaskFormCustom";

// add the following export to force the page to be dynamic
export const dynamic = "force-dynamic";

const Tasks = () => {
  return (
    <section className="justify-center">
      {/* <TaskForm /> */}
      <TaskFormCustom />
      <TaskList />
    </section>
  );
};

export default Tasks;
