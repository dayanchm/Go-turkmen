package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"strconv"
)

type Todo struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

type Store struct {
	path string
}

func (s Store) Load() ([]Todo, error) {
	data, err := os.ReadFile(s.path)
	if errors.Is(err, os.ErrNotExist) {
		return []Todo{}, nil
	}
	if err != nil {
		return nil, err
	}

	var todos []Todo
	if err := json.Unmarshal(data, &todos); err != nil {
		return nil, err
	}
	return todos, nil
}

func (s Store) Save(todos []Todo) error {
	data, err := json.MarshalIndent(todos, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(s.path, data, 0o644)
}

func add(todos []Todo, title string) []Todo {
	nextID := 1
	for _, todo := range todos {
		if todo.ID >= nextID {
			nextID = todo.ID + 1
		}
	}
	return append(todos, Todo{ID: nextID, Title: title})
}

func complete(todos []Todo, id int) bool {
	for index := range todos {
		if todos[index].ID == id {
			todos[index].Completed = true
			return true
		}
	}
	return false
}

func printTodos(todos []Todo) {
	if len(todos) == 0 {
		fmt.Println("Ýumuş ýok.")
		return
	}
	for _, todo := range todos {
		mark := " "
		if todo.Completed {
			mark = "x"
		}
		fmt.Printf("%d. [%s] %s\n", todo.ID, mark, todo.Title)
	}
}

func usage() {
	fmt.Println("Ulanylyşy:")
	fmt.Println("  todo list")
	fmt.Println("  todo add \"Ýumuşyň ady\"")
	fmt.Println("  todo done ID")
}

func run(args []string, store Store) error {
	if len(args) < 1 {
		usage()
		return nil
	}

	todos, err := store.Load()
	if err != nil {
		return fmt.Errorf("maglumatlary okamak: %w", err)
	}

	switch args[0] {
	case "list":
		printTodos(todos)
		return nil
	case "add":
		if len(args) < 2 || args[1] == "" {
			return fmt.Errorf("ýumşuň adyny ýaz")
		}
		todos = add(todos, args[1])
	case "done":
		if len(args) < 2 {
			return fmt.Errorf("ýumşuň ID-sini ýaz")
		}
		id, err := strconv.Atoi(args[1])
		if err != nil {
			return fmt.Errorf("ID san bolmaly: %w", err)
		}
		if !complete(todos, id) {
			return fmt.Errorf("%d ID-li ýumuş tapylmady", id)
		}
	default:
		usage()
		return fmt.Errorf("näbelli buýruk: %s", args[0])
	}

	return store.Save(todos)
}

func main() {
	store := Store{path: "todos.json"}
	if err := run(os.Args[1:], store); err != nil {
		fmt.Fprintln(os.Stderr, "Ýalňyşlyk:", err)
		os.Exit(1)
	}
}
