var Boom = require('boom');

/**
 * Return the user object as a JSON, we rework it here a bit to return the
 * projects in the organisations
 */
exports.get = function (request, reply) {
    var userObj = JSON.parse(JSON.stringify(request.auth.credentials));
    return reply({ user: userObj });
};
