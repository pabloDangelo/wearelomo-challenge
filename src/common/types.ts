interface ITask {
    id: number;
    title: string; 
    status: string; 
    // user_id: number;
    // due_on: string;
  }

class Task implements Task {
    id: number;
    title: string; 
    status: string;

    constructor(id: number, title: string, status: string) {
        this.id = id;
        this.title = title; 
        this.status = status;
      }
}

export { Task };
export type { ITask };
