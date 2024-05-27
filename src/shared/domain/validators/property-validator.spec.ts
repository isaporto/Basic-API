import ValidationError from "../../../shared/errors/validation.error";
import PropertyValidator from "./property-validator";

type ExpectedRules = {
  value: any;
  property: string;
  rule: keyof PropertyValidator;
  error?: ValidationError;
  params?: any[];
};

function assertIsInvalid(expected: ExpectedRules) {
  expect(() => runRule(expected)).toThrow(expected.error);
}

function assertIsValid(expected: ExpectedRules) {
  expect(() => runRule(expected)).not.toThrow(ValidationError);
}

function runRule({
  value,
  property,
  rule,
  params = [],
}: Omit<ExpectedRules, "error">) {
  const validator = PropertyValidator.values(value, property);
  const method = validator[rule] as (...args: any[]) => PropertyValidator;
  method.apply(validator, params);
}

describe("PropertyValidator Unit Test", () => {
  test("values method", () => {
    const propertyValidator = PropertyValidator.values("test", "property name");
    expect(propertyValidator).toBeInstanceOf(PropertyValidator);
    expect(propertyValidator["value"]).toBe("test");
    expect(propertyValidator["property"]).toBe("property name");
  });

  test("required validation", () => {
    const property = "bob";
    const errorMessage = `The ${property} is required`;
    const invalidValuesArrange = ["", null, undefined];
    invalidValuesArrange.forEach((invalidValue) => {
      assertIsInvalid({
        value: invalidValue,
        property,
        rule: "required",
        error: new ValidationError(errorMessage),
      });
    });

    const validValuesArrange = ["test value", 5, true, 0, false, {}, []];
    validValuesArrange.forEach((validValue) => {
      assertIsValid({ value: validValue, property, rule: "required" });
    });
  });

  test("string validation", () => {
    const property = "joão";
    const errorMessage = `The ${property} must be a string`;
    const invalidValuesArrange = [null, undefined, 0, true, {}, []];
    invalidValuesArrange.forEach((invalidValue) => {
      assertIsInvalid({
        value: invalidValue,
        property,
        rule: "string",
        error: new ValidationError(errorMessage),
      });
    });

    const validValuesArrange = ["test value", ""];
    validValuesArrange.forEach((validValue) => {
      assertIsValid({ value: validValue, property, rule: "string" });
    });
  });

  test("inclusion validation", () => {
    const property = "evan";
    const errorMessage = `This value is not valid ${property}`;
    const validParams = [1, 2, 3, 4]
    const invalidValuesArrange = ["", undefined, 5, true, {}, []];
    invalidValuesArrange.forEach((invalidValue) => {
      assertIsInvalid({
        value: invalidValue,
        property,
        rule: "inclusion",
        error: new ValidationError(errorMessage),
        params: [validParams]
      });
    });

    const validValuesArrange = [2, 4, 3, 1];
    validValuesArrange.forEach((validValue) => {
      assertIsValid({ value: validValue, property, rule: "inclusion", params: [validParams] });
    });
  });

  it('should throw a validation error when combine two or more rules', () => {
    let validator = PropertyValidator.values(null, 'field');
    expect(() => validator.required().string()).toThrow(new ValidationError(`The field is required`));

    validator = PropertyValidator.values(5, 'field');
    expect(() => validator.required().string()).toThrow(new ValidationError(`The field must be a string`));
  })

  it('should be valid when combine two or more rules', () => {
    PropertyValidator.values('test value', 'field').required().string();
    expect.assertions(0);
  })
});
