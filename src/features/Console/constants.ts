export const jsonFieldValidator = (value: string):string | undefined => {
   try {
      JSON.parse(value);
  } catch (e: unknown) {
      return (e as Error).message;
  }
}