export const getColumnHeaders = async () => {
  const kanbanHeaders = [
    {
      "id": "1123",
      "key": "backlog",
      "title": "Backlog"
    },
    {
      "id": "2321",
      "key": "todo",
      "title": "To Do"
    },
    {
      "id": "3312",
      "key": "in-progress",
      "title": "In Progress"
    },
    {
      "id": "4123",
      "key": "done",
      "title": "Done"
    }
  ]
  try {
 
    return kanbanHeaders;
  } catch (error) {
    console.error(error);
    return kanbanHeaders
  }
};
