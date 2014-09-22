// #!/usr/bin/env node
var debug = require('debug')('express_test');
var app = require('cloud/app.js');

app.set('port', 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
