# literallyjustapictureofadog
The title says it all


## Install
First make sure you have nodejs and npm installed, then git clone this repository, and cd into this repository


Next, run `npm install --save` to install the dependencies locally.
The server defaults to port 8081, but you can change that to any port you'd like. Edit this within the index.js file.

To run the server use either `node index.js` or  `nodejs index.js` or use a process manager such as pm2: `pm2 start index.js`

## Where does x-real-ip and x-ua-device come from?
x-real-ip and x-ua-device are referenced within the app/routes.js file.

They are headers which are passed as a proxy from nginx. x-real-ip is just the $remote_addr, but x-ua-device is a header that comes from a custom variable $ua_device which is mapped to a value such as desktop, tablet, or mobile. The code that accomplishes this is placed within the http block of the nginx.conf file. The code is as follows:
```
map $http_user_agent $ua_device {
  default 'desktop';
  ~*(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge\ |maemo|midp|mmp|mobile.+firefox|netfront|opera\ m(ob|in)i|palm(\ os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows\ ce|xda|xiino/i 'mobile';
  ~*android|ipad|playbook|silk/i 'tablet';
}
```

Please note this is only applicable if you are using nginx as a reverse proxy for your nodejs app. If this is not the case, make sure to comment out lines 10,11, and 12 in app/routes.js
