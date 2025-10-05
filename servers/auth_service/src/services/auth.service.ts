import * as HelperClass from '../shared/helper';
import * as repositories from '../repositories';

export class AuthService extends HelperClass.helper {
  constructor(private __repo: typeof repositories.authRepository) {
    super();
  }
}
