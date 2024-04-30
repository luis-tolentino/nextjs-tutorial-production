import Link from "next/link";

const pages = [
  {
    name: "client",
    id: 1,
    href: "/client",
  },
  {
    name: "drinks",
    id: 2,
    href: "/drinks",
  },
  {
    name: "prisma-example",
    id: 3,
    href: "/prisma-example",
  },
  {
    name: "tasks",
    id: 4,
    href: "/tasks",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4 flex ">
      <div className="navbar px-8 max-w-6xl flex-col sm:flex-row w-auto ">
        <Link href="/" className="btn btn-primary">
          Next JS
        </Link>
      </div>
      <ul className="menu menu-horizontal md:ml-8 items-center">
        {pages.map((page) => {
          return (
            <li key={page.id} className="px-2">
              <Link href={page.href} className="capitalize">
                {page.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
