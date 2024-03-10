const razorpay = require("../config/razorpay-instance");
const RazorpayModel = require('../models/razorpay-schema')

// Customer Controllers

module.exports.checkCustomer = async (req, res) => {
    try {
        const customer = await RazorpayModel.findOne({ user_id: req.user._id });
        if (!customer) res.json({ existingCustomer: false  });
        else res.json({ existingCustomer: true, customer });
    } catch (err) {
        return res.status(500).send(`Internal Server Error${err}`);
    }
}

module.exports.createCustomer = async (req, res) => {
    const { name, contact, email, course } = req.body;
    try{
        const response = await razorpay.customers.create({ name, contact, email, notes: { course } });
        RazorpayModel.create({
            user_id: req.user._id,
            customer: response
        })
        return res.send(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error', status: false });
    }
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
    razorpay.orders.create({ amount, currency, receipt})
    .then((order) => {
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
    const { name, payment_amount, description, customer_id } = req.body;
    const currentTimestamp = Date.now();
    const close_by = new Date(currentTimestamp + 15 * 60 * 1000);

    razorpay.qrCode.create({
        type: "upi_qr",
        name,
        usage: "single_use",
        fixed_amount: true,
        payment_amount,
        description,
        customer_id,
        close_by: Math.floor(close_by.getTime() / 1000)
    })
    .then((response) => {
        return res.status(200).json(response);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
}