export const useLoansBooksAndPeopleMerge = (parent, child) => {
    const combined = [];
    for(let i = 0; i < parent.length; i++) {
      for(let j = 0; j < child.length; j++) {
        if(parent[i].PersonId === child[j].Id) {
          parent[i].FirstName = child[j].FirstName;
          parent[i].LastName = child[j].LastName;
          parent[i].Email = child[j].Email;
          parent[i].Address = child[j].Address;
          parent[i].PhoneNumber = child[j].PhoneNumber;
        }
      }
      
      combined.push(parent[i])
    }

    return combined;
  }