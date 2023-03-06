interface ITask {
    id: number;
    title: string; 
    status: string; 
    // user_id: number;
    // due_on: string;
  }

class Task implements ITask {
    id: number;
    title: string; 
    status: string;

    constructor(id: number, title: string, status: string) {
        this.id = id;
        this.title = title; 
        this.status = status;
      }
}

interface IUser {
  id: number,
  name: string,
  email: string,
  gender: string,
  status: string
}

class User implements IUser {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;

  constructor(id: number, name: string, email: string, gender: string, status: string) {
      this.id = id;
      this.name = name; 
      this.email = email; 
      this.gender = gender; 
      this.status = status;
    }
}

export { Task, User };
export type { ITask, IUser };
