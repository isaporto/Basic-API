import { validate as uuidValidate } from "uuid";
import UniqueEntityId from "../value object/unique-entity-id.vo";
import Entity from "./entity";

class StubEntity extends Entity<{ prop1: string, prop2: boolean }> {};

describe("Entity Unit Tests", () => {
  const props = {prop1: 'Test', prop2: false};

  it('should set props and id', () => {
    const entity = new StubEntity(props);
    expect(entity.props).toStrictEqual(props);
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    expect(uuidValidate(entity.id)).toBeTruthy();
  });

  it('should accept a valid uuid', () => {
    const uniqueEntityId = new UniqueEntityId();
    const entity = new StubEntity(props, uniqueEntityId);
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    expect(entity.id).toBe(uniqueEntityId.value);
  })

  it('should convert Entity instace to a JavaScript Object', () => {
    const entity = new StubEntity(props);
    expect(entity.toJSON()).toStrictEqual({
      id: entity.id,
      ...props
    })
  })
});