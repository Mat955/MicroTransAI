"use client";

import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormState();

  return (
    <Button
      type="submit"
      disabled={disabled || pending}
      className="bg-blue-500 hover:bg-blue-600 text-white w-full lg:w-fit"
    >
      {pending ? "Translating..." : "Translate"}
    </Button>
  );
}

export default SubmitButton;
