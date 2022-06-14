export default {
  title: "Team",
  name: "team",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    { title: "Page title", name: "pageTitle", type: "string" },
    {
      type: "array",
      title: "Team members",
      name: "teamMembers",
      of: [
        {
          title: "Team member name",
          type: "object",
          fields: [
            { title: "Member image", name: "image", type: "image" },
            {
              title: "Name",
              name: "fullName",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Pronouns",
              name: "pronouns",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Role",
              name: "role",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Email",
              name: "email",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
