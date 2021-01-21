"use strict";
const request = require("request-promise");
var _ = require("lodash");

/*  Updates store credit to a customer object
 ** It will override the customer store credit. Invoke getcustomer API, retrieve existing store credit
 ** and append if you have to do top-up before invoking this method
 */
async function updateStoreCredit(credit_amt, customer_id) {

    const options = {
        method: "PUT",
        uri: `https://api.bigcommerce.com/stores/${process.env.BC_STORE_HASH}/v3/customers`,
        headers: {
            accept: "application/json",
            "X-Auth-Client": process.env.BC_CLIENT,
            "X-Auth-Token": process.env.BC_TOKEN,
            "content-type": "application/json"
        },
        body: [{
            id: customer_id,
            store_credit_amounts: [{
                amount: credit_amt
            }]
        }],
        json: true
    };
    console.log("*********options ************", options);
    var updateGroup = request(options);
    return updateGroup;
}

async function getOrderData(orderDataId) {
    const options = {
        method: "GET",
        uri: `https://api.bigcommerce.com/stores/${process.env.BC_STORE_HASH}/v2/orders/${orderDataId}`,
        headers: {
            accept: "application/json",
            "X-Auth-Client": process.env.BC_CLIENT,
            "X-Auth-Token": process.env.BC_TOKEN,
            "Content-Type": "application/json"
        }
    };

    const orderData = await request(options);
    console.log(orderData);

    return orderData;

}

async function getOrderDataProducts(orderDataId) {
    const options = {
        method: "GET",
        uri: `https://api.bigcommerce.com/stores/${process.env.BC_STORE_HASH}/v2/orders/${orderDataId}/products`,
        headers: {
            accept: "application/json",
            "X-Auth-Client": process.env.BC_CLIENT,
            "X-Auth-Token": process.env.BC_TOKEN
        }
    };
    var orderProductData = request(options);
    return orderProductData;
}
var express = require('express');
var router = express.Router();

/* POST update store credit */
router.post('/storecredit', async function(req, res, next) {
    let orderhookdata = req.body;
    const orderData = await getOrderData(orderhookdata.data.id);
    const orderDataRaw = JSON.parse(orderData);
    const orderProductData = await getOrderDataProducts(orderhookdata.data.id);
    console.log(JSON.stringify(orderProductData));
    const orderItemsData = JSON.parse(orderProductData);

    let customer_id = orderDataRaw.customer_id;
    let orderType = orderItemsData[0].type;
    let base_total = orderItemsData[0].base_total;

    console.log("********** customer_id***********", customer_id);
    console.log(orderItemsData[0].type);
    console.log(orderItemsData[0].base_total);

    if (orderType == 'giftcertificate') {
        const updateStoreCreditRes = await updateStoreCredit(base_total, customer_id);
        console.log("updateStoreCreditRes", updateStoreCreditRes);

    }
    //const orderData = JSON.parse(orderDataRaw);
    res.send('Store Credit Applied to the customer id ' + customer_id);
});

module.exports = router;