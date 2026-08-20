package main

import "testing"

func TestAdd(t *testing.T) {
	todos := add(nil, "Go öwren")
	if len(todos) != 1 || todos[0].ID != 1 || todos[0].Title != "Go öwren" {
		t.Fatalf("garaşylmadyk netije: %#v", todos)
	}
}

func TestComplete(t *testing.T) {
	todos := []Todo{{ID: 1, Title: "Test ýaz"}}
	if !complete(todos, 1) {
		t.Fatal("ýumuş tapylmady")
	}
	if !todos[0].Completed {
		t.Fatal("ýumuş tamamlanan hökmünde bellenmedi")
	}
}

func TestCompleteUnknownID(t *testing.T) {
	if complete([]Todo{{ID: 1}}, 99) {
		t.Fatal("ýok ID tapylan hökmünde görkezildi")
	}
}
