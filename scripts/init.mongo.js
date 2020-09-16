/* global db print */
/* eslint no-restricted-globals: "off" */

// Type in intergrated terminal to run below - mongo issuetracker scripts/init.mongo.js ---------------V^v^v^v^v^v^v^v^V^V^V^V^v^V^V^
// USE TO REMOVE ALL RECORDS FROM ISSUES DATABASE & DELETED_ISSUES DATABASE

db.issues.remove({});
db.deleted_issues.remove({});

db.issues.createIndex({ title: 'text', description: 'text' });