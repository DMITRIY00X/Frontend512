import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import music from './db.json';


let nav = {"Главная": "/index", "Больше песен": "/music", "О сайте": "site", "Каталог": "/catalog", "Контакты": "/contacts"}

let db = music.people;

let playlist = "Мой плейлист";
let text = "Мой плейлист 2026"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App navigation = {nav} db = {db} title = {playlist} textFooter = {text} />
  </React.StrictMode>
);


