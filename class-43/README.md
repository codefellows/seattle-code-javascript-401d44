# Gatsby, next.js, and other JS Frameworks

React is great, but there are negative implications with regards to SEO (Search Engine Optimization) as well as with so many programming patterns, especially when it comes to page based applications. **Gatsby** and **next.js** are 2 frameworks that address both concerns

## Learning Objectives

### Students will be able to

#### Describe and Define

- Server-Side Rendering and SEO
- The Gatsby Ecosystem
- The Next.js Ecosystem

#### Execute

- Build a simple Blog site with Gatsby
- Build a simple Blog site with Next.js
- Tackle new Javascript Frameworks

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Gatsby Basics

[Gatsby](https://www.gatsbyjs.com/)

1. Install Gatsby CLI

   ```npm install -g gatsby-cli```

1. Start a new app, from a [starter](https://www.gatsbyjs.com/starters/?v=2)

   ```gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world```

1. Change directories into site folder

   ```cd gatsby-site```

1. Start development server

   ```gatsby develop```

If you're using a blog/content starter, Gatsby uses Markdown to structure the content (MDX), and turns that into React Components

<https://www.gatsbyjs.com/docs/mdx/>

### NextJS Basics

[NextJS](https://vercel.com/solutions/nextjs)

1. Create a new app, from their example

   ```npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"```

1. Change directories into site folder

   ```cd nextjs-blog```

1. Start development server

   ```npm run dev```

Next.JS uses the page metaphor to create websites. Each "Page" of your app or website lives in the `pages` folder, where it has it's own state, lifecycle.

You can use Redux or any other global state manager at the top level, and you can provide common header/footer or page wrapper components to normalize your site as you please.

Next also allows/encourages you to build esoteric [API Routes](https://nextjs.org/learn/basics/api-routes) for use in your application to help you serve your own data quickly within the app.
