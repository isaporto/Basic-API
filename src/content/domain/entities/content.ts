import PropertyValidator from "../../../shared/domain/validators/property-validator";
import Entity from "../../../shared/domain/entity/entity";
import UniqueEntityId from "../../../shared/domain/value object/unique-entity-id.vo";

export type ContentProperties = {
  title: string;
  description: string;
  category: string;
  thumbnail_url: string;
  content_url: string;
  created_at?: Date;
};

export class Content extends Entity<ContentProperties> {
  constructor(public readonly props: ContentProperties, id?: UniqueEntityId) {
    Content.validate(props);
    super(props, id);
    this.props.created_at = this.props.created_at ?? new Date();
  }

  static categories = ["game", "video", "artwork", "music"]

  update(
    title: string,
    description: string,
    category: string,
    thumbnail_url: string,
    content_url: string
  ) {
    Content.validate({
      title,
      description,
      category,
      thumbnail_url,
      content_url,
    });
    this.title = title;
    this.description = description;
    this.category = category;
    this.thumbnail_url = thumbnail_url;
    this.content_url = content_url;
  }

  static validate(props: Omit<ContentProperties, "created_at">) {
    PropertyValidator.values(props.title, "title").required().string();
    PropertyValidator.values(props.description, "description")
      .required()
      .string();
    PropertyValidator.values(props.category, "category").required().string().inclusion(Content.categories);
    PropertyValidator.values(props.thumbnail_url, "thumbnail_url")
      .required()
      .string();
    PropertyValidator.values(props.content_url, "content_url")
      .required()
      .string();
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

  get category() {
    return this.props.category;
  }
  private set category(value: string) {
    this.props.category = value;
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
