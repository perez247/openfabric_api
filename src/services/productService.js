const isBase64 = require('is-base64');
const db = require("../models");
const paginationService = require("./paginationService");

let setfilter = (filter) => {

    if (!filter) { return {} }

    const newFilter = {};

    const { id } = filter;

    if (id) {
        newFilter.id = id;
    }

    return newFilter;
}

let validateProduct = (product) => {
    const result = { errorList: [], hasError: false };

    if (!product) {
        result.errorList.push({ field: 'self', message: 'Product is required' });
        result.hasError = true;
        return result;
    }

    if (!product.name || product.name.trim().length <= 0) {
        result.errorList.push({ field: 'name', message: 'Product name is required' });
        result.hasError = true;
    }

    if (!product.type || product.type.trim().length <= 0) {
        result.errorList.push({ field: 'type', message: 'Product type is required' });
        result.hasError = true;
    }

    if (product.imageSrc && !isBase64(product.imageSrc, {mimeRequired: true})) {
        result.errorList.push({ field: 'imageSrc', message: 'Product image is invalid' });
        result.hasError = true;
    }

    if (product.description && product.description.length > 2000) {
        result.errorList.push({ field: 'description', message: 'Product description is above 200 chars' });
        result.hasError = true;
    }

    return result;
}

let pickRightProperties = (product) => {
    const {name, type, description, imageType, imageSrc } = product;
    return {
        name: name.trim(), type: type.trim(), description, imageType, imageSrc
    };
}

let addProduct = (product) => {
    return new Promise(async (resolve, reject) => {
        try {

            // validate new product values
            const errors = validateProduct(product);

            if (errors.hasError) { reject(errors); return; }

            await db.Product.create(product);
            resolve({result: 'added'})
        } catch (error) {
            reject(error)
        }
    });
}

let getProducts = (filter, pagination) => {
    pagination = paginationService.sanitizePagination(pagination);
    filter = setfilter(filter);

    const query = {
        where: filter,
        order: [
            ['updatedAt', 'DESC'],
        ],
        ...pagination
    }

    return new Promise(async (resolve, reject) => {
        try {
            const products = await db.Product.findAll(query);
            const Totalproducts = await db.Product.count(query);
            resolve({
                results: products,
                totalItems: Totalproducts
            })
        } catch (error) {
            reject(error);
        }
    })
}

let updateProduct = async (id, product) => {

    return new Promise(async (resolve, reject) => {
        try {
            // get product if found
            id = id || 0;
            const productFromDB = await getProducts({ id }, { offest: 1, limit: 1});

            // if product not found then send product not found
            if (productFromDB.totalItems != 1) { reject({ error: "Product not found" }); return; }

            // validate new product values
            const errors = validateProduct(product);

            if (errors.hasError) { reject(errors); return; }

            // get clean product
            const cleanProduct = pickRightProperties(product);

            await db.Product.update(cleanProduct, {
                where: { id }
            });
            
            resolve({
                ...cleanProduct,
                id
            })
                      
        } catch (error) {
            reject(error);
        }
    });
}

let deleteProduct = async (id) => {

    return new Promise(async (resolve, reject) => {
        try {
            // get product if found
            id = id || 0;
            const productFromDB = await getProducts({ id }, {});

            // if product not found then send product not found
            if (productFromDB.totalItems != 1) { reject({ error: "Product not found" }); return; }

            // delete the product
            await db.Product.destroy({
                where: { id }
            });

            resolve({
                id
            })
                      
        } catch (error) {
            reject(error);
        }
    });
}



module.exports = {
    addProduct: addProduct,
    getProducts: getProducts,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
}