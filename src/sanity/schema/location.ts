import { defineField, defineType } from "sanity";

export default defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      description: "e.g. Kintamani Highlands, Bali",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "hours",
      title: "Opening Hours",
      type: "string",
      description: "e.g. 09:00 - 21:00",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "world",
      title: "World",
      type: "string",
      options: {
        layout: "dropdown",
        list: [
          { title: "Samsara", value: "samsara" },
          { title: "Svvara", value: "svvara" },
          { title: "Svarga", value: "svarga" },
          { title: "Acasa", value: "acasa" },
        ],
      },
    }),
    defineField({
      name: "coordinates",
      title: "Map Coordinates",
      type: "object",
      fields: [
        { name: "lat", title: "Latitude", type: "number" },
        { name: "lng", title: "Longitude", type: "number" },
      ],
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
    select: { title: "name", subtitle: "region", media: "image" },
  },
});
