/* 
- data: product data
- type {string} : option type
*/
export const prepareOptionData = (data, type) => {
    const optionData = data.reduce((dataArr, currentProduct) => {
        switch (type) {
            case 'product':
                currentProduct.product_type.forEach(product => {
                    if (!dataArr.includes(product)) {
                        dataArr.push(product)
                    }
                })
                break;
            case 'collection':
                currentProduct.collection.forEach(product => {
                    if (!dataArr.includes(product)) {
                        dataArr.push(product)
                    }
                })
                break;
            default:
                break;
        }
        return dataArr;
    }, [])
    return optionData;
}