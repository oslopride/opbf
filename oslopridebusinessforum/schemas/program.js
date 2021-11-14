export default {
  title: "Program page",
  name: "program",
  type: "document",
  fields: [
    {
      title: "Program content",
      name: "programContent",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
