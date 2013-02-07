class Node(object):
	def __init__(self, content=None):
		self.content = content
		self.next = None

class Stack(object):
	def __init__(self):
		self.topnode = None
		self.size = 0

	def push(self, item):
		node = Node(item)
		node.next = self.topnode
		self.topnode = node
		self.size += 1

	def pop(self):
		if self.size < 1:
			return None
		popnode = self.topnode
		self.topnode = self.topnode.next
		self.size -= 1
		return popnode.content

	def peek(self):
		return self.topnode.content

stack = Stack()
stack.push(1)
stack.push(2)
stack.push("huh!")
print stack.pop()
print stack.peek()