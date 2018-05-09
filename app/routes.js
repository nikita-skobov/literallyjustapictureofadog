module.exports = (app, port) => {

  //setup variables to be dynamically rendered into the dog.pug template
  var dog_url  = 'https://d1ahv7jqi833s4.cloudfront.net/dog.png'
  var my_email = 'nskobov.websites@gmail.com'
  var github   = 'https://github.com/nikita-skobov/literallyjustapictureofadog'

  //literally only need one route for this website
  app.get('/', (req, res) => {
    var real_ip = req.headers['x-real-ip'] || req.connection.remoteAddress
    var ua_device = req.headers['x-ua-device']
    console.log(real_ip, ua_device, new Date())
    //get the clients ip, and parsed user agent from nginx forwarded headers.
    //This is useful to see if a particular IP is spamming my server.

    res.render('dog', {url: dog_url, my_email: my_email, github: github})
    //dog.pug is the filename within the views folder.
  })

}
