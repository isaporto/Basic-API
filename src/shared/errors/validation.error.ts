export default class ValidationError extends Error {
  constructor(message?: string) {
    super(message || "This property is invalid");
    this.name = "Invalid property";
  }
}