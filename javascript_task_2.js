let data;

data = [{
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
];

const interestCalculator = arr => {
    arr.forEach(tk => {
        let rate;
        if (tk.principal >= 2500 && tk.time > 1 && tk.time < 3) {
            rate = 3;
        } else if (tk.principal < 2500 || tk.time >= 3) {
            rate = 4;
        } else if (tk.principal < 2500 || tk.time <= 1) {
            rate = 2;
        } else {
            rate = 1;
        }
        let interest = (tk.principal * tk.time * rate) / 100;

        let interestData = [{
            principal: tk.principal,
            rate: rate,
            time: tk.time,
            interest: interest
        }];

        console.log(interestData);

        return interestData;
    });
};

interestCalculator(data);