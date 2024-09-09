const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Adjust path if needed
const sendEmail = require('../utils/sendEmail'); // Adjust path if needed

// POST route for handling product requests
router.post('/requestproducts', async (req, res) => {
  console.log('Received request:', req.body); // Log the request body

  try {
    const { productId, fullName, email } = req.body;

    if (!productId || !fullName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const emailContent = `
      Hello ${fullName},  
      I am interested in the [${product.productName}] that was donated recently.
      Could you please let me know if this item is still available and provide guidance on how I might be able to request or obtain it? 
      Thank you so much...
    `;

    await sendEmail(email, 'Product Details', emailContent);

    res.status(200).json({ message: 'Request processed successfully' });
  } catch (error) {
    console.error('Error in request-products route:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
