import {Injectable} from '@angular/core';
// import brokers from './mock-brokers';
import sponsors from './mock-sponsors';

@Injectable()
export class SponsorService {

    findAll() {
        return Promise.resolve(sponsors);
    }

    findById(id) {
        return Promise.resolve(sponsors[id - 1]);
    }

}
