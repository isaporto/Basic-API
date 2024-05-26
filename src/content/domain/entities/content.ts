import UniqueEntityId from '../../../shared/domain/value object/unique-entity-id.vo';

export type ContentProperties = {
  title: string,
  description: string,
  thumbnail_url: string,
  content_url: string,
  created_at?: Date
}

export class Content {
  constructor(public readonly props: ContentProperties, public readonly id?: UniqueEntityId) {
    this.id = id || new UniqueEntityId();
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get title(){ return this.props.title };
  get description(){ return this.props.description };
  get thumbnail_url(){ return this.props.thumbnail_url };
  get content_url(){ return this.props.content_url };
  get created_at(){ return this.props.created_at };
}