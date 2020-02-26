var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
var request = require('request');
chai.use(chaiHttp);


describe('Customer', function () {
  it('should list ALL Customers on /users GET', function (done) {
    chai.request(server)
      .get('/users/')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  }).timeout(7000);

  it('should add a SINGLE Customer on /users POST', function (done) {
    chai.request(server)
      .post('/users/add')
      .send({
        "Name": "TestUser",
        "Gender": "male",
        "Email": "testuser@sable.com",
        "Address": "Amar paradigm",
        "City": "Pune",
        "State": "Maharashtra",
        "Country": "India",
        "HobbyString": "Reading, Cricket"
      })
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  }).timeout(7000);

});
