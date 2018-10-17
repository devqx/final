import app from '../app';
import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();

//link chai with chaiHttp
chai.use(chaiHttp);

describe('GET /products', function(){
    it('should return all products', done => {
        chai.request(app)
            .get('api/v1/products')
            .end((err,res)=>{
                res.should.have.status(200)
                res.body.should.be.a('object')
                // res.body.length.should.be.eql(0);

                done();
            })
    })
})