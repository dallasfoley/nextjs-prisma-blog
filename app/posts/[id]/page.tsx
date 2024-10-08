import Button from "@/app/(components)/button";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

const Post = async ({ params }: { params: { id: string } }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!post) notFound();

  return (
    <section className="px-7 mt-24 text-center min-h-screen">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="text-center mx-32 my-8">{post.body}</p>
      <Button />
    </section>
  );
};

export default Post;
