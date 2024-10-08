import { deepFreeze } from "../utils/deep-freeze";

export abstract class ValueObject<Value = any> {
  protected readonly _value: Value;

  constructor(value: Value) {
    this._value = deepFreeze(value);
  }

  get value() {
    return this._value;
  }
};

export default ValueObject;