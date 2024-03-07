const razorpay = require("../config/razorpay-instance");
const Razorpay = require('../models/razorpay-schema');

// Customer Controllers
module.exports.createCustomer = async (req, res) => {
    const { name, contact, email, course } = req.body;
    const response = await razorpay.customers.create({ name, contact, email, notes: [{course}] })
    return res.send(response);

    // .then((response) => {
        // if (!response.error) {
        //     return res.status(201).json({ id: response.id });
        // } else {
        //     return res.status(400).send(`An error occured while creating the customer: ${ response.error }`);
        // }
    // }, (err) => {
    //     return res.status(500).send(`Internal Server Error: ${err.message}`);
    // })
}

module.exports.editCustomer = (req, res) => {
    const { id } = req.params;
    const { name, contact, email, course } = req.body;
    razorpay.customers.edit(id, { name, contact, email }).then((response) => {
        if (!response.error) {
            return res.status(200).json(response);
        } else {
            return res.status(404).send(`The customer with ID "${id}" was not found.`);
        }
    }).catch(() => {
        return res.status(500).send('Internal Server Error')
    })
}

module.exports.fetchALlCustomers = (req, res) => {
    razorpay.customers.all().then((response) => {
        return res.status(200).json(response);
    }).catch((err) => {
        return res.status(500).send('Internal Server Error');
    })
}

module.exports.fetchCustomerById = (req, res) => {
    const { id } = req.params;
    razorpay.customers.fetch(id).then((customer) => {
        if (customer.entity === 'customer') {
            return res.status(200).json(customer);
        } else {
            return res.status(404).send(`No customer with the Id="${id}" was found`);
        }
    }).catch((err) => {
        return res.status(400).send(`Error fetching the customer with the Id="${id}". ${err.description}`);
    });
}


// Order Controllers
module.exports.createOrder = (req, res) => {
    const { amount, currency, receipt } = req.body;
    razorpay.orders.create({
        'amount': amount * 100,
        'currency': currency,
        'receipt': receipt
    }).then((order) => {
        return res.status(200).json(order);
    }).catch((error) => {
        console.log("ERROR", error);
        return res.status(500).json(error);
    });
}

module.exports.fetchAllOrders = (req, res) => {
    razorpay.orders.all()
    .then((orders) => {
        return res.status(200).json(orders);
    }).catch((error) => {
            return res.status(500).json(error);
    });
}

module.exports.fetchOrderById = (req, res) => {

    const orderId = req.params.order_id;

    razorpay.orders.fetch(orderId).then((order) => {
        return res.status(200).json(order);
    }).catch((error) => {
        return res.status(404).json({'error': `Order with order_id=${req.params.orderId} not found`});
    })
}

// Fetch Payments
module.exports.fetchPayments = (req, res) => {
    let orderId = req.query.order_id;
    
    if (!orderId) {
        return res.status(400).send({'Error': 'Please provide order_id'})
    } else {
        razorpay.orders.fetchPayments(orderId)
        .then((payments) => {
            return res.status(200).json(payments);
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
    }
}

// Only notes can be edited for an Order
module.exports.updateOrder = (req, res) => {
    const orderId = req.query.order_id;
    razorpay.orders.edit(orderId, req.body);
}

//Create QR Code
module.exports.createQRCode = (req, res) => {
    const { type, name, usage, fixed_amount, payment_amount, description, customer_id } = req.body;
    const currentTimestamp = Date.now();
    const close_by = new Date(currentTimestamp + 15 * 60 * 1000); // closing in the next 15 mins

    razorpay.qrCode.create({
        type,
        name,
        usage,
        fixed_amount,
        payment_amount,
        description,
        customer_id,
        close_by: Math.floor(close_by.getTime() / 1000) // convert to Unix timestamp (in seconds)
    })
    .then((response) => {
        return res.status(200).json(response);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
}