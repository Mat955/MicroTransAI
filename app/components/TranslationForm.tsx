"use client";

import translate from "@/actions/translate";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { TranslationLanguage } from "../translate/page";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const initialState = {
  inputLanguage: "auto",
  input: "",
  outputLanguage: "pl",
  output: "",
};

export type State = typeof initialState;

function TranslationForm({ languages }: { languages: TranslationLanguage }) {
  const [state, formAction] = useFormState(translate, initialState);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (state.output) setOutput(state.output);
  }, [state]);

  return (
    <div>
      <form action={formAction}>
        <div>
          <Select name="inputLanguage" defaultValue="auto">
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Want us to figure out?</SelectLabel>

                <SelectItem key="auto" value="auto">
                  Auto Detects
                </SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Languages</SelectLabel>
                {Object.entries(languages.translation).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Type your message here"
            className="min-h-32 text-xl"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <Select name="outputLanguage" defaultValue="pl">
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Want us to figure out?</SelectLabel>

                <SelectItem key="auto" value="auto">
                  Auto Detects
                </SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Languages</SelectLabel>
                {Object.entries(languages.translation).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Type your message here"
            className="min-h-32 text-xl"
            name="output"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TranslationForm;
