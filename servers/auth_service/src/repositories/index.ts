import { AuthRepository } from './auth.repository';
import db from '../database/models';

export const authRepository = new AuthRepository(db.user);
