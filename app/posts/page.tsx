import { Suspense } from "react";
import Loading from "./[id]/loading";
import List from "../(components)/list";

const Posts = async () => {
  return (
    <main className="min-h-screen m-12 text-lg text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 m-12">All Posts</h1>
      <Suspense fallback={<Loading />}>
        <List />
      </Suspense>
    </main>
  );
};

export default Posts;
