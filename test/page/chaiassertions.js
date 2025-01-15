import * as chai from "chai";
import { expect } from "chai";
chai.should();

describe( "asser" , ()=>{
    it("assertion" , async()=>{
        await browser.url("https://webdriver.io/")
        await browser.pause(3000)
          
        // let x = {
        //     milk :["1l" , "2l" , "3l"]
        // }
        //  x.should.be.a("object")
        //  x.milk.should.be.an("array")
        //  x.milk[0].should.be.a("string")
        // x.milk.should.have.lengthOf(3)
        // x.should.have.property('milk').with.lengthOf(3);
        // x.milk.should.exist
        // x.milk.should.not.exist
        // x.milk.should.equal
        // x.milk.should.not.equal
        // x.milk.should.Throw
        // x.milk.should.not.Throw

        // console.log("x:", x);
        // x.should.be.a("object");

        // console.log("x.milk:", x.milk);
        // x.milk.should.be.an("array");

        // console.log("x.milk[0]:", x.milk[0]);
        // x.milk[0].should.be.a("string");


        let x = {
            milk :["1l" , "2l" , "3l"]
        }

        // chai.assert.typeOf(x,"object")
        // chai.assert.typeOf(x , "object" , "x is a object")
        // chai.assert.equal(x.milk[0], "1l")
        // chai.assert.lengthOf(x.milk , 3)
        // chai.assert.lengthOf(x.milk, 3 , 'x has 3 types of milk');
        // chai.assert.isObject(x, "x is an object");
        // chai.assert.isArray(x.milk, "x.milk is an array");
        // chai.assert.strictEqual(x.milk[0], "1l", "The first element in x.milk is '1l'");
        // chai.assert.notStrictEqual(x.milk[1], "3l", "The second element in x.milk is not '3l'");
        // chai.assert.include(x.milk, "2l", "x.milk includes '2l'");
        // chai.assert.notDeepEqual({ x: 'milk' }, { x: 'coffee' });
        // chai.assert.notEqual(x, "string", 'x is not equal to string')

        // expect(x).to.be.a("object");
        // expect(x.milk).to.be.an("array");
        // expect(x.milk).to.have.lengthOf(3);
        // expect(x.milk[0]).to.be.a("string");
        // expect(x.milk[0]).to.equal("1l");
        // expect(x).to.deep.equal({
        //     milk: ["1l", "2l", "3l"]})
      

        })
    })
