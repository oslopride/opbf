export default {
  title: "Program page",
  name: "program",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fieldsets: [
    {
      name: "hero",
      title: "Hero banner",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      title: "Hero banner image",
      name: "heroImage",
      type: "image",
      fieldset: "hero",
    },
    {
      title: "Hero banner title",
      name: "heroText",
      type: "string",
      fieldset: "hero",
    },
    {
      title: "Hero banner description",
      name: "heroDescription",
      type: "string",
      fieldset: "hero",
    },
    {
      title: "Hero buttons",
      name: "heroButtons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { title: "Button text", name: "buttonText", type: "string" },
            { title: "Button URL", name: "buttonLink", type: "url" },
          ],
        },
      ],
      fieldset: "hero",
    },
    {
      title: "Program content",
      name: "programContent",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
};
