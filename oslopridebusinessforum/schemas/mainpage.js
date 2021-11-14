export default {
  title: "Main page",
  type: "document",
  name: "mainpage",
  fieldsets: [
    {
      name: "hero",
      title: "Hero banner",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: "program",
      title: "Program section",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: "footer",
      title: "Footer section",
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
      title: "Body",
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Program image",
      name: "programImage",
      type: "image",
      fieldset: "program",
    },
    {
      title: "Title",
      name: "programTitle",
      type: "string",
      fieldset: "program",
    },
    {
      title: "Subheading",
      name: "programSubheading",
      type: "string",
      fieldset: "program",
    },
    {
      title: "Content",
      name: "programContent",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "program",
    },
    {
      title: "Program buttons",
      name: "programButtons",
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
      fieldset: "program",
    },
    {
      title: "Partner logos",
      name: "partners",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { title: "Logo image", type: "image", name: "logo" },
            { title: "Partner URL", type: "string", name: "url" },
          ],
        },
      ],
    },
    {
      title: "Facebook link",
      name: "facebookLink",
      type: "string",
      fieldset: "footer",
    },
    {
      title: "Instagram link",
      name: "instaLink",
      type: "string",
      fieldset: "footer",
    },
  ],
};
