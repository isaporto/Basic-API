import ValidationError from "../../../shared/errors/validation.error";
import { Content } from "./content";

describe("Content Integration Tests", () => {
  describe("create method", () => {
    function assertIsInvalid(
      props: any,
      property: string,
      invalidValues: any[],
      messageError: string
    ) {
      invalidValues.forEach((invalidValue) => {
        expect(
          () => new Content({ ...props, [`${property}`]: invalidValue })
        ).toThrow(new ValidationError(messageError));
      });
    }

    it("should be invalid Content using title property", () => {
      const props = {
        description: "Farming game",
        thumbnail_url: "https://www.pudim.com.br/",
        content_url: "https://motherfuckingwebsite.com/",
      };
      const invalidValues = [null, undefined, ""];
      assertIsInvalid(props, "title", invalidValues, "The title is required");

      const invalidStringValues = [1, true, [], {}];
      assertIsInvalid(
        props,
        "title",
        invalidStringValues,
        "The title must be a string"
      );
    });

    it("should be invalid Content using description property", () => {
      const props = {
        title: "Stardew Valley",
        thumbnail_url: "https://www.pudim.com.br/",
        content_url: "https://motherfuckingwebsite.com/",
      };
      const invalidValues = [null, undefined, ""];
      assertIsInvalid(
        props,
        "description",
        invalidValues,
        "The description is required"
      );

      const invalidStringValues = [1, true, [], {}];
      assertIsInvalid(
        props,
        "description",
        invalidStringValues,
        "The description must be a string"
      );
    });

    it("should be invalid Content using thumbnail_url property", () => {
      const props = {
        title: "Stardew Valley",
        description: "Farming game",
        content_url: "https://motherfuckingwebsite.com/",
      };
      const invalidValues = [null, undefined, ""];
      assertIsInvalid(
        props,
        "thumbnail_url",
        invalidValues,
        "The thumbnail_url is required"
      );

      const invalidStringValues = [1, true, [], {}];
      assertIsInvalid(
        props,
        "thumbnail_url",
        invalidStringValues,
        "The thumbnail_url must be a string"
      );
    });

    it("should be invalid Content using content_url property", () => {
      const props = {
        title: "Stardew Valley",
        description: "Farming game",
        thumbnail_url: "https://www.pudim.com.br/",
      };
      const invalidValues = [null, undefined, ""];
      assertIsInvalid(
        props,
        "content_url",
        invalidValues,
        "The content_url is required"
      );

      const invalidStringValues = [1, true, [], {}];
      assertIsInvalid(
        props,
        "content_url",
        invalidStringValues,
        "The content_url must be a string"
      );
    });

    it("should be a valid Content", () => {
      expect.assertions(0);
      new Content({
        title: "Stardew Valley",
        description: "Farming game",
        thumbnail_url: "https://www.pudim.com.br/",
        content_url: "https://motherfuckingwebsite.com/",
      });
    });
  });

  describe("update method", () => {
    it("should be invalid Content using title property", () => {
      function assertTitleIsInvalid(
        props: any,
        invalidValue: any,
        messageError: string
      ) {
        const content = new Content(props);
        const { description, thumbnail_url, content_url } = props;
        expect(() =>
          content.update(invalidValue, description, thumbnail_url, content_url)
        ).toThrow(new ValidationError(messageError));
      }
      const props = {
        title: "Stardew Valley",
        description: "Farming game",
        thumbnail_url: "https://www.pudim.com.br/",
        content_url: "https://motherfuckingwebsite.com/",
      };

      const invalidValues = [null, undefined, ""];
      invalidValues.forEach((invalidValue) => {
        assertTitleIsInvalid(props, invalidValue, "The title is required");
      });

      const invalidStringValues = [1, true, [], {}];
      invalidStringValues.forEach((invalidValue) => {
        assertTitleIsInvalid(props, invalidValue, "The title must be a string");
      });
    });

    it("should be invalid Content using description property", () => {
      function assertDescIsInvalid(
        props: any,
        invalidValue: any,
        messageError: string
      ) {
        const content = new Content(props);
        const { title, thumbnail_url, content_url } = props;
        expect(() =>
          content.update(title, invalidValue, thumbnail_url, content_url)
        ).toThrow(new ValidationError(messageError));
      }
      const props = {
        title: "Stardew Valley",
        description: "Farming game",
        thumbnail_url: "https://www.pudim.com.br/",
        content_url: "https://motherfuckingwebsite.com/",
      };

      const invalidValues = [null, undefined, ""];
      invalidValues.forEach((invalidValue) => {
        assertDescIsInvalid(props, invalidValue, "The description is required");
      });

      const invalidStringValues = [1, true, [], {}];
      invalidStringValues.forEach((invalidValue) => {
        assertDescIsInvalid(
          props,
          invalidValue,
          "The description must be a string"
        );
      });
    });

    it("should be invalid Content using thumbnail_url property", () => {
      function assertThumbIsInvalid(
        props: any,
        invalidValue: any,
        messageError: string
      ) {
        const content = new Content(props);
        const { title, description, content_url } = props;
        expect(() =>
          content.update(title, description, invalidValue, content_url)
        ).toThrow(new ValidationError(messageError));
      }
      const props = {
        title: "Stardew Valley",
        description: "Farming game",
        thumbnail_url: "https://www.pudim.com.br/",
        content_url: "https://motherfuckingwebsite.com/",
      };

      const invalidValues = [null, undefined, ""];
      invalidValues.forEach((invalidValue) => {
        assertThumbIsInvalid(
          props,
          invalidValue,
          "The thumbnail_url is required"
        );
      });

      const invalidStringValues = [1, true, [], {}];
      invalidStringValues.forEach((invalidValue) => {
        assertThumbIsInvalid(
          props,
          invalidValue,
          "The thumbnail_url must be a string"
        );
      });
    });

    it("should be invalid Content using content_url property", () => {
      function assertContentIsInvalid(
        props: any,
        invalidValue: any,
        messageError: string
      ) {
        const content = new Content(props);
        const { title, description, thumbnail_url } = props;
        expect(() =>
          content.update(title, description, thumbnail_url, invalidValue)
        ).toThrow(new ValidationError(messageError));
      }
      const props = {
        title: "Stardew Valley",
        description: "Farming game",
        thumbnail_url: "https://www.pudim.com.br/",
        content_url: "https://motherfuckingwebsite.com/",
      };

      const invalidValues = [null, undefined, ""];
      invalidValues.forEach((invalidValue) => {
        assertContentIsInvalid(
          props,
          invalidValue,
          "The content_url is required"
        );
      });

      const invalidStringValues = [1, true, [], {}];
      invalidStringValues.forEach((invalidValue) => {
        assertContentIsInvalid(
          props,
          invalidValue,
          "The content_url must be a string"
        );
      });
    });

    it("should be a valid Content", () => {
      expect.assertions(0);
      const content = new Content({
        title: "Stardew Valley",
        description: "Farming game",
        thumbnail_url: "https://www.pudim.com.br/",
        content_url: "https://motherfuckingwebsite.com/",
      });
      content.update(
        "To the moon",
        "A game to cry over",
        "https://pointerpointer.com/",
        "https://store.steampowered.com/app/206440/To_the_Moon/"
      );
    });
  });
});
