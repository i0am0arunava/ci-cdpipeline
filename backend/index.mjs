// backend/index.js
import express from 'express';


const app = express();
const port = 5000;


app.use(express.json());

let articles = [
    { id: 1, title: 'Sample Article 1', content: 'This is the content of Sample Article 1' },
    { id: 2, title: 'Sample Article 2', content: 'This is the content of Sample Article 2' },
];

app.get('/articles', (req, res) => {
    res.json(articles);
});

app.get('/articles/:id', (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (!article) return res.status(404).send('Article not found');
    res.json(article);
});


app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
});