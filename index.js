const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 7000;


app.get('/', (req, res) => {
    res.send('hello Mister');
})

const users = [
    { id: 0, email: 'muhsin@gmail.com', phone: 121121 },
    { id: 1, email: 'lahin@gmail.com', phone: 2234 },
    { id: 2, email: 'sakib@gmail.com', phone: 323 },
    { id: 3, email: 'shahin@gmail.com', phone: 563534 },
    { id: 4, email: 'ahad@gmail.com', phone: 45434 },

]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResults = users.filter(user => user.email.includes(search));
        res.send(searchResults)
    } else {
        res.send(users)
    }

})

// post method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the  post', req.body)
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})






app.listen(port, () => {
    console.log('listening on port', port)
})








































// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;


// app.get('/', (req, res) => {
//     res.send('hello world! M is back');
// })

// app.listen(port, () => {
//     console.log('listening on port', port)
// });

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;


// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// app.listen(port, () => {
//     console.log('listening on port', port)
// })
