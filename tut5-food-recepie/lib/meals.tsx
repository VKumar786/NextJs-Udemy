//@ts-nocheck

import fs from "node:fs";
import sql from "better-sqlite3";
import xss from "xss";
import slugify from "slugify";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug: string) => {
  // return db.prepare("SELECT * FROM meals WHERE slug = "+slug).all(); SQL Injection
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug =
    slugify(meal.title, {
      lower: true,
    }) + Math.random().toString();
  meal.instruction = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferImage), (err) => {
    if (err) {
      throw new Error("Saving Image Failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals 
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
      )
  `
  ).run(meal);
};
