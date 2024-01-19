import socket

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
addr = ("127.0.0.1", 6000)


s.sendto('hello server!'.encode(), addr)

while True:
	response, addr = s.recvfrom(1024)
	print(response.decode())
	if response.decode() == "exit":
		print("Session is over from the server %s:%s\n" % addr)
		break

s.close()