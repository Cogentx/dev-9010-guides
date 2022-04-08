# JavaScript Array Methods

## General

## Cool Tips and Tricks

### Filter() using Boolean

```javascript
      // 1. filter undefined toppings out using BOOLEAN (only takes truthy elements - in this case toppings is an Object so convert to array first)
      const tops = Object.values(toppings).filter(Boolean);
```

now JOIN... tops variable

```javascript
prepare: ({ title, media, ...toppings }) => {
      // 1. filter undefined toppings out
      const tops = Object.values(toppings).filter(Boolean);
      // 2. return the preview object for the pizza
      return {
        title,
        media,
        subtitle: tops.join(', '),
      };
    },
```