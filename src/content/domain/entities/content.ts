export type ContentProperties = {
  title: string,
  description?: string,
  thumbnail_url: string,
  content_url: string,
  created_at?: Date
}

export class Content {
  constructor(public readonly props: ContentProperties) {
    this.description = this.props.description;
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get title(){ return this.props.title };

  get description(){ return this.props.description };
  private set description(value: string) { this.props.description = value ?? null };

  get thumbnail_url(){ return this.props.thumbnail_url };

  get content_url(){ return this.props.content_url };

  get created_at(){ return this.props.created_at };
}