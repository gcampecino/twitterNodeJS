//  This is a Constructor function
function Tweet(content, created_at, link, username) {
  this.content = content;
  this.created_at = created_at;
  this.link = link;
  this.username = username;
}

// Sets the content
// 
Tweet.prototype.setContent = function(content) {
    this.content = content;
};

// Gets the content
// 
Tweet.prototype.getContent = function() {
    return this.content;
};

// Sets the created_at
// 
Tweet.prototype.setCreatedAt = function(date) {
    this.created_at = date;
};

// Gets the created_at
// 
Tweet.prototype.getCreatedAt = function() {
    return this.created_at;
};

// Sets the link
// 
Tweet.prototype.setLink = function(link) {
    this.link = link;
};

// Gets the link
// 
Tweet.prototype.getLink = function() {
    return this.link;
};

// Sets the username retweets and mentions
// 
Tweet.prototype.setUsername = function(username) {
    this.username = username;
};

// Gets the username retweets and mentions
// 
Tweet.prototype.getUsername = function() {
    return this.username;
};

module.exports = Tweet;