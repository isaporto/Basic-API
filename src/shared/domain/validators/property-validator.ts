import ValidationError from "../../../shared/errors/validation.error"

export default class PropertyValidator {
  private constructor(
    private value: any,
    private property: string
  ) {}

  static values(value: any, property: string) {
    return new PropertyValidator(value, property)
  }

  required(){
    if (this.value === null || this.value === undefined || this.value === "") {
      throw new ValidationError(`The ${this.property} is required`);
    };
    return this;
  }

  string(){
    if (typeof this.value !== 'string') {
      throw new ValidationError(`The ${this.property} must be a string`);
    };
    return this;
  }

  inclusion(options: any[]) {
    if (!options.includes(this.value)) {
      throw new ValidationError(`This value is not valid ${this.property}`);
    }
    return this;
  }
}