import { MutableState, Tools } from "final-form";
import { IFormValues } from "./interfaces";

export const jsonFieldValidator = (value: string):string | undefined => {
   try {
      JSON.parse(value);
  } catch (e: unknown) {
      return (e as Error).message;
  }
}

export const updateValue = (
   args: any[],
   state: MutableState<IFormValues>,
   tools: Tools<IFormValues>
 ) => {
   const [name, value] = args;
 
   tools.changeValue(state, name, () => value);
 };