
let sanitizePagination = (pagination, defaultOffest = 0, defaultLimit = 10 ) => {
    let { offset, limit } = pagination;

    if (!offset) { offset = defaultOffest }

    if (!limit) { limit = defaultLimit }

    const newp = { 
        offset: offset <= 0 ? 0 : offset - 1,
        limit,
    }

    return newp;
}



module.exports = {
    sanitizePagination: sanitizePagination,
}