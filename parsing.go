package main

import "github.com/google/uuid"

type DataPoints struct {
	ID           uuid.UUID
	Name         string
	Measurements Measurement
}

type Measurement struct {
	WaterContent float64
	// All of the other thingies back her
}
