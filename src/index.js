import express from 'express';
import path from 'path';
import auth from './routes/auth';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', auth);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(8080, () => console.log("Golden Ducks running on 8080"));