// this is to create a server.
import express from 'express';
import fs from 'fs';
import path from 'path';

// now we need to render our app on server in order to do that we need following imports.
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from '../src/App';

const app = express();

app.use('^/$', (req, res, next) => {
    const buildFile = path.resolve('./build/index.html');
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.err(err);
            return res.status(500).send("SSR Error occured.");
        } 

        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} >
                <App />
            </StaticRouter>
        );


        return res.send(data.replace(
            '<div id="root"></div>', 
            `<div id="root">${html}</div>`)
        );

    })
})

app.use(express.static(path.resolve(__dirname, '../', 'build')));

app.listen(8001, () => {
    console.log('App launched on 8001');
})