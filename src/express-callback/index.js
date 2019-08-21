module.exports = function makeExpressCallabck (controller) {
  return (req, res) => {
      const httpRequest = {
        body: req.body,
        query: req.query,
        params: req.params,
        ip: req.ip,
        method: req.method,
        path: req.path,
        token : (req.headers['authorization'] ? req.headers['authorization'] : ''),
        host : req.headers.host,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'cache-control, content-type, Content-Type, Accept, Authorization, authorization',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS,FILES',
          'Referer': req.get('referer'),
          'User-Agent': req.get('User-Agent')
        }
      }
      
      controller(httpRequest)
      .then(httpResponse => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers)
        }
        res.type('json')
        res.send(httpResponse.body)
      })
      .catch(e => res.status(500).send({ error: 'An unkown error occurred.' }))    
    
    }
  }
