import React, { useState } from 'react';
import { Pagination } from '@warp-ds/react'

export default function PaginationExample() {
    const [currentPage, setCurrentPage] = useState(0);

    return <Pagination
        currentPage={currentPage}
        numPages={3}
        lastPage={10}
        createHref={(page) => `?page=${page}`}
        onChange={(page) => setCurrentPage(page)}
    />;
}