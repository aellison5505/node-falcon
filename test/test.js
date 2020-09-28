const expect = require('chai').expect;
const { Falcon1024 } = require('../lib/index');

describe('Falcon 1024', () =>{
    before(() =>{
        this.falcon = new Falcon1024();
    })
    describe('Key Pair', (()=>{
        before(async ()=>{
            this.keys = await this.falcon.createKeys(); 
        });
        it('Public Key should be 1793 bytes',() =>{
            expect(this.keys.publicKey.length).to.equal(1793) ;
        });
        it('Private Key should be 2305 bytes',() =>{
            expect(this.keys.privateKey.length).to.equal(2305) ;
        })
    }))
})