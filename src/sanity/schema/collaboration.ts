import { defineField, defineType } from "sanity";

export default defineType({
  name: "collaboration",
  title: "Collaboration",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          { title: "Acoustic Partners", value: "acoustic" },
          { title: "Culinary Alliance", value: "culinary" },
          { title: "Craft Residency", value: "craft" },
          { title: "Design Partnership", value: "design" },
          { title: "Cultural Exchange", value: "cultural" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      title: "External Link",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
