import Entity from "../../../shared/domain/entity/entity";
import UniqueEntityId from "../../../shared/domain/value object/unique-entity-id.vo";

export type ContentProperties = {
  title: string;
  description: string;
  thumbnail_url: string;
  content_url: string;
  created_at?: Date;
};

export class Content extends Entity<ContentProperties> {
  constructor(public readonly props: ContentProperties, id?: UniqueEntityId) {
    super(props, id);
    this.props.created_at = this.props.created_at ?? new Date();
  }

  update(
    title: string,
    description: string,
    thumbnail_url: string,
    content_url: string
  ) {
    this.title = title;
    this.description = description;
    this.thumbnail_url = thumbnail_url;
    this.content_url = content_url;
  }

  get title() {
    return this.props.title;
  }
  private set title(value: string) {
    this.props.title = value;
  }

  get description() {
    return this.props.description;
  }
  private set description(value: string) {
    this.props.description = value;
  }

  get thumbnail_url() {
    return this.props.thumbnail_url;
  }
  private set thumbnail_url(value: string) {
    this.props.thumbnail_url = value;
  }

  get content_url() {
    return this.props.content_url;
  }
  private set content_url(value: string) {
    this.props.content_url = value;
  }

  get created_at() {
    return this.props.created_at;
  }
}
