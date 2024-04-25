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
import Image from "next/image";
import translateIcon from "../assets/images/translate-icon.png";

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
      <div className="flex space-x-2">
        <div className="flex items-center group cursor-pointer border rounded-md w-fit px-3 py-2 bg-[#E7F0FE] mb-5">
          <Image
            src={translateIcon}
            alt="Translate Icon"
            width="30"
            height="30"
          />
          <p className="text-sm font-medium text-blue-500 group-hover:underline ml-2 mt-1">
            Text
          </p>
        </div>
      </div>

      <form action={formAction}>
        <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
          <div className="flex-1 sapce-y-2">
            <Select name="inputLanguage" defaultValue="auto">
              <SelectTrigger className="w-[280px] border-none text-blue-500 font-bold">
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
          <div className="flex-1 sapce-y-2">
            <Select name="outputLanguage" defaultValue="pl">
              <SelectTrigger className="w-[280px] border-none text-blue-500 font-bold">
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
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TranslationForm;
