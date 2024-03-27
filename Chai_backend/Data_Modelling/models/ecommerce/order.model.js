import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    types: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  quantity: {
    types: Number,
    required: true,
  },
});

const orederSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    custoemr: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    OrderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = new mongoose.model('Order', orederSchema);
