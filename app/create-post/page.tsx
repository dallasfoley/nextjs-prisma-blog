import createPost from "../actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const CreatePost = async () => {
  return (
    <>
      <h1 className="text-center font-semibold text-4xl m-8">Create Post</h1>
      <form
        action={createPost}
        className="flex flex-col justify-center items-center max-w-[400px] mx-auto space-x-2 mt-10 gap-8"
      >
        <input
          type="text"
          name="title"
          placeholder="Post title..."
          className="h-12 w-64 rounded-xl text-black p-3"
        />
        <textarea
          name="body"
          placeholder="Post body..."
          className="border rounded-xl text-black w-64 px-3 p-3 h-full"
          rows={6}
        />
        <button className="bg-blue-500 h-12 w-32 font-bold rounded-xl p-2 m-4">
          Submit
        </button>
        <LogoutLink className="bg-blue-500 flex justify-center items-center h-12 w-32 font-bold rounded-xl p-2 m-4">
          Sign-Out
        </LogoutLink>
      </form>
    </>
  );
};

export default CreatePost;
