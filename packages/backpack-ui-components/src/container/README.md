# Container

The container component uses CSS grid layout and it will allow you to place
items on the grid either full-bleed or contained. Also, there is no need for
left and right margins to keep the container from touching the edge of the
screen due to the `minmax` feature.

Here’s a breakdown of the code:

```css
.root {
  display: grid;
  grid-template-columns:
    [full-start]
      minmax(16px, 1fr)
        [container-start]
          minmax(320px, 1290px)
        [container-end]
      minmax(16px, 1fr)
    [full-end];
}
```

First, we declare that we want to use grid layout by using `display: grid`.

Next, we use `grid-template-columns` to define the container grid columns. This
is a three column grid which has the left and right “gutters” and the middle
content area.

Within `grid-template-columns`, we’re able to name the container grid lines.
That’s what `[full-start]`, `[full-end]`, `[container-start]` and
`[container-end]` are for. These names can be used when defining how items
inside the container grid should be laid out which will be discussed later.

Without the named grid lines, the code would look like this, which will make it
easier to break down and understand:

```css
.root {
  grid-template-columns: minmax(16px, 1fr) minmax(320px, 1290px) minmax(16px, 1fr);
}
```

Now it should be easier to see that there are three columns, each using the
`minmax` function. This function is specific to the CSS grid spec. It basically
gives us a responsive layout without any media queries.

The `fr` unit is a fraction unit and basically means, “fill the remaining
available space”.

So, when we have `minmax(16px, 1fr)`, we’re saying the column has a minimum
width of 16px and a maximum width of whatever space is left. This is how we’re
able to have left and right gutters without using margin.

Then of course the middle column, `minmax(320px, 1290px)`, is setting the
minimum width at 320px and maximum width at 1290px.

Here’s how we would have previously accomplished this:

```css
.root {
  margin-left: 16px;
  margin-right: 16px;
  max-width: 1290px;

  @media (min-width: 320px) {
    margin-left: auto;
    margin-right: auto;
  }
}
```

But with the CSS grid code, we don’t need a media query and we’re able to
dynamically create the gutter values with the `fr` value.

Now, to place items on the grid, there are a couple of ways. First, it might be
helpful to show some markup for how we’d want the page to look.

```
<Container>
  <header>…</header>
  <main>…</main>
  <footer>…</footer>
</Container>
```

We have a `header`, a `main` and a `footer` inside of the container grid. We
want the `header` and `footer` to be full-bleed and the `main` to be contained.
Here’s how it works.

```css
header,
footer {
  grid-column: full;
}

main {
  grid-column: container;
}
```

The CSS above is somewhat magic, so I’ll explain it a bit more.

The `grid-column` property is used on children of a grid to define where the
column should start and end. `grid-column` is shorthand for `grid-column-start`
and `grid-column-end`. If you remember, `container` is what we named the grid
lines above. Since we named the grid lines `*-start` and `*-end`, we can use
shorthand here as well. Here’s a [great article][source-1] explaining this in
more depth.

So here is the long way to write it:

```css
header,
footer {
  grid-column-start: full-start;
  grid-column-end: full-end;
}

main {
  grid-column-start: container-start;
  grid-column-end: container-end;
}
```

It’s easier to understand what’s going on here, but once you get the hang of it,
the shorthand is so much nicer and succinct.

Note: This is also valid `grid-column: container-start / container-end;`

The container grid has a very specific use case. Its purpose is to wrap sections
on the page and allow them to be full-bleed or contained. For contained content,
it uses the first and last columns to mimic left and right gutters without
having to use margin.

For a more grid-based layout, you would use the Grid component.

[source-1]: https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/
