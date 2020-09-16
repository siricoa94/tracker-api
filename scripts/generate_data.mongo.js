/* global db pring */
/* eslint no-restricted-globals: "off" */

// Type in intergrated terminal to run below - mongo issuetracker scripts/generate_data.mongo.js ---------------V^v^v^v^v^v^v^v^V^V^V^V^v^V^V^
// USE TO POPULATE ISSUES DATABASE WITH 100 RANDOM RECORDS ALL FOLLOWING A SIMILAR FORMAT

const owners = ['Raven', 'Laural', 'Henry', 'Stason', 'Victor', 'Eddie',"John"];
const statuses = ['New', 'Assigned', 'Fixed', 'Closed'];

const initialCount = db.issue.count();

for (let i = 0; i < 300; i += 1) {
    const randomCreatedDate = (new Date()) - Math.floor(Math.random() * 60) * 1000 * 60 * 60 * 24;
    const created = new Date(randomCreatedDate);
    const randomDueDate = (new Date()) - Math.floor(Math.random() * 60) * 1000 * 60 * 60 * 24;
    const due = new Date(randomDueDate);

    const owner = owners[Math.floor(Math.random() * 7)];
    const status = statuses[Math.floor(Math.random() * 4)];
    const effort = Math.ceil(Math.random() * 20);
    const title = `Lorem ipsum dolor sit amet, ${i}`;
    const id = initialCount + i + 1;

    const issue = {
        id, title, created, due, owner, status, effort
    };

    db.issues.insertOne(issue);
}

const count = db.issues.count();
db.counters.update({ _id: 'issues' }, { $set: { current: count } });

print('New issue count: ', count);