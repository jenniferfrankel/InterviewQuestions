class Stack(object):
	def __init__(self):
		self.content = []
		self.size = 0

	def push(self, item):
		self.content.append(item)
		self.size = len(self.content)

	def pop(self):
		if self.size < 1:
			print "Oops! Stack is empty"
			return None
		self.size -= 1
		item = self.content[self.size]
		self.content = self.content[0:self.size]
		return item

	def peek(self):
		if self.size < 1:
			return None
		return self.content[self.size - 1]
