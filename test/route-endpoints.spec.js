const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.should();
chai.use(chaiHttp);

// api end point tests
describe('api end points', function() {
    
    // artists end point
    describe('get artists', function() {
        it('should get all artists', function(done) {
            chai.request(server)
                .get('/api/artists')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                })
        });

        it('should get one artist', function(done) {
            chai.request(server)
                .get('/api/artists/1')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('ArtistId');
                    done();
                })
        });

    });

    // albums end point
    describe('get albums', function() {
        it('should get all albums', function(done) {
            chai.request(server)
                .get('/api/albums')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                })
        });

        it('should get one album', function(done) {
            chai.request(server)
                .get('/api/albums/1')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('AlbumId');
                    done();
                })
        });
    });
    
});