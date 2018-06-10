    new Vue({

					el: '#root',

					data: {

						tasks: [
							{description: 'Go to the shop', completed: false},
							{description: 'Phone client', completed: true},
							{description: 'Clean car', completed: false},
							{description: 'Empty bins', completed: true},
							{description: 'Make Dinner', completed: false},
							{description: 'Wash dishes', completed: false}
						]

					},

					computed : {

						incompleteTasks() {
							return this.tasks.filter(task => ! task.completed);
							}
						}


				});