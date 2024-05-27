import { Content, ContentProperties } from "./content";
import { omit } from "lodash";
import UniqueEntityId from "../../../shared/domain/value object/unique-entity-id.vo";

describe("Content Unit Tests", () => {

  const props = {
    title: "Stardew Valley",
    description: "Farming game",
    category: 'game',
    thumbnail_url: "https://www.pudim.com.br/",
    content_url: "https://motherfuckingwebsite.com/",
  }

  beforeEach(() => {
    Content.validate = jest.fn();
  })

  test("Constructor of content", () => {
    let content = new Content(props);
    const propsDateOmitted = omit(content.props, "created_at");

    expect(Content.validate).toHaveBeenCalledTimes(1);
    expect(propsDateOmitted).toStrictEqual({
      title: "Stardew Valley",
      description: "Farming game",
      category: 'game',
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://motherfuckingwebsite.com/",
    });
    expect(content.props.created_at).toBeInstanceOf(Date);
  });

  test("id field", () => {
    const contentDatas: { id?: any; props: ContentProperties }[] = [
      { props },
      { props, id: undefined },
      { props, id: null },
      { props, id: "" },
      { props, id: new UniqueEntityId() },
    ];
    contentDatas.forEach((contentData) => {
      const content = new Content(contentData.props, contentData.id);
      expect(content.id).not.toBeFalsy();
      expect(content.uniqueEntityId).not.toBeFalsy();
      expect(typeof content.id).toBe('string');
      expect(content.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    });
  });


  test("getter of each non optional prop", () => {
    const content = new Content(props);
    expect(content.title).toBe("Stardew Valley");
    expect(content.description).toBe("Farming game");
    expect(content.category).toBe("game");
    expect(content.thumbnail_url).toBe("https://www.pudim.com.br/");
    expect(content.content_url).toBe("https://motherfuckingwebsite.com/");
  });

  test("getter of created_at prop", () => {
    const created_at = new Date("12/12/2012");
    let content = new Content({
      ...props,
      created_at,
    });
    expect(content.created_at).toBe(created_at);

    content = new Content(props);
    expect(content.created_at).toBeInstanceOf(Date);
  });

  it('should update a content', () => {
    const content = new Content(props);
    const propsDateOmitted = omit(content.props, "created_at");

    expect(propsDateOmitted).toStrictEqual({
      title: "Stardew Valley",
      description: "Farming game",
      category: 'game',
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://motherfuckingwebsite.com/",
    });

    content.update("Everything's Alright", "A music to cry over", 'music', "https://pointerpointer.com/", "https://www.youtube.com/watch?v=nIZxh_nc64w");

    expect(Content.validate).toHaveBeenCalledTimes(2);
    expect(content.title).toBe("Everything's Alright");
    expect(content.description).toBe("A music to cry over");
    expect(content.category).toBe("music");
    expect(content.thumbnail_url).toBe("https://pointerpointer.com/");
    expect(content.content_url).toBe("https://www.youtube.com/watch?v=nIZxh_nc64w");
  })
});
