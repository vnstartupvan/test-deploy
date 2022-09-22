import { createSlice, current } from '@reduxjs/toolkit'
//Product list is used to render components
//Original product is used to execute the logic so that we can update the new data for the product list
const initialState = {
    productList: [
        {
            id: 1,
            title: 'Simple Shirt',
            price: 100,
            product_type: ['shirt'],
            collection: ['simple'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4818/1920x2880m4u0xOx84jRZV6QCBShFzUKl5b45CjRLYabQJx7v.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 2,
            title: 'Casual shirt',
            price: 200,
            product_type: ['shirt'],
            collection: ['simple'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4818/1920x2880m4u0xOx84jRZV6QCBShFzUKl5b45CjRLYabQJx7v.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 3,
            title: 'Flip',
            price: 300,
            product_type: ['shoes'],
            collection: ['new arrival', 'foot wear'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4582/1920x2880kSY14QP9MPvj337tR7WSzwnB4ioBB4BLDv0oIM9y.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 4,
            title: 'Trouser',
            price: 400,
            product_type: ['trouser'],
            collection: ['new arrival'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4754/1920x2880rzz9CYmhLLZSantC2X7gT72SavByczCIheppoDXw.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 5,
            title: 'Jacket',
            price: 200,
            product_type: ['jacket'],
            collection: ['simple'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4816/1920x2880x3DKGc37dmYdZzEcAB2kujrIYY2XGUrQYrfJZsQR.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 6,
            title: 'Grey Polo Shirt',
            price: 100,
            product_type: ['shirt'],
            collection: ['polo'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4907/1920x2880T9nnhvKR1ihkZuFsBNHe2QuESIhSHxOAUlQHuKvL.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 7,
            title: 'Brown Polo Shirt',
            price: 200,
            product_type: ['shirt'],
            collection: ['polo'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4900/1920x2880jbWfy9co3QBo7ME9Ai8x50DjBQkUbGDrv6W0wWrX.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 8,
            title: 'White Polo Shirt',
            price: 300,
            product_type: ['shirt'],
            collection: ['polo'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4901/1920x28809ZskHoKpzOAGWk77HQIMaHkZ4s4STQQmrnbfb23S.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 9,
            title: 'Slim Short',
            price: 900,
            product_type: ['trouser'],
            collection: ['jean', 'short'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4890/1920x28800h6cLUNzhwf2bcYSW6x5y1zCDyiRTELhwwCVB8FI.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 10,
            title: 'Pink Polo Shirt',
            price: 600,
            product_type: ['shirt'],
            collection: ['polo'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4892/1920x2880ogp2YTsT2hqKDclxauwtYresPK2sPa2AIjqCpwXr.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 11,
            title: 'Formal Jacket',
            price: 1100,
            product_type: ['jacket'],
            collection: ['formal'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4885/1920x2880vgKkuyaxYDOfySNSjyjqbeAvj8hNfbQD07x6pbN1.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 12,
            title: 'Relaxed Fit Shirt',
            price: 220,
            product_type: ['shirt'],
            collection: ['simple'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4923/1920x2880789uzD6CxCs2uXlwP5YFw4eeNsaSyS8GfEFSuSSu.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 13,
            title: 'Skinny Trouser',
            price: 1300,
            product_type: ['trouser'],
            collection: ['new arrival', 'jean', 'skinny'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4750/1920x2880jTjEvgGbrrgWp8HQjiDbN5UIcsWfrYiD9FI8zbGN.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 14,
            title: 'Boomber Jacket',
            price: 4100,
            product_type: ['jacket'],
            collection: ['new arrival'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4889/1920x2880hoC1RIep6kjWoABtQw98yiYEnpxjdDfsMU7rnjjB.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 15,
            title: 'Premium Shirt',
            price: 240,
            product_type: ['shirt'],
            collection: ['simple'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4886/1920x2880ImrkENPt8IOfrfDmrAbdbJnuX7HhL9KCrO7ZYqdg.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 16,
            title: 'Formal Trouser',
            price: 500,
            product_type: ['trouser'],
            collection: ['new arrival'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4877/1920x2880mjcHpcpsSiZYulYq0p28SbdTUkngC3LhAaYCeSMH.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 17,
            title: 'Casual shirt',
            price: 200,
            product_type: ['shirt'],
            collection: ['simple'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4818/1920x2880m4u0xOx84jRZV6QCBShFzUKl5b45CjRLYabQJx7v.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 18,
            title: 'Relaxed Fit Cotton Tee',
            price: 24.99,
            product_type: ['shirt'],
            collection: ['new arrival', 'simple'],
            tag: ['tee'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/d3/9b/d39b6f1edeee91d53ac892d094c6b2bcef50c0e5.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 19,
            title: 'Cotton Twill Bucket Hat',
            price: 400,
            product_type: ['hat'],
            collection: ['new arrival'],
            tag: [],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/07/db/07db119cf3dbb031b914b02fc714bfa3931fdbce.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 20,
            title: 'Braided Belt',
            price: 200,
            product_type: ['belt'],
            collection: ['simple'],
            tag: [],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/6f/03/6f03aa85686e3cd755c289bbbb05be12a7e1f241.jpg],origin[dam],category[men_accessories],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 21,
            title: 'Cargo Joggers',
            price: 59.99,
            product_type: ['trouser'],
            collection: ['simple'],
            tag: ['jogger'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/54/8b/548bb7f5eb093f4154b47c11ad0780cff4c8324e.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 22,
            title: 'Cargo Joggers',
            price: 60,
            product_type: ['trouser'],
            collection: ['simple'],
            tag: ['jogger'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/22/de/22de976d2ae37ab9917f3cad6ff35c070d11a5a4.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 23,
            title: 'Slim Fit Jacket',
            price: 300,
            product_type: ['jacket'],
            collection: ['new arrival'],
            tag: ['slim-fit'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/a2/a2/a2a223a3548fcdfbaf919de02a2d74371f4cc323.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 24,
            title: 'Trouser',
            price: 400,
            product_type: ['trouser'],
            collection: ['new arrival'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4754/1920x2880rzz9CYmhLLZSantC2X7gT72SavByczCIheppoDXw.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 25,
            title: 'Relaxed Fit Tee',
            price: 20,
            product_type: ['shirt'],
            collection: ['simple'],
            tag: ['tee'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/00/5b/005b2a5841ef8917df2f8052679cd723c0b0877f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 26,
            title: 'Hybrid Regular Tapered Joggers',
            price: 100,
            product_type: ['trouser'],
            collection: ['simple'],
            tag: ['jogger'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/2f/5f/2f5f72a86fbaa5b72d0b8e5b8e0b8247cfc30222.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 27,
            title: '10-pack Regular Fit Round Neck Tees',
            price: 200,
            product_type: ['shirt'],
            collection: ['simple', 'relaxed fit'],
            tag: ['tee'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/70/0b/700b9a97be923b887f03541517f279f08fbe9154.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 28,
            title: 'Relaxed Fit Linen Blend Shirt',
            price: 340,
            product_type: ['shirt'],
            collection: ['new arrival', 'relaxed fit'],
            tag: [],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/1a/03/1a032c13b1efc3f451bac6657f020f612fd18fba.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 29,
            title: 'Loafers',
            price: 400,
            product_type: ['shoes'],
            collection: ['new arrival', 'foot wear'],
            tag: [],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/33/42/33423494dab6623592dc7287c3897a69646079d0.jpg],origin[dam],category[men_shoes_dressed],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 30,
            title: '7-pack Sneaker Socks',
            price: 20,
            product_type: ['shoes', 'sock'],
            collection: ['simple', 'foot wear'],
            tag: ['socks'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/e0/9b/e09bde62753ae8f8985987dbd398d70c2d438a0b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
    ],
    originalProductList: [
        {
            id: 1,
            title: 'Simple Shirt',
            price: 100,
            product_type: ['shirt'],
            collection: ['simple'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4818/1920x2880m4u0xOx84jRZV6QCBShFzUKl5b45CjRLYabQJx7v.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 2,
            title: 'Casual shirt',
            price: 200,
            product_type: ['shirt'],
            collection: ['simple'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4818/1920x2880m4u0xOx84jRZV6QCBShFzUKl5b45CjRLYabQJx7v.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 3,
            title: 'Flip',
            price: 300,
            product_type: ['shoes'],
            collection: ['new arrival', 'foot wear'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4582/1920x2880kSY14QP9MPvj337tR7WSzwnB4ioBB4BLDv0oIM9y.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 4,
            title: 'Trouser',
            price: 400,
            product_type: ['trouser'],
            collection: ['new arrival'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4754/1920x2880rzz9CYmhLLZSantC2X7gT72SavByczCIheppoDXw.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 5,
            title: 'Jacket',
            price: 200,
            product_type: ['jacket'],
            collection: ['simple'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4816/1920x2880x3DKGc37dmYdZzEcAB2kujrIYY2XGUrQYrfJZsQR.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 6,
            title: 'Grey Polo Shirt',
            price: 100,
            product_type: ['shirt'],
            collection: ['polo'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4907/1920x2880T9nnhvKR1ihkZuFsBNHe2QuESIhSHxOAUlQHuKvL.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 7,
            title: 'Brown Polo Shirt',
            price: 200,
            product_type: ['shirt'],
            collection: ['polo'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4900/1920x2880jbWfy9co3QBo7ME9Ai8x50DjBQkUbGDrv6W0wWrX.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 8,
            title: 'White Polo Shirt',
            price: 300,
            product_type: ['shirt'],
            collection: ['polo'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4901/1920x28809ZskHoKpzOAGWk77HQIMaHkZ4s4STQQmrnbfb23S.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 9,
            title: 'Slim Short',
            price: 900,
            product_type: ['trouser'],
            collection: ['jean', 'short'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4890/1920x28800h6cLUNzhwf2bcYSW6x5y1zCDyiRTELhwwCVB8FI.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 10,
            title: 'Pink Polo Shirt',
            price: 600,
            product_type: ['shirt'],
            collection: ['polo'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4892/1920x2880ogp2YTsT2hqKDclxauwtYresPK2sPa2AIjqCpwXr.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 11,
            title: 'Formal Jacket',
            price: 1100,
            product_type: ['jacket'],
            collection: ['formal'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4885/1920x2880vgKkuyaxYDOfySNSjyjqbeAvj8hNfbQD07x6pbN1.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 12,
            title: 'Relaxed Fit Shirt',
            price: 220,
            product_type: ['shirt'],
            collection: ['simple'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4923/1920x2880789uzD6CxCs2uXlwP5YFw4eeNsaSyS8GfEFSuSSu.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 13,
            title: 'Skinny Trouser',
            price: 1300,
            product_type: ['trouser'],
            collection: ['new arrival', 'jean', 'skinny'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4750/1920x2880jTjEvgGbrrgWp8HQjiDbN5UIcsWfrYiD9FI8zbGN.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 14,
            title: 'Boomber Jacket',
            price: 4100,
            product_type: ['jacket'],
            collection: ['new arrival'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4889/1920x2880hoC1RIep6kjWoABtQw98yiYEnpxjdDfsMU7rnjjB.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 15,
            title: 'Premium Shirt',
            price: 240,
            product_type: ['shirt'],
            collection: ['simple'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4886/1920x2880ImrkENPt8IOfrfDmrAbdbJnuX7HhL9KCrO7ZYqdg.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 16,
            title: 'Formal Trouser',
            price: 500,
            product_type: ['trouser'],
            collection: ['new arrival'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4877/1920x2880mjcHpcpsSiZYulYq0p28SbdTUkngC3LhAaYCeSMH.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 17,
            title: 'Casual shirt',
            price: 200,
            product_type: ['shirt'],
            collection: ['simple'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4818/1920x2880m4u0xOx84jRZV6QCBShFzUKl5b45CjRLYabQJx7v.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 18,
            title: 'Relaxed Fit Cotton Tee',
            price: 24.99,
            product_type: ['shirt'],
            collection: ['new arrival', 'simple'],
            tag: ['tee'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/d3/9b/d39b6f1edeee91d53ac892d094c6b2bcef50c0e5.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 19,
            title: 'Cotton Twill Bucket Hat',
            price: 400,
            product_type: ['hat'],
            collection: ['new arrival'],
            tag: [],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/07/db/07db119cf3dbb031b914b02fc714bfa3931fdbce.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 20,
            title: 'Braided Belt',
            price: 200,
            product_type: ['belt'],
            collection: ['simple'],
            tag: [],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/6f/03/6f03aa85686e3cd755c289bbbb05be12a7e1f241.jpg],origin[dam],category[men_accessories],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 21,
            title: 'Cargo Joggers',
            price: 59.99,
            product_type: ['trouser'],
            collection: ['simple'],
            tag: ['jogger'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/54/8b/548bb7f5eb093f4154b47c11ad0780cff4c8324e.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 22,
            title: 'Cargo Joggers',
            price: 60,
            product_type: ['trouser'],
            collection: ['simple'],
            tag: ['jogger'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/22/de/22de976d2ae37ab9917f3cad6ff35c070d11a5a4.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 23,
            title: 'Slim Fit Jacket',
            price: 300,
            product_type: ['jacket'],
            collection: ['new arrival'],
            tag: ['slim-fit'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/a2/a2/a2a223a3548fcdfbaf919de02a2d74371f4cc323.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 24,
            title: 'Trouser',
            price: 400,
            product_type: ['trouser'],
            collection: ['new arrival'],
            tag: [],
            image: 'https://mrsimple.s3.cloud.cmctelecom.vn/images/products/4754/1920x2880rzz9CYmhLLZSantC2X7gT72SavByczCIheppoDXw.jpeg',
            variants: [],
            option: [],
        },
        {
            id: 25,
            title: 'Relaxed Fit Tee',
            price: 20,
            product_type: ['shirt'],
            collection: ['simple'],
            tag: ['tee'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/00/5b/005b2a5841ef8917df2f8052679cd723c0b0877f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 26,
            title: 'Hybrid Regular Tapered Joggers',
            price: 100,
            product_type: ['trouser'],
            collection: ['simple'],
            tag: ['jogger'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/2f/5f/2f5f72a86fbaa5b72d0b8e5b8e0b8247cfc30222.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 27,
            title: '10-pack Regular Fit Round Neck Tees',
            price: 200,
            product_type: ['shirt'],
            collection: ['simple', 'relaxed fit'],
            tag: ['tee'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/70/0b/700b9a97be923b887f03541517f279f08fbe9154.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 28,
            title: 'Relaxed Fit Linen Blend Shirt',
            price: 340,
            product_type: ['shirt'],
            collection: ['new arrival', 'relaxed fit'],
            tag: [],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/1a/03/1a032c13b1efc3f451bac6657f020f612fd18fba.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 29,
            title: 'Loafers',
            price: 400,
            product_type: ['shoes'],
            collection: ['new arrival', 'foot wear'],
            tag: [],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/33/42/33423494dab6623592dc7287c3897a69646079d0.jpg],origin[dam],category[men_shoes_dressed],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
        {
            id: 30,
            title: '7-pack Sneaker Socks',
            price: 20,
            product_type: ['shoes', 'sock'],
            collection: ['simple', 'foot wear'],
            tag: ['socks'],
            image: 'https://lp2.hm.com/hmgoepprod?set=source[/e0/9b/e09bde62753ae8f8985987dbd398d70c2d438a0b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            variants: [],
            option: [],
        },
    ],
    selectedOption: {
        product_type_option: [],
        collection_option: [],
    },
    quickviewData: {},
    searchResultData: [],
    searchPageData: [],
    oriSearchPageData: [],
    productPagination: [],
    limit: 8,
    searchTerm: '',
    productPageData: null,
    cartList: [],
}

export const filterReducer = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        actionFilter: (state, action) => {
            //Declare variables 
            const { eventType, optionValue, remove } = action.payload;
            const oriCollectionProductData = [...current(state).originalProductList];
            const oriSearchProductData = [...current(state).searchPageData];
            const { product_type_option, collection_option } = { ...current(state).selectedOption };
            const isSearchPage = window.location.href.includes('search');
            const oriProductData = isSearchPage ? oriSearchProductData : oriCollectionProductData;
            switch (eventType) {
                //Process: use the original product to execute the logic and pass it to the product list data/ return products which match with the filter option
                //Output: update the product list 
                case 'product_type':
                    {
                        //remove option
                        if (remove) {
                            let updatedProductList = oriProductData;
                            if (collection_option.length > 0) {
                                updatedProductList = oriProductData.filter(product => product.collection.includes(collection_option[0]));
                            }
                            if (isSearchPage) {
                                state.searchPageData = current(state).oriSearchPageData;
                            } else {
                                state.productList = updatedProductList;
                            }
                            state.selectedOption.product_type_option = [];
                        } else {
                            //execute logic to update the product list
                            let updatedProductList = oriProductData.filter(product => product.product_type.includes(optionValue));
                            //pass updated product list to product list data
                            if (!isSearchPage) {
                                state.productList = updatedProductList;
                            } else {
                                let updatedProductList = current(state).oriSearchPageData.filter(product => product.product_type.includes(optionValue));
                                state.searchPageData = updatedProductList;
                            }
                            //update selected product option data
                            state.selectedOption.product_type_option = [optionValue];
                        }

                    }
                    break;
                case 'collection_type':
                    {
                        if (remove && isSearchPage) {
                            if (product_type_option.length > 0) {
                                state.searchPageData = oriProductData.filter(product => product.product_type.includes(product_type_option[0]));
                            } else {
                                state.searchPageData = current(state).oriSearchPageData;
                            }
                            state.selectedOption.collection_option = [];
                            return;
                        } else if (remove && !isSearchPage) {
                            if (product_type_option.length > 0) {
                                state.productList = oriProductData.filter(product => product.product_type.includes(product_type_option[0]));
                            } else {
                                state.productList = oriProductData;
                            }
                            state.selectedOption.collection_option = [];
                            return;
                        }
                        let updatedProductList = oriProductData.filter(product => product.collection.includes(optionValue));
                        if (isSearchPage) {
                            updatedProductList = current(state).oriSearchPageData.filter(product => product.collection.includes(optionValue));
                            state.searchPageData = updatedProductList;
                        } else {
                            state.productList = updatedProductList;
                        }
                        state.selectedOption.product_type_option = [];
                        state.selectedOption.collection_option = [optionValue];
                    }
                default:
                    break;

            }
        },
        actionQuickview: (state, action) => {
            if (action.payload === 'close') {
                state.quickviewData = {};
            } else {
                const selectedProduct = action.payload;
                state.quickviewData = selectedProduct;
            }
        },
        actionSort: (state, action) => {
            const { value } = action.payload;
            const currentProductList = [...current(state).productList];
            const currentPagination = [...current(state).productPagination];
            switch (value) {
                case 'Alphabetical A-Z':
                    // if (currentPagination.length > 0) {
                    //     state.productPagination = currentProductList.sort((a, b) => a.title.localeCompare(b.title));
                    // } else {
                    //     state.productList = currentProductList.sort((a, b) => a.title.localeCompare(b.title));
                    // }
                    state.productList = currentProductList.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'Alphabetical Z-A':
                    // if (currentPagination.length > 0) {
                    //     state.productPagination = currentProductList.sort((a, b) => b.title.localeCompare(a.title));
                    // } else {
                    //     state.productList = currentProductList.sort((a, b) => b.title.localeCompare(a.title));
                    // }
                    state.productList = currentProductList.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                case 'Highest Price':
                    // if (currentPagination.length > 0) {
                    //     state.productPagination = currentProductList.sort((a, b) => b.price - a.price);
                    // } else {
                    //     state.productList = currentProductList.sort((a, b) => b.price - a.price);
                    // }
                    state.productList = currentProductList.sort((a, b) => b.price - a.price);
                    break;
                case 'Lowest Price':
                    // if (currentPagination.length > 0) {
                    //     state.productPagination = currentProductList.sort((a, b) => a.price - b.price);
                    // } else {
                    //     state.productList = currentProductList.sort((a, b) => a.price - b.price);
                    // }
                    state.productList = currentProductList.sort((a, b) => a.price - b.price);
                    break;
                default:
                    break;
            }
        },
        actionSearch: (state, action) => {
            //Input: search term, product data
            //Process: loop through each product's properties: title, vendor, collection, tag.
            // If the search term match with these properties then push it to the search result array following the priority tittle -> vendor -> collection -> tag.
            //Output: return the product data match with the search term.
            let originalProductData = [...current(state).originalProductList];
            let searchTerm = action.payload.toLowerCase();
            let result = [];
            let productTitleResult = [];
            let productCollectionResult = [];
            let productTagResult = [];
            originalProductData.forEach((product) => {
                //search by product's title
                if (product.title.toLowerCase().includes(searchTerm)) {
                    productTitleResult.push(product);
                }
                //search by product's collection
                if (product.collection.length > 0 && product.collection.includes(searchTerm)) {
                    productCollectionResult.push(product);
                }
                //search by product's tag
                if (product.tag.length > 0 && product.tag.includes(searchTerm)) {
                    productTagResult.push(product);
                }
            })
            result = [...productTitleResult, ...productCollectionResult, ...productTagResult];
            let updatedResult = [];
            result.forEach((product) => {
                if (!updatedResult.includes(product)) {
                    updatedResult.push(product)
                }
            });
            state.searchResultData = [...updatedResult];
        },
        actionSearchPage: (state, action) => {
            //Input: search term, product data
            //Process: loop through each product's properties: title, vendor, collection, tag.
            // If the search term match with these properties then push it to the search result array following the priority tittle -> vendor -> collection -> tag.
            //Output: return the product data match with the search term.
            let originalProductData = [...current(state).originalProductList];
            let searchTerm = action.payload.toLowerCase();
            let result = [];
            let productTitleResult = [];
            let productCollectionResult = [];
            let productTagResult = [];
            originalProductData.forEach((product) => {
                //search by product's title
                if (product.title.toLowerCase().includes(searchTerm)) {
                    productTitleResult.push(product);
                }
                //search by product's collection
                if (product.collection.length > 0 && product.collection.includes(searchTerm)) {
                    productCollectionResult.push(product);
                }
                //search by product's tag
                if (product.tag.length > 0 && product.tag.includes(searchTerm)) {
                    productTagResult.push(product);
                }
            })
            result = [...productTitleResult, ...productCollectionResult, ...productTagResult];
            let updatedResult = [];
            result.forEach((product) => {
                if (!updatedResult.includes(product)) {
                    updatedResult.push(product)
                }
            });
            state.searchPageData = [...updatedResult];
            state.oriSearchPageData = [...updatedResult];
        },
        actionPagination: (state, action) => {
            //set current page to search param, and dispatch event to redux store
            let currentProductList = [...current(state).productList];
            let currentPaginationList = [...current(state).productPagination];
            if (window.location.href.includes('search')) currentProductList = [...current(state).searchPageData];
            let { page, currentPage, limit, totalPage, nextPage, previousPage } = action.payload;
            if (nextPage) {
                page = ++currentPage;
            } else if (previousPage) {
                page = --currentPage;
            }
            let updatedProduct = currentProductList.slice(page * limit - limit, page * limit);
            state.productPagination = updatedProduct;


        },
        actionViewProductPage: (state, action) => {
            state.productPageData = action.payload;
        },
        actionCartList: (state, action) => {
            let updatedCartList = action.payload ? action.payload : [];
            state.cartList = updatedCartList;
        },
    },
})

// Action creators are generated for each case reducer function
export const { actionFilter, actionQuickview, actionSort, actionToggleFilter, actionSearch, actionSearchPage, actionPagination, actionViewProductPage, actionCartList } = filterReducer.actions

export default filterReducer.reducer