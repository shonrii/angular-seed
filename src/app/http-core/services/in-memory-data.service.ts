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
        avatar: 'svg-1',
        firstName: 'Foo',
        lastName: 'Bar',
        password: 'password',
        isAdmin: true
      },
      {
        id: 2,
        email: 'llugo@test.com',
        avatar: 'svg-11',
        firstName: 'Lia',
        lastName: 'Lugo',
        password: 'password',
        isAdmin: true
      },
      {
        id: 3,
        email: 'gduke@test.com',
        avatar: 'svg-12',
        firstName: 'George',
        lastName: 'Duke',
        password: 'password',
        isAdmin: false
      },
      {
        id: 4,
        email: 'gdelosreyes@test.com',
        avatar: 'svg-13',
        firstName: 'Gener',
        lastName: 'Delosreyes',
        password: 'password',
        isAdmin: true
      },
      {
        id: 5,
        email: 'lray@test.com',
        avatar: 'svg-14',
        firstName: 'Lawrence',
        lastName: 'Ray',
        password: 'password',
        isAdmin: false
      },
      {
        id: 6,
        email: 'eurbina@test.com',
        avatar: 'svg-10',
        firstName: 'Ernesto',
        lastName: 'Urbina',
        password: 'password'
      },
      {
        id: 7,
        email: 'gferrer@test.com',
        avatar: 'svg-16',
        firstName: 'Gani',
        lastName: 'Ferrer',
        password: 'password'
      },
    ];
    // const secondCollection = [ ... ]

    // return { collection1, collection 2 };
    return { users };
  }
}
