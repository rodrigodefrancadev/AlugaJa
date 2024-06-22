import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return <h1>Hello {hello.greeting}</h1>;
}
