

### Return a Given Number of Items by Creating Empty Array

**Use Case**
In React inside JSX, create a list of Stars based on a `rating` (number).

**Solution**
Create an array (length equal rating number) and fill it with empty values. You can then loop over the array with ` .map() `  returning a **star** image optionally wrapped in a  ` span `  tag.

```javascript
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <span role="img" aria-label="star ratings">
                ⭐</span>
            ))}
        </div>
```

**Result**
![Star-Rating](./img/Star-Rating.png)
