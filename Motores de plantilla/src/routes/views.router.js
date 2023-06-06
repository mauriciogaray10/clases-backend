import express, { Router } from 'express';

const router = Router();
let food =[ {name: 'gaseosa', price: 250},  {name: 'gaseosa', price: 250},  {name: 'gaseosa', price: 250},  {name: 'gaseosa', price: 250}];
router.get('/', (req,res)=>{
    let testUsers ={
        name: 'Mauricio',
        last_name: 'Garay',
        role: 'Admin'
    };
    res.render('index', {
        user: testUsers,
        style: 'index.css',
        isAdmin: testUsers.role === 'Admin',
        food
    })
})

export default router;