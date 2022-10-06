import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import usersRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Node API Home.');
    console.log(process.env.WEBEX_KEY);
    console.log(PORT);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));