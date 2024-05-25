import { Content } from "./content";
import { omit } from "lodash";

describe("Content Unit Tests", () => {
  test('Constructor of content', () => {
    let content = new Content({
      title: "Stardew Valley",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://motherfuckingwebsite.com/"
    });
    let props = omit(content.props, "created_at");
    expect(props).toStrictEqual({
      title: "Stardew Valley",
      description: null,
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://motherfuckingwebsite.com/"
    });
    expect(content.props.created_at).toBeInstanceOf(Date);

    let created_at = new Date('12/12/2012');
    content = new Content({
      title: "To the Moon",
      description: "A game to cry",
      thumbnail_url: "https://pointerpointer.com/",
      content_url: "https://store.steampowered.com/app/206440/To_the_Moon/",
      created_at
    });
    expect(content.props).toStrictEqual({
      title: "To the Moon",
      description: "A game to cry",
      thumbnail_url: "https://pointerpointer.com/",
      content_url: "https://store.steampowered.com/app/206440/To_the_Moon/",
      created_at
    });

    content = new Content({
      title: "Life is Strange",
      description: undefined,
      thumbnail_url: "https://wallpapers.com/images/hd/life-is-strange-max-palm-open-x5uaalrzdsvzn8up.jpg",
      content_url: "https://store.steampowered.com/app/319630/Life_is_Strange__Episode_1/",
      created_at: null
    });
    props = omit(content.props, "created_at");
    expect(props).toStrictEqual({
      title: "Life is Strange",
      description: null,
      thumbnail_url: "https://wallpapers.com/images/hd/life-is-strange-max-palm-open-x5uaalrzdsvzn8up.jpg",
      content_url: "https://store.steampowered.com/app/319630/Life_is_Strange__Episode_1/"
    })
    expect(content.props.created_at).toBeInstanceOf(Date);
  })
})