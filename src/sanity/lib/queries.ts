import { client } from "./client";
import { urlFor } from "./image";

export async function getEvents() {
  try {
    return await client.fetch(`
      *[_type == "event"] | order(date desc) {
        _id, title, slug, category, date, time, location, capacity, entry, description, image, featured
      }
    `);
  } catch (e) {
    console.error("getEvents failed:", e.message);
    return [];
  }
}

export async function getEventBySlug(slug) {
  try {
    return await client.fetch(
      `*[_type == "event" && slug.current == $slug][0]{_id, title, slug, category, date, time, location, capacity, entry, description, image, featured}`,
      { slug }
    );
  } catch (e) {
    console.error("getEventBySlug failed:", e.message);
    return null;
  }
}

export async function getArticles() {
  try {
    return await client.fetch(`
      *[_type == "article"] | order(date desc) {
        _id, title, slug, tag, author, date, excerpt, image
      }
    `);
  } catch (e) {
    console.error("getArticles failed:", e.message);
    return [];
  }
}

export async function getArticleBySlug(slug) {
  try {
    return await client.fetch(
      `*[_type == "article" && slug.current == $slug][0]{_id, title, slug, tag, author, date, excerpt, body, image}`,
      { slug }
    );
  } catch (e) {
    console.error("getArticleBySlug failed:", e.message);
    return null;
  }
}

export async function getJobOpenings() {
  try {
    return await client.fetch(`
      *[_type == "jobOpening" && active == true] | order(_createdAt desc) {
        _id, title, slug, department, location, type, description
      }
    `);
  } catch (e) {
    console.error("getJobOpenings failed:", e.message);
    return [];
  }
}

export async function getJobBySlug(slug) {
  try {
    return await client.fetch(
      `*[_type == "jobOpening" && slug.current == $slug][0]{_id, title, slug, department, location, type, description, responsibilities, requirements}`,
      { slug }
    );
  } catch (e) {
    console.error("getJobBySlug failed:", e.message);
    return null;
  }
}

export async function getLocations() {
  try {
    return await client.fetch(`
      *[_type == "location"] | order(order asc) {
        _id, name, slug, region, address, phone, hours, image, world
      }
    `);
  } catch (e) {
    console.error("getLocations failed:", e.message);
    return [];
  }
}

export async function getCollaborations() {
  try {
    return await client.fetch(`
      *[_type == "collaboration"] | order(order asc) {
        _id, category, title, description, image, link
      }
    `);
  } catch (e) {
    console.error("getCollaborations failed:", e.message);
    return [];
  }
}

export async function getWorlds() {
  try {
    return await client.fetch(`
      *[_type == "world"] | order(_createdAt asc) {
        _id, name, slug, tagline, disciplines, description, image, specifications
      }
    `);
  } catch (e) {
    console.error("getWorlds failed:", e.message);
    return [];
  }
}

export async function getProducts() {
  try {
    return await client.fetch(`
      *[_type == "product"] | order(order asc) {
        _id, name, description, price, image, world
      }
    `);
  } catch (e) {
    console.error("getProducts failed:", e.message);
    return [];
  }
}

export async function getContactInfo() {
  try {
    return await client.fetch(`
      *[_type == "contactInfo"][0] {
        _id, emails, addresses, hours, inquiryTypes
      }
    `);
  } catch (e) {
    console.error("getContactInfo failed:", e.message);
    return null;
  }
}
