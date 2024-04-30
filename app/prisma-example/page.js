import prisma from "@/utils/db";

const prismaHandlers = async () => {
  // console.log("prisma example");
  // await prisma.task.create({
  //   data: {
  //     content: "wake up",
  //   },
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      <h1 className="text-7xl">Prisma Example</h1>
      {tasks.map((task) => {
        return (
          <h2 className="text-xl" key={task.id}>
            😁{task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExample;
