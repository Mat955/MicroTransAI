import { auth } from "@clerk/nextjs/server";

function TranslatePage() {
  auth().protect();

  return <div>TranslatePage</div>;
}

export default TranslatePage;
