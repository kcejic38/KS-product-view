exports.up = function (knex, Promise) {
  return knex.schema.createTable('shoe', (table) => {
    table.increments();
    table.string('color');
    table.string('type');
    table.string('model');
    table.string('sizes');
    table.string('price');
    table.integer('image_id').notNullable().references('id').inTable('image').onDelete('CASCADE').index();
    table.float('avg_stars');
    table.integer('review_count');
    table.timestamps(true, true)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('shoe')
};
