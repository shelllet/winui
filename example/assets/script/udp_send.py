import socket
import time

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
addr = ("127.0.0.1", 6000)



while True:
	s.sendto('hello server!'.encode(), addr)
	time.sleep(1)

s.close()