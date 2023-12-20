export const useLoansAndBooksMerge = (parent, child) => {
    const combined = [];
    for(let i = 0; i < parent.length; i++) {
      for(let j = 0; j < child.length; j++) {
        if(parent[i].BookId === child[j].Id) {
          parent[i].ISBN = child[j].ISBN;
          parent[i].Name = child[j].Name;
          parent[i].Author = child[j].Author;
          parent[i].Language = child[j].Language;
          parent[i].Description = child[j].Description;
          parent[i].Category = child[j].Category;
          parent[i].AuthorId = child[j].AuthorId;
        }
      }
      combined.push(parent[i])
    }

    return combined;
  }