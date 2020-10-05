const expect = require('chai').expect;
const { Falcon1024 } = require('../lib/index');
const { randomFillSync } = require('crypto');
const { doesNotReject } = require('assert');

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
    }));
    describe("Signature", (() => {
        before(async () => {
            this.message = Buffer.alloc(32, 0);
            randomFillSync(this.message);
            this.signature = await this.falcon.createSignature(this.message, this.keys.privateKey);
        });
        it('should return a signature', (() => {
            expect(this.signature.length).to.be.lessThan(1331);
        }));
    }));
    describe("Verify", (() => {
        it('should return verified', (async () => {
            let verify = await this.falcon.verifySignature(this.signature, this.message, this.keys.publicKey)
            .catch(err => console.log(err.message));
            expect(verify).to.equal(0);
        }));
    }));
    describe("Rejects", (() => {
        it('should reject bad message', (async () => {
            let bad = this.message;
            bad[10] &= 254;
            bad[22] &= 99;
            await this.falcon.verifySignature(this.signature, bad, this.keys.publicKey)
            .catch((err) => {
                expect(err.message).to.equal('not verified');
            });
        }));
        
        it('should reject bad signature', (async () => {
            let bad = this.signature;
            bad[1000] &= 254;
            bad[220] &= 99;
            await this.falcon.verifySignature(bad, this.message, this.keys.publicKey)
            .catch((err) => {
                expect(err.message).to.equal('not verified');
            });
        }));
        it('should reject bad key', (async () => {
            let bad = this.keys.publicKey;
            bad[150] &= 254;
            bad[220] &= 99;
            await this.falcon.verifySignature(this.signature, this.message, bad)
            .catch((err) => {
                expect(err.message).to.equal('not verified');
            });
        }));
    }));

    });
