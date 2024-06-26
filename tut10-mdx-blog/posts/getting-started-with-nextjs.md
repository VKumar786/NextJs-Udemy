---
title: 'Getting Started With NextJS'
date: '2002-10-15'
image: 'admin.jpg'
excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze.'
isFeatured: true
slug: 'getting-started-with-nextjs'
---

NextJS is a **framework for ReactJS**.

Wait a second ... a "framework" for React? Isn't React itself already a framework for JavaScript?

Well ... first of all, React is a "library" for JavaScript. That seems to be important for some people.

Not for me, but still, there is a valid point: React already is a framework / library for JavaScript. So it's already an extra layer on top of JS.

## Why would we then need NextJS?

Because NextJS makes building React apps easier - especially React apps that should have server-side rendering (though it does way more than just take care of that).

In this article, we'll dive into the core concepts and features NextJS has to offer:

- File-based Routing
- Built-in Page Pre-rendering
- Rich Data Fetching Capabilities
- Image Optimization
- Much More

## File-based Routing

![Create routes via your file + folder structure](admin.jpg)



... More content ...0


```js

const PostContent = (props) => {
  // const { slug, title, image, date, content } = DUMMY_POST;
  const { slug, title, image, date, content } = props;

  const customComponents = {
    img(image) {
      return (
        <div className={styles.image}>
          <Image
            src={`/posts/${slug}/${image.src}`}
            alt={image.alt}
            width={300}
            height={200}
            style={{margin: "0 auto"}}
          />
        </div>
      );
    },
  };
  return (
    <article className={styles.content}>
      <PostHeader title={title} image={`/posts/${slug}/${image}`} />
      <Markdown components={customComponents}>{content}</Markdown>
    </article>
  );
};


```