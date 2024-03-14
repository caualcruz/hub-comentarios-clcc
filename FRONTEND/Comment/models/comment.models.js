class Comment {
  constructor(author, comment_text, created_at, updated_at) {
    if (
      (this.id !== undefined,
      this.author !== undefined,
      this.comment_text !== undefined,
      this.created_at !== undefined,
      this.updated_at !== undefined)
    ) {
      this.id = id;
      this.author = author;
      this.comment_text = comment_text;
      this.created_at = created_at;
      this.updated_at = updated_at;
    } else if ((this.author !== undefined, this.comment_text !== undefined)) {
      this.id = null;
      this.author = author;
      this.comment_text = comment_text;
      this.created_at = null;
      this.updated_at = null;
    } else {
      this.id = null;
      this.author = null;
      this.comment_text = null;
      this.created_at = null;
      this.updated_at = null;
    }
  }

  getId() {
    return this.id;
  }

  getAuthor() {
    return this.author;
  }

  setAutor(author) {
    this.author = author;
  }

  getComment_text() {
    return this.comment_text;
  }

  setComment_text() {
    this.comment_text = comment_text;
  }

  getCreated_at() {
    return this.created_at;
  }

  getUpdated_at() {
    return this.updated_at;
  }
}

export { Comment }
