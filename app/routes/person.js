const express = require('express');
const PersonController = require('../controllers/PersonController');

const router = express.Router();

// Get all
router.get('/', PersonController.index);

// Create one
router.post('/', PersonController.store);

// Update one
router.put('/:id', PersonController.update)

// Delete one
router.delete('/:id', PersonController.destroy);