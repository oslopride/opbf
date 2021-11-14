export default {
  title: "Program page",
  name: "program",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      title: "Program content",
      name: "programContent",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
