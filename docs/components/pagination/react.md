### Import

```js
import { Pagination } from '@warp-ds/react';
```

### Props

<api-table type=react component="Pagination" />

### Example

```jsx
function PaginationExample() {
    const [currentPage, setCurrentPage] = useState(0);

    return <Pagination
        currentPage={currentPage}
        lastPage={10}
        createHref={(page) => `?page=${page}`}
        onChange={(page) => setCurrentPage(page)}
    />;
}
```