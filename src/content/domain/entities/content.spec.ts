import { Content } from "./content";
import { omit } from "lodash";

describe("Content Unit Tests", () => {
  test("Constructor of content", () => {
    let content = new Content({
      title: "Stardew Valley",
      description: "Farming game",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://motherfuckingwebsite.com/",
    });
    const props = omit(content.props, "created_at");
    expect(props).toStrictEqual({
      title: "Stardew Valley",
      description: "Farming game",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://motherfuckingwebsite.com/",
    });
    expect(content.props.created_at).toBeInstanceOf(Date);

    const created_at = new Date();
    content = new Content({
      title: "To the moon",
      description: "A game to cry over",
      thumbnail_url: "https://pointerpointer.com/",
      content_url: "localhost:400",
      created_at
    });
    expect(content.props).toStrictEqual({
      title: "To the moon",
      description: "A game to cry over",
      thumbnail_url: "https://pointerpointer.com/",
      content_url: "localhost:400",
      created_at
    });
  });

  test("getter of title prop", () => {
    const content = new Content({
      title: "Don't Starve",
      description: "some description",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://www.pudim.com.br/",
    });
    expect(content.title).toBe("Don't Starve");
  });

  test("getter of description prop", () => {
    const content = new Content({
      title: "Don't Starve",
      description: "some description",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://www.pudim.com.br/",
    });
    expect(content.description).toBe("some description");
  });

  test("getter of thumbnail_url prop", () => {
    const content = new Content({
      title: "Don't Starve",
      description: "some description",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://www.pudim.com.br/",
    });
    expect(content.thumbnail_url).toBe("https://www.pudim.com.br/");
  });

  test("getter of content_url prop", () => {
    const content = new Content({
      title: "Don't Starve",
      description: "some description",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://www.pudim.com.br/",
    });
    expect(content.thumbnail_url).toBe("https://www.pudim.com.br/");
  });

  test("getter of created_at prop", () => {
    const created_at = new Date('12/12/2012');
    const props = {
      title: "Don't Starve",
      description: "some description",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://www.pudim.com.br/",
    };
    let content = new Content({
      ...props,
      created_at,
    });
    expect(content.created_at).toBe(created_at);

    content = new Content(props);
    expect(content.created_at).toBeInstanceOf(Date);
  });
});
