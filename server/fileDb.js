const fs = require('fs');
const nanoid = require('nanoid');

const readFile = filename => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const writeFile = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
};

const filename = './db.json';

let data = [];

module.exports = {
    async init() {
        try {
            const fileContents = await readFile(filename);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            console.log('Could not read file ' + filename);
            data = [];
        }
    },
    async getPosts() {
        return data;
    },
    async getPostById(id) {
        return data.find(post => post.id === id);
    },
    async addPost(post) {
        post.id = nanoid();
        data.push(post);
        await this.save();
    },
    async editPost(post) {
        const postIndex = data.findIndex(post => post.id === post.id);
        data[postIndex] = post;
        await this.save();
    },
    async save() {
        const fileContents = JSON.stringify(data, null, 2);
        await writeFile(filename, fileContents);
    },
};