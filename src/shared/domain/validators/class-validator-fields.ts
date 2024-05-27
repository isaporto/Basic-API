import { validateSync } from "class-validator";
import ValidatorFieldInterface, { FieldsErrors } from "./validator-field-interface";

export class ClassValidatorFields<PropsValidated> implements ValidatorFieldInterface<PropsValidated> {
  errors: FieldsErrors = null;
  validatedData: PropsValidated = null;
  validate(data: any): boolean {
    const errors = validateSync(data);
    if (errors.length) {
      this.errors = {};
      for (const error of errors) {
        const field = error.property;
        this.errors[field] = Object.values(error.constraints);
      }
    } else {
      this.validatedData = data;
    }
    return !errors.length;
  }
}
