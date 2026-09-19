import { defineField, defineType } from "sanity";

export default defineType({
  name: "jobOpening",
  title: "Job Opening",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          { title: "Design", value: "design" },
          { title: "Hospitality", value: "hospitality" },
          { title: "Culinary", value: "culinary" },
          { title: "Music & Sound", value: "music" },
          { title: "Operations", value: "operations" },
          { title: "Marketing", value: "marketing" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          { title: "Full-time", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Contract", value: "contract" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Date, new",
      name: "dateDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "department" },
  },
});
