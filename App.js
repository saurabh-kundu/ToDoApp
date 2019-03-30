var module = angular.module("ToDoModule", []);
var controller = module.controller("ToDoAppCtrl", ToDoAppCtrl);

function ToDoAppCtrl(){
	this.todos = [];
	var editButtonClicked = false;
	this.add =  function(){
		this.todos.push(this.newTodo);
		this.newTodo = "";
	}

	this.edit = function(){
		this.editButtonClicked = !this.editButtonClicked;
	}

	this.delete = function(index){
		this.todos.splice(index,1)
	}
}