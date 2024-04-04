import { auth } from "@clerk/nextjs/server";
import TranslationForm from "../components/TranslationForm";

export type TranslationLanguage = {
  translation: {
    [key: string]: {
      name: string;
      nativeName: string;
      dir: "ltr" | "rtl";
    };
  };
};

async function TranslatePage() {
  auth().protect();

  const { userId } = auth();
  if (!userId) throw new Error("User not logged in");

  const languagesEndpoint =
    "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0";

  const response = await fetch(languagesEndpoint, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  const languages = (await response.json()) as TranslationLanguage;

  return (
    <div>
      <TranslationForm languages={languages} />
    </div>
  );
}

export default TranslatePage;