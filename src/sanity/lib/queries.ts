import { client } from "./client";
import { urlFor } from "./image";

export async function getEvents() {
  return client.fetch(`
    *[_type == "event"] | order(date desc) {
      _id,
      title,
      slug,
      category,
      date,
      time,
      location,
      capacity,
      entry,
      description,
      image,
      featured
    }
  `);
}

export async function getEventBySlug(slug) {
  return client.fetch(
    `
    *[_type == "event" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      date,
      time,
      location,
      capacity,
      entry,
      description,
      image,
      featured
    }
  `,
    { slug }
  );
}

export async function getArticles() {
  return client.fetch(`
    *[_type == "article"] | order(date desc) {
      _id,
      title,
      slug,
      tag,
      author,
      date,
      excerpt,
      image
    }
  `);
}

export async function getArticleBySlug(slug) {
  return client.fetch(
    `
    *[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      tag,
      author,
      date,
      excerpt,
      body,
      image
    }
  `,
    { slug }
  );
}

export async function getJobOpenings() {
  return client.fetch(`
    *[_type == "jobOpening" && active == true] | order(_createdAt desc) {
      _id,
      title,
      slug,
      department,
      location,
      type,
      description
    }
  `);
}

export async function getJobBySlug(slug) {
  return client.fetch(
    `
    *[_type == "jobOpening" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      department,
      location,
      type,
      description,
      responsibilities,
      requirements
    }
  `,
    { slug }
  );
}

export async function getLocations() {
  return client.fetch(`
    *[_type == "location"] | order(order asc) {
      _id,
      name,
      slug,
      region,
      address,
      phone,
      hours,
      image,
      world
    }
  `);
}

export async function getCollaborations() {
  return client.fetch(`
    *[_type == "collaboration"] | order(order asc) {
      _id,
      category,
      title,
      description,
      image,
      link
    }
  `);
}

export async function getWorlds() {
  return client.fetch(`
    *[_type == "world"] | order(_createdAt asc) {
      _id,
      name,
      slug,
      tagline,
      disciplines,
      description,
      image,
      specifications
    }
  `);
}

export async function getProducts() {
  return client.fetch(`
    *[_type == "product"] | order(order asc) {
      _id,
      name,
      description,
      price,
      image,
      world
    }
  `);
}

export async function getContactInfo() {
  return client.fetch(`
    *[_type == "contactInfo"][0] {
      _id,
      emails,
      addresses,
      hours,
      inquiryTypes
    }
  `);
}
