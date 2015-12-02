/**
 * This file contains the database layout, it has been abstracted so we got
 * a nice and simple overview of the database.
 */
var Schema = {
    user: {
        id: { type: 'increments', nullable: false, primary: true },
        email: { type: 'string', unique: true, nullable: false },
        password: { type: 'string', nullable: false },
        name: { type: 'string', nullable: false },
        first_name: { type: 'string', nullable: false },
        last_name: { type: 'string', nullable: false },
        avatar_url: { type: 'string', nullable: false, defaultTo: './avatar.png' },
        enabled: { type: 'boolean', nullable: false, defaultTo: true, comment: 'Is the account still active?' },
        scope: { type: 'string', nullable: false, defaultTo: 'user' },
        created_at: { type: 'dateTime', nullable: false },
        updated_at: { type: 'dateTime', nullable: true }
    },

    user_session: {
        id: { type: 'increments', nullable: false, primary: true },
        token: { type: 'string', unique: true, nullable: false },
        ip: { type: 'string', nullable: true },
        user_id: { references: 'id', inTable: 'user', type: 'integer', unsigned: true, nullable: false },
        user_agent: { type: 'text', nullable: true },
        created_at: { type: 'dateTime', nullable: false },
        updated_at: { type: 'dateTime', nullable: true }
    }
};

module.exports = Schema;
