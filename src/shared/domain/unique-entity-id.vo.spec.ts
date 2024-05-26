import { validate as uuidValidate } from "uuid";
import InvalidUuidError from "../errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";

describe("UniqueEntityId Unit Tests", () => {
  it('should throw error when id is a invalid uuid', () => {
    const idValidateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    expect(() => new UniqueEntityId('fake id')).toThrow(InvalidUuidError);
    expect(idValidateSpy).toHaveBeenCalled();
  });

  it('should accept a uuid passed in constructor', () => {
    const uuid = "e288f473-6d58-4463-82b7-dfebb65ae78e";
    const uniqueEntityId = new UniqueEntityId(uuid);
    const idValidateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    expect(uniqueEntityId.id).toBe(uuid);
    expect(idValidateSpy).toHaveBeenCalled();
  })

  it('should create a uuid when id is empty', () => {
    const uniqueEntityId = new UniqueEntityId();
    const idValidateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
    expect(uuidValidate(uniqueEntityId.id)).toBeTruthy();
    expect(idValidateSpy).toHaveBeenCalled();
  })
});