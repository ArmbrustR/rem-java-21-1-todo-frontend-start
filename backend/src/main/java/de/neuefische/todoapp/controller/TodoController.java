package de.neuefische.todoapp.controller;

import de.neuefische.todoapp.model.AddTodoDto;
import de.neuefische.todoapp.model.Todo;
import de.neuefische.todoapp.model.TodoFactory;
import de.neuefische.todoapp.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/todo")
public class TodoController {

    private final TodoService todoService;
    private final TodoFactory todoFactory;

    @Autowired
    public TodoController(TodoService todoService, TodoFactory todoFactory) {
        this.todoService = todoService;
        this.todoFactory = todoFactory;
    }

    @GetMapping
    public List<Todo> getAllTodos(){
        return todoService.getTodos();
    }

    @PostMapping
    public Todo createNewTodo(@RequestBody AddTodoDto dto){
        return todoService.addTodo(todoFactory.createTodo(dto));
    }

}
