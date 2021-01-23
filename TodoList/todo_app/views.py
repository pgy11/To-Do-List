from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Todo
from django.urls import reverse

# Create your views(controller) here.
# request로 부터 parameter값을 받아서 valid check
# business method 호출
# template(view)에서 참조할 데이터 저장
# template 선택

# todo_app/
def index(request):
    todos = Todo.objects.all()
    context = {"todos": todos}
    return render(request, 'todo_app/index.html', context)


# todo_app/createTodo
def createTodo(request):
    # new_todo = TodoForm(request.POST)
    # new_todo.save()
    todoContent = request.POST['todoContent']
    new_todo = Todo(content=todoContent)
    new_todo.save()
    return HttpResponseRedirect(reverse('index'))


# todo_app/deleteTodo
def deleteTodo(request):
    delete_todo_id = request.GET['id']
    todo = Todo.objects.get(id=delete_todo_id)
    todo.delete()
    return HttpResponseRedirect(reverse('index'))



