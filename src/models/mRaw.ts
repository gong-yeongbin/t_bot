import mongoose from 'mongoose';
import { mRaw } from '../interfaces/mRaw';

const mRawSchema = new mongoose.Schema(
  {
    idx: { type: String }, // 종목코드 + 10자리 랜덤 문자열
    nm: { type: String }, // 종목이름
    lp: { type: Number }, // 전일가
    gb: { type: Number }, // 장구분 0: kospi, 10: kosdaq
    createdAt: { type: Date }, // 생성날짜
  },
  {
    collection: 'm_raw',
  }
);

mRawSchema.index({ createdAt: 1 });

export default mongoose.model<mRaw & mongoose.Document>('m_raw', mRawSchema);
