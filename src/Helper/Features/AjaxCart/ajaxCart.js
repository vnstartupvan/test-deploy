/* 
Product: selected product
CartList: state cart List
SetCartList: set state cart list
*/
import { actionCartList } from "../../../Redux/filterReducer";
import { UpdateLocalData } from "../../Utils/utils";
export const handleIncrease = (product, cartList, setCartList, dispatcher) => {
    let currentQty = product.quantity;
    let updatedQty = currentQty + 1;
    let updatedCartList = cartList.reduce((newArr, value) => {
        if (value.id === product.id) {
            newArr.push({ ...value, quantity: updatedQty })
        } else {
            newArr.push(value);
        }
        return newArr;
    }, []);

    updatedData(updatedCartList);
    setCartList(updatedCartList);
    dispatcher(actionCartList(updatedCartList));
}

export const handleDescrease = (product, cartList, setCartList, dispatcher) => {
    let updatedCartList;
    let currentQty = product.quantity;
    let updatedQty = currentQty - 1;
    let productID = cartList.findIndex(i => i.id === product.id);
    if (currentQty === 1) {
        let newCartList = [...cartList];
        newCartList.splice(productID, 1);
        updatedCartList = newCartList;
    } else {
        updatedCartList = cartList.reduce((newArr, value) => {
            if (value.id === product.id) {
                newArr.push({ ...value, quantity: updatedQty })
            } else {
                newArr.push(value);
            }
            return newArr;
        }, []);
    };
    dispatcher(actionCartList(updatedCartList))
    updatedData(updatedCartList);
    setCartList(updatedCartList);
}

export const updatedData = (data) => {
    localStorage.setItem('cartList', JSON.stringify(data))
}

/* 
- ProductData: data of selected product
- actionToggleCart: set state toggle the cart
*/
export const handleAddToCart = (productData, actionToggleCart, dispatcher) => {
    let product = { ...productData, quantity: 1 }
    let currentCartList = localStorage.getItem('cartList');
    if (!currentCartList) {
        dispatcher(actionCartList([product]));
        UpdateLocalData('cartList', [product])
    } else {
        currentCartList = [...JSON.parse(currentCartList)];
        let isProductExist = false;
        let updateCartList = currentCartList.reduce((newArr, currentValue) => {
            if (currentValue.id === product.id) {
                let currentQty = currentValue.quantity;
                let updatedQty = currentQty + 1;
                let updatedProduct = { ...currentValue, quantity: updatedQty };
                isProductExist = true;
                newArr.push(updatedProduct);
            } else {
                newArr.push(currentValue)
            }
            return newArr;
        }, [])
        if (isProductExist) {
            currentCartList = [...updateCartList];
        } else {
            currentCartList.push(product)
        }
        dispatcher(actionCartList(currentCartList));
        UpdateLocalData('cartList', currentCartList);
    }
    if (actionToggleCart !== '') {
        actionToggleCart();
    }
};