function Thread(id, name, username, permissions, post) {
  this.id = id;
  this.name = name;
  this.username = username;
  this.startTime = Date(Date.now());
  this.permissions = permissions;
  this.posts = post;
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

  createThread(id, name, username, text) {
    return new Thread(id, name, username, [new Permission(username, "write")], [new Post(username, text)]);
  },

  createPost(username, text, lastEditDate) {
    return new Post(username, text, lastEditDate);
  },

  createPermission(username, type) {
    return new Permission(username, type);
  },
}