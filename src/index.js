const express = require("express");
require("./db")
const User = require("./models")

const app = express();
app.use(express.json());

//create user

app.post('/api/users', async (req, res) => {
    try{
        const user = new User({
            userName: req.body.userName,
            email: req.body.email
        })
        await user.save();
        return res.status(201).send(user);
    } catch (e) {
        return res.status(500).send(e)
    }
});

//read users

app.get('/api/users', async (req, res) => {
    try {
        const user = await User.find();
        return res.status(200).send(user);
    } catch (e) {
        return res.status(500).send(e)
    }
})

//read user by id

app.get('/api/users/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        return res.status(200).send(user);
    } catch (e) {
        return res.status(500).send(e)
    }
});

//update user by id

app.patch('/api/users/:id',async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findByIdAndUpdate(_id, req.body)
        if(user) {
            const _user = await User.findById(_id);
            return res.status(200).send(_user)
        } 
        else{
            return res.status(400).send("User updataion failed")
        }
    } catch(e) {
       return res.status(500).send(e) 
    }
})

//delete user by id

app.delete('/api/users/:id', async (req, res) => {
    const _id = req.params.id;
    try{
        const user = await User.findByIdAndDelete(_id);
        if(user) {
            return res.status(400).send("User is deleted succesfully")
        }
        return res.send("User deletion failed");
    } catch (e) {
        return res.status(500).send(e)
    }
})

app.listen(3000, () => {console.log("Lisenting on Port 3000")})