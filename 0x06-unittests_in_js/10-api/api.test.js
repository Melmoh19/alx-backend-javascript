const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return correct content type', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  it('should handle GET request method', (done) => {
    const options = {
      url: baseUrl,
      method: 'GET'
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct status code when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 when :id is NOT a number', (done) => {
    request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments endpoint', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct payment methods object', (done) => {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });

  it('should return JSON content type', (done) => {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      expect(response.headers['content-type']).to.include('application/json');
      done();
    });
  });
});

describe('/login endpoint', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: { userName: 'Betty' },
      headers: { 'Content-Type': 'application/json' }
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return welcome message with username', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: { userName: 'Betty' },
      headers: { 'Content-Type': 'application/json' }
    };
    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should handle different usernames', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: { userName: 'John' },
      headers: { 'Content-Type': 'application/json' }
    };
    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome John');
      done();
    });
  });

  it('should return text content type', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: { userName: 'Betty' },
      headers: { 'Content-Type': 'application/json' }
    };
    request(options, (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});
