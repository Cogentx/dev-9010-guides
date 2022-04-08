# 90-10 Guide to Modern CSS

## Modern CSS Containers - Intermediate / Advanced

### CSS Variables and Calculated Widths

#### Assuming Basic Reset and Defaults

```CSS
/* reset and defaults */
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

main > h1,
article > h3 {
  text-align: center;
}

```

#### Old Way to Layout Simple Container

```CSS
.container {
  --border: 5px;
  --padding: 0 16px;
  border: var(--border) solid limegreen;
  padding: var(--padding);
}

.container-old {
  /* width set at 100% does not account for padding and border */
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
```

Visual Impact as shown in browser debug tools (computed):
![Impact of Static Width](../zImages/Screen%20Shot%202022-04-08%20at%2012.55.30%20PM.png)
**Notice** the _RIGHT_ Margin has a Negative (-) Size which is the Negative Horizontal Sum of the _PADDING_ and _BORDER_ Sizes.



#### Modern Way to Layout Simple Container

```CSS
.container {
  --border: 5px;
  --padding: 0 16px;
  border: var(--border) solid limegreen;
  padding: var(--padding);
}

.container-new {
  /* min-width is dynamic; max-width set at 600px*/
  width: min(100% - var(--border) * 2 - var(--padding) * 2, 600px);
  /* margin auto on x-axis to center on page horizontally */
  margin-inline: auto;
}
```

Visual Impact as shown in browser debug tools (computed):
![Impact of Static Width](../zImages/Screen%20Shot%202022-04-08%20at%201.49.42%20PM.png)
**Notice** _ALL Margins_ are now Zero (0) as expected. The _PADDING_ and _BORDER_ Sizes are now subtracted from the actual _WIDTH_.




