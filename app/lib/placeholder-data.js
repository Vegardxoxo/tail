const todos = [
    {
        id: "1",
        title: "Todo 1",
        description: "This is the description for Todo 1",
        status: "pending",
        user_id: "user1",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: "2",
        title: "Todo 2",
        description: "This is the description for Todo 2",
        status: "completed",
        user_id: "user2",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    // Add more todos as needed
];

module.exports = todos;