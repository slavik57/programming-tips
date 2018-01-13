exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.raw('alter table cats add rank integer')
  ])
}
exports.down = function () {
  return Promise.all([
    knex.schema.raw('alter table cats drop column rank')
  ])
}
