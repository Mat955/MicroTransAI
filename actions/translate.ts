"use server";

import { State } from "@/app/components/TranslationForm";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";
import { v4 } from "uuid";

const key = process.env.AZURE_TEXT_TRANSLATION_KEY;
const endpoint = process.env.AZURE_TEXT_TRANSLATION;
const location = process.env.AZURE_TEXT_LOCATION;

async function translate(prevState: State, formData: FormData) {
  auth().protect();

  const { userId } = auth();
  if (!userId) throw new Error("User not found");

  const rawFormData = {
    input: formData.get("input") as string,
    inputLanguage: formData.get("inputLanguage") as string,
    outputLanguage: formData.get("outputLanguage") as string,
    output: formData.get("output") as string,
  };

  const response = await axios({
    baseUrl: endpoint,
    url: "/translate",
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": key!,
      "Ocp-Apim-Subscription-Region": location!,
      "Content-Type": "application/json",
      "X-ClientTraceId": v4().toString(),
    },
    params: {
      "api-version": "3.0",
      from:
        rawFormData.inputLanguage === "auto" ? null : rawFormData.inputLanguage,
      to: rawFormData.outputLanguage,
    },
  });
}

export default translate;
