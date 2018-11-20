function Thread(name, username, startTime) {
    this.name = name;
    this.username = username;
    this.startTime = startTime;
    this.permissions = [];
    this.posts = [];
}

function Post(username, text, lastEditDate) {
    this.username = username;
    this.creationDate = Date(Date.now());
    lastEditDate ? this.lastEditDate = lastEditDate : this.lastEditDate = undefined;
    this.text = text;
}

function Permission(username, type) {
    this.username = username;
    this.type = type;
}

export default {

    createThread(name, username, startTime) {
        return new Thread(name, username, startTime);
    },

    createPost(username, text, lastEditDate) {
        return new Post(username, text, lastEditDate);
    },

    createPermission(username, type) {
        return new Permission(username, type);
    },
}