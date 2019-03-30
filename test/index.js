const express = require('express');
const chai = require('chai');
const chaiHttp = require('chai-http');
const bodyParser = require('body-parser');
const thanos = require('../index');
chai.should();
chai.use(chaiHttp);

describe('thanos', () => {
  var app;

  app = express();

  app.get('/', thanos, (req, res, next) => {
    res.status(200).json("Thank god you're alive");
  });

  it("First request should get Thanos'd", done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(301);
        done();
      });
  });

  it("Second request should NOT get Thanos'd", done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("Third request should get Thanos'd", done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(301);
        done();
      });
  });

  it('etc...', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
