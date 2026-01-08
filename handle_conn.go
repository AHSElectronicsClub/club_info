package main

import (
	"bufio"
	"net"
)

func HandleConn(conn net.Conn) {
	defer conn.Close()

	reader := bufio.NewReader(conn)
	bytes := make([]byte, reader.Buffered())
	reader.Read(bytes)

	// Store the data however we're going to do that
}
