const { Payment } = require('../models');

exports.processPayment = async (req, res) => {
    try {
        const { paymentMethod, cardNumber, cardHolder, expiry, cvc, cashAmount } = req.body;

        // Save payment details to the database
        const newPayment = await Payment.create({
            paymentMethod,
            cardNumber: paymentMethod === "credit" ? cardNumber : null,
            cardHolder: paymentMethod === "credit" ? cardHolder : null,
            expiry: paymentMethod === "credit" ? expiry : null,
            cvc: paymentMethod === "credit" ? cvc : null,
            cashAmount: paymentMethod === "cash" ? cashAmount : null
        });

        res.status(201).json({ message: "Payment processed successfully", payment: newPayment });
    } catch (error) {
        console.error("Payment processing error:", error);
        res.status(500).json({ message: "Error processing payment", error: error.message });
    }
};
