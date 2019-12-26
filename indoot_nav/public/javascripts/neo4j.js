var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver('bolt://localhost:11002', neo4j.auth.basic("neo4j", "04121995"));
var session = driver.session();
module.exports = {driver, session};