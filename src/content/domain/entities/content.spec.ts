import { Content } from "./content";
import { omit } from "lodash";

describe("Content Unit Tests", () => {
  test('Constructor of content', () => {
    let content = new Content({
      title: "Stardew Valley",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://motherfuckingwebsite.com/"
    });
    let props = omit(content.props, 'created_at');

    expect(props).toStrictEqual({
      title: "Stardew Valley",
      description: null,
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://motherfuckingwebsite.com/"
    });
  })
})