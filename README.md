# BigCommerce tutorials
Project related to BigCommerce 


### Store Credit APP

 *This sample node js application helps to convert a gift certificate order to store credit for the customer*
 
 <pre>
 
    1. update the dev.env with your store details
    2. npm start
    
    THIS IS NOT PRODUCTION READY CODE. KINDLY MAKE YOUR REQUIRED CHANGES AND TEST BEFORE DEPLOYING IT FOR PRODUCTION USE.
    
</pre>

##### Use Case:
<pre>
Merchant wants to create eWallet kind of service in this website. So customers can prepay the wallet and get some discounts to buy stuff using wallet money. In Bigcommerce, store credit can be used as eWallet and this api provides a solution to address this requirement. Here, I converted the gift card certificate order into corresponding eWallet money which the customers can use as payment.
</pre>

##### Steps:
<pre>
This app can be hosted as middleware webhook API service. 

1. Create Webhook - Whenever order is created

   POST: https://api.bigcommerce.com/stores/{{store-hash}}/v2/hooks/
   
   {
    "scope": "store/order/created",
    "destination": "https://<Hosted webhook API URL>", -- http://localhost:3000/hooks/storecredit 
    "headers": {}
   }
 
2. Host the node js locally (dev) or as a middleware ( cloud functions ) to receive the order data and filter gift card certificate order and convert it into store credit. 
 
   POST: http://localhost:3000/hooks/storecredit
 
   {
    "created_at": 1611183495,
    "store_id": "1001523817",
    "producer": "stores/i0hl4l1z1p",
    "scope": "store/order/updated",
    "hash": "c2c5065cba1783c0262bfdf689f563274c6b9afb",
    "data": {
      "type": "order",
      "id": 230,
    }
  }
