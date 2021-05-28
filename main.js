const qrvr = require('qrvr');

qrvr.start().then(
  s => console.log('started', s),
  errorCode => {
    // Handle error code, as per https://github.com/ValveSoftware/openvr/wiki/HmdError
    console.log(errorCode);
  }
);