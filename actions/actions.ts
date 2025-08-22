"use server";

import db from "./db.json";

// Products
export const getProducts = async () => {
  return db.products;
};

export const getProductBySlug = async (slug: string) => {
  return db.products.find((p) => p.id === slug);
};

export const getPopularProducts = async () => {
  return db.products.filter((p) => p.isPopular);
};

// Services
export const getServices = async () => {
  return db.services;
};

// Articles
export const getArticles = async () => {
  return db.articles;
};

// Site Info
export const getSiteInfo = async () => {
  return db.siteInfo;
};

// Hero
export const getHeroData = async () => {
  return db.hero;
};
