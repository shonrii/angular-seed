import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../../app-core/models';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    /**
     * documentation: https://github.com/angular/in-memory-web-api
     * basic usage is as follows:
     * define some collection(s) to represent data returned from some endpoint(s)
     * i.e. const users = [ ... ]
     * you can define multiple collections
     */
    const users: User[] = [
      {
        id: 1,
        email: 'foo@test.com',
        firstName: 'Foo',
        lastName: 'Bar',
        password: 'password'
      }
    ];
    // const secondCollection = [ ... ]

    // return { collection1, collection 2 };
    return { users };
  }
}
