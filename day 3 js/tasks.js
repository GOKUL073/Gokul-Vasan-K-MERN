
// 1. Variables & Data Types

const appName = "Task Manager";
let taskCount = 3;
const isActive = true;
const selectedTask = null;
let currentTask;

console.log("=== Variables & Data Types ===");
console.log(appName, typeof appName);
console.log(taskCount, typeof taskCount);
console.log(isActive, typeof isActive);
console.log(selectedTask, typeof selectedTask);
console.log(currentTask, typeof currentTask);


// 2. Objects

const user = {
    name: "Gokul",
    email: "gokul@example.com",
    role: "Developer"
};

// Destructuring
const { name, email, role } = user;

// Spread Operator
const updatedUser = {
    ...user,
    role: "Admin"
};

console.log("\n=== Objects ===");
console.log(user);
console.log(name, email, role);
console.log(updatedUser);


// 3. Array of Tasks

let tasks = [
    { id: 1, title: "Learn JavaScript", done: true },
    { id: 2, title: "Practice Arrays", done: false },
    { id: 3, title: "Build Task Manager", done: false }
];

let nextId = 4;


// 4. Arrow Functions

// Add Task
const addTask = (title) => {
    const newTask = {
        id: nextId++,
        title: title,
        done: false
    };

    tasks.push(newTask);
    return newTask;
};

// Delete Task
const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    return tasks;
};

// Mark Done
const markDone = (id) => {
    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, done: true }
            : task
    );
    return tasks;
};

// Get Task By ID
const getTaskById = (id) => {
    return tasks.find(task => task.id === id);
};

// Get Pending Tasks
const getPendingTasks = () => {
    return tasks.filter(task => !task.done);
};

// Get Task Titles
const getTaskTitles = () => {
    return tasks.map(task => task.title);
};

// Bonus: Task Summary
const getTaskSummary = () => {
    return {
        total: tasks.length,
        completed: tasks.filter(task => task.done).length,
        pending: tasks.filter(task => !task.done).length
    };
};


// 5. Testing

console.log("\n=== Initial Tasks ===");
console.log(tasks);

console.log("\n=== Add Task ===");
console.log(addTask("Complete JavaScript Assignment"));

console.log("\n=== Delete Task ===");
console.log(deleteTask(2));

console.log("\n=== Mark Done ===");
console.log(markDone(4));

console.log("\n=== Get Task By ID ===");
console.log(getTaskById(1));

console.log("\n=== Get Pending Tasks ===");
console.log(getPendingTasks());

console.log("\n=== Get Task Titles ===");
console.log(getTaskTitles());

console.log("\n=== Task Summary ===");
console.log(getTaskSummary());
