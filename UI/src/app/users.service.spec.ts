import { async, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { UsersService } from './users.service';
describe('UserService', () => {



    let service: UsersService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UsersService]
        });

        afterEach(() => {

        });
        it(`should have a title 'I love pizza!'`, async(() => {

            expect('I love pizza!').toEqual('I love pizza!');
        }));

        it('should be get data using GET', () => {

            console.log("Inside Test Case.")
            service.getUsers().subscribe(customers => {
                console.log(customers);
                expect(customers.toString).toBe(2);

            });
        });

    })
});