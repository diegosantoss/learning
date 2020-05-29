import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/app.js';

const injectHTML = (data, body) => {
    data = data.replace(
        '<div id="root"></div>',
        `<div id="root">${body}</div>`
    );
    return data;
};

const htmlData = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

export default (req, res) => {    
    const body = renderToString(<App />)
    const html = injectHTML(htmlData, body)
    res.send(html) 
}