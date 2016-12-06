/**
 * Created by ZHICHEN on 12/5/16.
 */
module.exports = function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{}' + '\n');
}