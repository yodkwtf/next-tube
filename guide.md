# Next.js v13 Cheatsheet

## App Directory

`app/` is a directory that contains global styles, components, and other files that are used throughout the application.

#### page.js

`page.js` is the main page of the app, somewhat similar to `index.js` in Next.js v12.

#### page.module.css

`page.module.css` is the main page's CSS file, somewhat similar to `index.module.css` in Next.js v12.

Next.js v13 uses CSS Modules by default, so you can use CSS Modules in `page.module.css`.

## Routing

Earlier we had a `pages` directory which had all the pages with the component name as the page route.

Now, we create pages inside the `app` directory. We do that by first creating a directory with the route name and then creating a `page.js` file inside it.

For example, if we want to create a page with the route `/about`, we create a directory named `about` inside the `app` directory and then create a `page.js` file inside it.

#### Nested Routes

Also, if we want to create a page with the route `/about/team`, we create a directory named `team` inside the `about` directory and then create a `page.js` file inside it.

This way we also don't need to create any other components directory for the different components that we want to use in the pages. We can directly create those component in the `/about` directory.

## Links

Earlier we used to import the `Link` component from `next/link` and then use it like this:

```jsx
<Link href="/about">
  <a className="link">About</a>
</Link>
```

Now, we can directly use the `Link` component like this:

```jsx
<Link href="/about" className="link">
  About
</Link>
```
