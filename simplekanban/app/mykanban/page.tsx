import NewTasks from "./NewTask";
import InProgressTask from "./InProgressTask";
import CompletedTask from "./CompletedTask";
import AddTask from "./add";

export default function Home() {
    return (
      <main>
        <NewTasks />
        <InProgressTask />
        <CompletedTask />
        <AddTask />
      </main>
    );
  }