import { BlogPost } from "./[slug]/preview-card";

const posts: BlogPost[] = [
  { slug: "telescope", createdAt: new Date(), title: "Telescope", estimatedRead: 4 },
  { slug: "blogpost", createdAt: new Date(), title: "Telescope", estimatedRead: 4 },
  { slug: "neovim", createdAt: new Date(), title: "Telescope", estimatedRead: 4 },
];

export function getPosts() {
  return new Promise<typeof posts>(res => {
    res(posts);
  });
}
