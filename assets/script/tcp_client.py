#coding:utf-8
import sys
from socket import *
serverHost = 'localhost'
serverPort = 6000
#发送至服务端的默认文本
message = ['Hello network world']
#建立一个tcp/ip套接字对象
sockobj = socket(AF_INET, SOCK_STREAM)
#连接至服务器及端口
sockobj.connect((serverHost, serverPort))
for line in message:
    #经过套按字发送line至服务端
    sockobj.send(line.encode())
    #从服务端接收到的数据，上限为1k
    data = sockobj.recv(1024)
    print('Client received:', repr(data))
#关闭套接字
sockobj.close( )