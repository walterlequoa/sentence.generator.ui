import { PartOfSpeech } from "../Enum/PartOfSpeech";

export const PartOfSpeechModelList: {
    value: string;
  }[] = Object.values(PartOfSpeech)
    .filter((value) => typeof value === "string")
    .map((value) => ({ value: value as string }));