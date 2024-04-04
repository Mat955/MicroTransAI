import { auth } from "@clerk/nextjs/server";

function TranslatePage() {
  auth().protect();

  const { userId } = auth();
  if (!userId) throw new Error("User not logged in");

  return <div></div>;
}

export default TranslatePage;
