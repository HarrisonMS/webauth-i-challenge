const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const sessions = require("express-session");
const KnexSessionStore = require("connect-session-knex")(sessions)
const knex = require("../data/dbConfig")

const sessionConfiguration = {
    name: "chocychip",
    secret: "keep it safe for my lil yoda he loves them",
    saveUninitialized: true,
    resave:false,
    store: new KnexSessionStore({
        knex,
        createtable: true,

        clearInterva: 1000 * 50 * 10,
        sidfieldname: "sid",
        tablename: "sessions",
    }),
    cookie: {
        maxAge: 1000 * 60 * 10, 
        secure: false,
        httpOnly: true,
    },
};

module.exports = server => {
    server.use(sessions(sessionConfiguration))
    server.use(helmet());
    server.use(express.json());
    server.use(cors());
};

