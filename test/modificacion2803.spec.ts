import 'mocha';
import {expect} from 'chai';
import {add} from '../src/index';

describe ('modificacion2803', () => {
    
    it ('should add two numbers', () => {
        expect(add(1, 2)).to.equal(3);
    });
});

