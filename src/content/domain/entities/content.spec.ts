import { Content } from "./content"

describe("Content Unit Tests", () => {
  test('Constructor of content', () => {
    const created_at = new Date();
    const content = new Content({
      title: "Stardew Valley",
      description: "Farming game",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://motherfuckingwebsite.com/",
      created_at,
    });
    expect(content.props).toStrictEqual({
      title: "Stardew Valley",
      description: "Farming game",
      thumbnail_url: "https://www.pudim.com.br/",
      content_url: "https://motherfuckingwebsite.com/",
      created_at,
    });
  })
})