import { BaseRepository } from '../shared/base-repository.js';
import * as models from '../database/models';

export class AuthRepository extends BaseRepository<models.User> {
  constructor(protected users: typeof models.User) {
    super(users);
  }
}
