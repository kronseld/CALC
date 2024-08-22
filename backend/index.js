const PORT = 9001;

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/calcs', (req, res) => {

    const calcs = [
        {
        id: 1,
        description: "Калькулятор ипотеки",
        var1: "Стоимость недвижимости",
        var2: "Первоначальный взнос",
        var3: "Срок кредита",
        var4: "Процентная ставка",
        result1_name: "Сумма кредита",
        result1_formula: "var1-var2",
        result2_name: "Общая ставка",
        result2_formula: "Math.pow(1+const1/12/100, var3*12)",
        result3_name: "Ежемесячный платеж",
        result3_formula: "(var1-var2)*(const1/12/100)*Math.pow(1+const1/12/100, var3*12)/(Math.pow(1+const1/12/100, var3*12)-1)",
        result4_name: "Необходимый доход",
        result4_formula: "((var1-var2)*(const1/12/100)*Math.pow(1+const1/12/100, var3*12)/(Math.pow(1+const1/12/100, var3*12)-1))*2.5"        
    }]

    console.log(req.body);
    res.json({
        data: calcs
    })
})

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()