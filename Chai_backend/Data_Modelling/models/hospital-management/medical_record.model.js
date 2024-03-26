import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

export const MedicalRecord = new mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
