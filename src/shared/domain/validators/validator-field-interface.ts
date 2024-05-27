export type FieldsErrors = {
  [field: string]: string[];
}

export default interface ValidatorFieldInterface<PropsValidated> {
  errors: FieldsErrors;
  validatedData: PropsValidated;
  validate(data: any): void;
}