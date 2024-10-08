import Link from "next/link";
import prisma from "../lib/db";

const List = async () => {
  const posts = await prisma.post.findMany();

  return (
    <ul className="">
      {posts.map((post) => (
        <li key={post.id} className="m-4 underline">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
