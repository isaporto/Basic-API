import { Content, ContentProperties } from "./content";
import { omit } from "lodash";
import { validate as uuidValidate } from "uuid";

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
  });

  test("id field", () => {
    const props = {
      title: "going to the store",
      description: "normal guy normal walk",
      thumbnail_url: "none",
      content_url: "https://www.youtube.com/watch?v=iRZ2Sh5-XuM",
    };
    const contentDatas: { id?: string; props: ContentProperties }[] = [
      { props },
      { props, id: undefined },
      { props, id: null },
      { props, id: "" },
      { props, id: "2a45ef8c-987d-4253-bb62-a324a2137314" },
    ];
    contentDatas.forEach((contentData) => {
      const content = new Content(contentData.props, contentData.id);
      expect(content.id).not.toBeFalsy();
      expect(uuidValidate(content.id)).toBeTruthy();
      if (uuidValidate(contentData.id)) { expect(content.id).toBe(contentData.id) }
    });
  });


  test("getter of each non optional prop", () => {
    const props = {
      title: "Don't Starve",
      description: "some description",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://motherfuckingwebsite.com/",
    }
    const content = new Content(props);
    expect(content.title).toBe("Don't Starve");
    expect(content.description).toBe("some description");
    expect(content.thumbnail_url).toBe("https://www.pudim.com.br/");
    expect(content.content_url).toBe("https://motherfuckingwebsite.com/");
  });

  test("getter of created_at prop", () => {
    const created_at = new Date("12/12/2012");
    const props = {
      title: "Don't Starve",
      description: "some description",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://motherfuckingwebsite.com/",
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
