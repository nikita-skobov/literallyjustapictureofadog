module.exports = (app, port) => {
  //literally only need one route for this website
  app.get('/', (req, res) => {
    var real_ip = req.headers['x-real-ip'] || req.connection.remoteAddress
    var ua_device = req.headers['x-ua-device']
    console.log(real_ip, ua_device, new Date())
    //get the clients ip, and parsed user agent from nginx forwarded headers.
    //This is useful to see if a particular IP is spamming my server.

    res.render('dog') //dog.pug is the filename within the views folder.
  })

}
