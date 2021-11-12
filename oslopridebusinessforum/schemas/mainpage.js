export default {
  title: "Index",
  type: "document",
  name: "mainpage",
  fields: [
    { title: "Hero banner image", name: "heroImage", type: "image" },
    { title: "Hero banner text", name: "heroText", type: "string" },
    {
      title: "Hero banner description",
      name: "heroDescription",
      type: "string",
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
