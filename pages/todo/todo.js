Page({
  data: {
    value: "",
    todos: ['学习java', '学习php', '学习javascript'],
    toast: {
      isHidden: true,
      message: ''
    }
  },
  onInput: function(e) {
    this.setData({value: e.detail.value})
  },
  addTask: function() {
    if(this.data.value == "") {
      this.setData({toast: {
          isHidden: false,
          message: '请输入内容'
      }})  
      return;
    }
    if(this.data.value == this.data.todos[this.data.todos.length - 1]) {
        this.setData({toast: {
          isHidden: false,
          message: '请勿输入相同任务'
      }})  
      return;
    }
    var newTodos = this.data.todos;
    newTodos.push(this.data.value);
    this.setData({todos: newTodos});
  },
  toastChange: function() {
      this.setData({toast: {
          isHidden: true,
          message: ''
      }})
  },
  onDone: function(e) {
    var newTodos = [];
    var todos = this.data.todos;
    var index = e.target.dataset.index;
    for(var i = 0; i < todos.length; i++) {
        if(i == index) {
            continue;
        }
        newTodos.push(todos[i]);
    }
    this.setData({todos: newTodos});
  }
})