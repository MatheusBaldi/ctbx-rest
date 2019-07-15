const express = require('express');
const PersonController = require('../controllers/PersonController');

const router = express.Router();

// Get all
router.get('/', PersonController.index);

// Store one
router.post('/', PersonController.store);

// // Show one
// router.get('/:id', PersonController.show);

// // Edit one
// router.get('/:id/edit', PersonController.edit);

// Update one
router.put('/:id', PersonController.update);

// Delete one
router.delete('/:id', PersonController.destroy);