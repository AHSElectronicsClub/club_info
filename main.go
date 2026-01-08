package main

import (
	"log"
	"net"
)

func main() {
	connName := "whatever the server is running on and the port to access the bouys:1235"
	listener, err := net.Listen("tcp", connName)
	if err != nil {
		log.Fatal(err)
	}

	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Println(err)
			continue
		}
		go HandleConn(conn)
	}
}
