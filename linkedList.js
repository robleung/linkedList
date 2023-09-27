const Node = (value) => {
  let value = value;
  let nextNode = null;
  return { value, nextNode };
};
const LinkedList = () => {
  let headNode = null;
  const append = (value) => {
    if (headNode == null) {
      headNode = Node(value);
    } else {
      let current = headNode.nextNode;
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = Node(value);
    }
  };
  const prepend = (value) => {
    if (headNode == null) {
      headNode = Node(value);
    } else {
      let temp = headNode;
      headNode = Node(value);
      headNode.nextNode = temp;
    }
  };
  const size = () => {
    if (headNode == null) {
      return 0;
    } else {
      let length = 1;
      let current = headNode.nextNode;
      while (current.nextNode != null) {
        current = current.nextNode;
        length++;
      }
      return length;
    }
  };
  const head = () => {
    return headNode;
  };
  const tail = () => {
    let current = headNode;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    return current;
  };

  return { append, prepend, size, head, tail };
};
