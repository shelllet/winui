#coding:utf-8
from socket import *
#''代表服务器为 localhost
myHost = ''
#在一个非保留端口号上进行监听
myPort = 6000
#设置一个TCP socket对象
sockobj = socket(AF_INET, SOCK_STREAM)
#绑定端口号
sockobj.bind((myHost, myPort))
#监听，允许5个连结
sockobj.listen(5)
#直到进程结束时才结束循环
while True:
    #等待客户端连接
    connection, address = sockobj.accept( )
    #连接是一个新的socket
    print('Server connected by', address)
    while True:
        #读取客户端套接字的下一行
        data = connection.recv(1024)
        #如果没有数量的话，那么跳出循环
        if not data: break
        #发送一个回复至客户端
        connection.send('Echo from server => '.encode() + data)
    #当socket关闭时eof
    connection.close( )