import * as mongoose from 'mongoose';

const CrushSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    interesses: { type: String, required: true },
    idade: { type: String, required: true },
    descricao: { type: String, required: true },
    whatsapp: { type: String, required: true, unique: true },
    foto: { type: String, required: true },
    createAt: { type: Date, default: Date.now }
})

export default mongoose.model('Crushs', CrushSchema)