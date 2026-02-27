import socket

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.bind(("127.0.0.1", 6001))
print("UDP bound on port 6001...")

while True:
	data, addr = s.recvfrom(1024)
	print("Receive from ", addr, data)
	if data == b"exit":
		s.sendto(b"Good bye!\n", addr)
		continue
	s.sendto(b"Hello client, i'm a boy!" , addr)
