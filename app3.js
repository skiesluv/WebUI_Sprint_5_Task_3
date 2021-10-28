class Worker {
    #experience = 1.2
    constructor(params) {
        this.fullName = params.fullName;
        this.dayRate = params.dayRate;
        this.workingDays = params.workingDays;
        this.#experience = 1.2;
    }

    showSalary() {
        return(this.dayRate * this.workingDays)
    }

    showExp() {
        return this.#experience
    }

    showSalaryWithExperience() {
        return (this.showSalary() * this.#experience);
    }
    get setExp()
    {
        return this.#experience;
    }
    set setExp(newValueExp)
    {
        this.#experience = newValueExp;
    }
}

const worker1 = new Worker(
    {
        fullName: "John Johnson",
        dayRate: 20,
        workingDays: 23
    }
);

const worker2 = new Worker(
    {
        fullName: "Tom Tomson",
        dayRate: 48,
        workingDays: 22
    }
);

const worker3 = new Worker(
    {
        fullName: "Andy Ander",
        dayRate: 29,
        workingDays: 23
    }
);

console.log(worker1.fullName);

console.log(worker1.showSalary());

console.log('New experience:', worker1.showExp())

console.log(worker1.showSalaryWithExperience());

worker1.setExp = 1.5

console.log('New experience:', worker1.showExp())

console.log(worker1.showSalaryWithExperience());

console.log(worker2.fullName);

console.log(worker2.showSalary());

console.log('. . . . . .')

console.log(worker3.fullName);

console.log(worker3.showSalary());

console.log('. . . . . .')


array = [
    {
        fullName: "John Johnson",
        dayRate: 20,
        workingDays: 23,
        salary: 690
    },

    {
        fullName: "Tom Tomson",
        dayRate: 48,
        workingDays: 22,
        salary: 1584
    },

    {
        fullName: "Andy Ander",
        dayRate: 29,
        workingDays: 23,
        salary: 1000.5
    }
]

console.log(array)

arr = [...array]

let sortedArray = arr.sort(function (a, b) {
  if (a.salary > b.salary) {
    return 1;
  }
  if (a.salary < b.salary) {
    return -1;
  }
  return 0;
});

console.log('Sorted salary:')

for (i = 0; i < sortedArray.length; i++){
    sorted = `${sortedArray[i].fullName}: ${sortedArray[i].salary}`
    console.log(sorted)
}